import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Vercel Cron Job — keeps Supabase Free tier alive every 3 days.
 *
 * Two-layer strategy:
 *  1. Direct Supabase REST ping (primary) — bypasses any sleeping intermediate service.
 *  2. API gateway health check (secondary) — wakes up downstream services as a bonus.
 *
 * Required env vars in Vercel project settings:
 *   SUPABASE_URL        e.g. https://xxxx.supabase.co
 *   SUPABASE_ANON_KEY   public anon key
 *   CRON_SECRET         secret Vercel injects as Bearer token automatically
 *   VITE_API_URL        API gateway URL (optional fallback)
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify CRON_SECRET — Vercel passes it automatically as Bearer token
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = req.headers['authorization'];
    if (authHeader !== `Bearer ${cronSecret}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  const timestamp = new Date().toISOString();
  const results: Record<string, unknown> = { timestamp };

  // --- 1. Direct Supabase REST ping ---
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseAnonKey) {
    try {
      // Hit the PostgREST root — no table needed, just proves the DB is awake
      const supaRes = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'GET',
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        signal: AbortSignal.timeout(10000),
      });
      results.supabase_direct = { ok: supaRes.ok, status: supaRes.status };
    } catch (err) {
      results.supabase_direct = {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  } else {
    results.supabase_direct = { ok: false, error: 'SUPABASE_URL or SUPABASE_ANON_KEY not set' };
  }

  // --- 2. API gateway health check (secondary — also wakes downstream services) ---
  const apiUrl = process.env.VITE_API_URL;
  if (apiUrl) {
    try {
      const gwRes = await fetch(`${apiUrl}/health/supabase`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(15000),
      });
      results.api_gateway = {
        ok: gwRes.ok,
        status: gwRes.status,
        data: await gwRes.json().catch(() => null),
      };
    } catch (err) {
      results.api_gateway = {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  }

  const overallOk =
    (results.supabase_direct as { ok: boolean }).ok === true;

  return res.status(overallOk ? 200 : 500).json({ ok: overallOk, ...results });
}
