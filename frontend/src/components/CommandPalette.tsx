import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  error?: boolean;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Warm up the backend on mount to avoid cold-start timeouts on Render Free tier
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    fetch(`${apiUrl}/health`, { method: 'GET' }).catch(() => {});
  }, []);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen]);

  const sendMessage = useCallback(async (text: string) => {
    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);

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
    let userText = '';
    for (let i = messageIndex - 1; i >= 0; i--) {
      if (messages[i].role === 'user') {
        userText = messages[i].content;
        break;
      }
    }
    if (!userText) return;

    setMessages((prev) => prev.filter((_, i) => i !== messageIndex));
    sendMessage(userText);
  }, [messages, sendMessage]);

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed z-50
          left-0 right-0
          bottom-[calc(80px+env(safe-area-inset-bottom,0px))]
          h-[calc(100dvh-80px-env(safe-area-inset-bottom,0px))]
          md:left-auto md:right-4 md:bottom-20 md:w-96 md:h-[500px]
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full mx-2 md:mx-0 bg-bg-surface/90 backdrop-blur-xl border border-primary/30 rounded-2xl overflow-hidden glow-border-active">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 shrink-0">
            <div className="flex items-center gap-2">
              <i className="fas fa-terminal text-primary text-sm opacity-60" />
              <span className="text-text-subtle text-[11px] font-mono">Ask AI about Donghan</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-subtle hover:text-text-muted transition-colors cursor-pointer bg-transparent border-none text-sm leading-none"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Messages area - scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-5 space-y-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-sparkles text-primary text-sm" />
                </div>
                <p className="text-text-subtle text-[13px] font-mono leading-relaxed">
                  Ask me anything about Donghan's<br />experience, projects, or skills.
                </p>
                <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-border/50 text-text-subtle text-xs font-mono border border-border-bright/30">
                  ⌘K
                </kbd>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center mr-3 mt-0.5 shrink-0 ${msg.error ? 'bg-red-500/10' : 'bg-primary/10'}`}>
                    <i className={`fas ${msg.error ? 'fa-exclamation-triangle text-red-400' : 'fa-sparkles text-primary'} text-[10px]`} />
                  </div>
                )}
                <div className="flex flex-col max-w-[85%]">
                  <div
                    className={`text-[14px] leading-relaxed ${
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

          {/* Input — always at bottom */}
          <div className="border-t border-border/50 shrink-0">
            <div className="flex items-center gap-3 px-5 py-4">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
                placeholder={isLoading ? 'Thinking...' : 'Type your question...'}
                className="flex-1 bg-transparent text-text-main text-base md:text-[15px] outline-none placeholder:text-text-subtle font-light tracking-wide disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200 cursor-pointer border-none disabled:opacity-40"
              >
                <i className="fas fa-arrow-up text-xs" />
              </button>
            </div>
            <div className="flex items-center justify-between px-5 pb-3">
              <span className="text-text-subtle text-[11px] font-mono">Powered by Llama 3</span>
              {messages.length > 0 && (
                <button
                  onClick={() => setMessages([])}
                  className="text-text-subtle text-[11px] font-mono hover:text-text-muted transition-colors cursor-pointer bg-transparent border-none"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
        className={`fixed right-4 z-50 w-12 h-12 rounded-2xl shadow-lg
          flex items-center justify-center
          transition-all duration-300 cursor-pointer border-none
          ${isOpen
            ? 'bg-primary/90 text-bg scale-95 shadow-[0_0_20px_rgba(167,139,250,0.4)]'
            : 'bg-bg-surface/90 backdrop-blur-xl border border-primary/25 text-primary hover:bg-primary/10 hover:border-primary/40'
          }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <i className={`fas transition-all duration-300 text-base ${isOpen ? 'fa-times' : 'fa-comments'}`} />
      </button>
    </>
  );
}
