import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Vercel Cron Job — keeps Supabase Free tier alive by triggering a lightweight
 * query every 5 days (schedule: "0 0 */5 * *" in vercel.json).
 *
 * Vercel automatically injects Authorization: Bearer <CRON_SECRET> on cron
 * invocations. Set CRON_SECRET in the Vercel project environment variables.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Reject non-GET methods
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

  const apiUrl = process.env.VITE_API_URL || 'http://localhost:3001';

  try {
    const response = await fetch(`${apiUrl}/health/supabase`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(15000),
    });

    const data = await response.json() as Record<string, unknown>;

    return res.status(200).json({
      ok: true,
      timestamp: new Date().toISOString(),
      supabase: data,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({
      ok: false,
      timestamp: new Date().toISOString(),
      error: message,
    });
  }
}
