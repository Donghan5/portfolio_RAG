import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  error?: boolean;
}

export default function CommandPalette() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isExpanded]);

  const sendMessage = useCallback(async (text: string) => {
    setIsExpanded(true);
    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text }),
          signal: controller.signal,
        }
      );
      clearTimeout(timeout);

      if (!response.ok) {
        const status = response.status;
        const errorMsg = status >= 500
          ? 'Server error — the AI service may be down. Please try again.'
          : status === 429
            ? 'Too many requests — please wait a moment and try again.'
            : `Request failed (${status}). Please try again.`;
        throw new Error(errorMsg);
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      let errorMsg: string;
      if (err instanceof DOMException && err.name === 'AbortError') {
        errorMsg = 'Request timed out — the AI service is taking too long. Please try again.';
      } else if (err instanceof TypeError) {
        errorMsg = 'Network error — could not reach the server. Check your connection and try again.';
      } else if (err instanceof Error) {
        errorMsg = err.message;
      } else {
        errorMsg = 'Something went wrong. Please try again.';
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: errorMsg, error: true }]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInput('');
    sendMessage(trimmed);
  }, [input, isLoading, sendMessage]);

  const handleRetry = useCallback((messageIndex: number) => {
    // Find the user message before this error
    let userText = '';
    for (let i = messageIndex - 1; i >= 0; i--) {
      if (messages[i].role === 'user') {
        userText = messages[i].content;
        break;
      }
    }
    if (!userText) return;

    // Remove the error message and resend
    setMessages((prev) => prev.filter((_, i) => i !== messageIndex));
    sendMessage(userText);
  }, [messages, sendMessage]);

  return (
    <div className="w-full max-w-[640px] mx-auto relative z-10">
      {/* Main palette container */}
      <div
        className={`bg-bg-surface/80 backdrop-blur-xl border rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isExpanded
            ? 'border-primary/30 glow-border-active'
            : 'border-border-bright/50 glow-border hover:border-primary/20'
        }`}
      >
        {/* Input row */}
        <div className="flex items-center gap-3 px-5 py-4">
          <i className="fas fa-terminal text-primary text-sm opacity-60" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            onFocus={() => messages.length > 0 && setIsExpanded(true)}
            disabled={isLoading}
            placeholder={isLoading ? 'Thinking...' : 'Ask AI about Donghan... (⌘K or Ctrl+K to focus)'}
            className="flex-1 bg-transparent text-text-main text-[15px] outline-none placeholder:text-text-subtle font-light tracking-wide disabled:opacity-50"
          />
          {!isExpanded && (
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-border/50 text-text-subtle text-xs font-mono border border-border-bright/30">
              ⌘K
            </kbd>
          )}
          {input.trim() && (
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200 cursor-pointer border-none disabled:opacity-40"
            >
              <i className="fas fa-arrow-up text-xs" />
            </button>
          )}
        </div>

        {/* Expanded results area */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-border/50" />
          <div className="overflow-y-auto max-h-[360px] p-5 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center mr-3 mt-0.5 shrink-0 ${msg.error ? 'bg-red-500/10' : 'bg-primary/10'}`}>
                    <i className={`fas ${msg.error ? 'fa-exclamation-triangle text-red-400' : 'fa-sparkles text-primary'} text-[10px]`} />
                  </div>
                )}
                <div className="flex flex-col">
                  <div
                    className={`max-w-[85%] text-[14px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'text-text-muted font-mono text-[13px] bg-border/30 px-3 py-2 rounded-xl'
                        : msg.error
                          ? 'text-red-400/80'
                          : 'text-text-main'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.error && (
                    <button
                      onClick={() => handleRetry(i)}
                      disabled={isLoading}
                      className="mt-2 text-[12px] font-mono text-primary/70 hover:text-primary transition-colors cursor-pointer bg-transparent border border-primary/20 rounded-md px-2 py-1 w-fit disabled:opacity-40"
                    >
                      <i className="fas fa-redo text-[10px] mr-1" /> Retry
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-sparkles text-primary text-[10px]" />
                </div>
                <div className="flex gap-1.5 pt-2">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-border/30">
            <span className="text-text-subtle text-[11px] font-mono">
              Powered by Llama 3
            </span>
            <button
              onClick={() => {
                setMessages([]);
                setIsExpanded(false);
              }}
              className="text-text-subtle text-[11px] font-mono hover:text-text-muted transition-colors cursor-pointer bg-transparent border-none"
            >
              Clear · Esc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
