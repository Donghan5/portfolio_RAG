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
        {/* Dark terminal panel on light page */}
        <div className="flex flex-col h-full mx-2 md:mx-0 chat-surface overflow-hidden glow-border-active" style={{ borderRadius: '2px' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#2e2e2a] shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#e63320] tracking-[0.15em] uppercase">Terminal</span>
              <span className="font-mono text-[10px] text-[#4a4640]">·</span>
              <span className="font-mono text-[11px] text-[#6a6660]">Ask AI about Donghan</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#4a4640] hover:text-[#e8e4dc] transition-colors cursor-pointer bg-transparent border-none text-sm leading-none"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-5 space-y-4 scrollbar-hide">
            {messages.length === 0 && (
              <div className="flex flex-col items-start justify-center h-full gap-3 py-8">
                <p className="font-mono text-[11px] text-[#e63320]">$ donghan --query</p>
                <p className="font-mono text-[12px] text-[#6a6660] leading-relaxed">
                  Ask me anything about Donghan's<br />experience, projects, or skills.
                </p>
                <p className="font-mono text-[10px] text-[#3a3a36] tracking-[0.08em]">
                  Press <span className="text-[#6a6660]">⌘K</span> to open / close
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className="flex flex-col gap-1">
                {msg.role === 'user' && (
                  <p className="font-mono text-[10px] text-[#e63320]">$ query</p>
                )}
                <div className="flex flex-col max-w-[92%]">
                  <div
                    className={`font-mono text-[13px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'text-[#c8c4bc]'
                        : msg.error
                          ? 'text-red-400/80'
                          : 'text-[#e8e4dc]'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.error && (
                    <button
                      onClick={() => handleRetry(i)}
                      disabled={isLoading}
                      className="mt-2 font-mono text-[11px] text-[#e63320]/70 hover:text-[#e63320] transition-colors cursor-pointer bg-transparent border border-[#e63320]/20 px-2 py-1 w-fit disabled:opacity-40"
                      style={{ borderRadius: '2px' }}
                    >
                      <i className="fas fa-redo text-[10px] mr-1" /> retry
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2">
                <p className="font-mono text-[11px] text-[#4a4640]">processing</p>
                <div className="flex gap-1">
                  <span className="w-1 h-1 bg-[#e63320]/50 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1 h-1 bg-[#e63320]/50 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1 h-1 bg-[#e63320]/50 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#2e2e2a] shrink-0">
            <div className="flex items-center gap-2 px-5 py-4">
              <span className="font-mono text-[11px] text-[#e63320] shrink-0">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
                placeholder={isLoading ? 'thinking...' : 'type your question...'}
                className="flex-1 bg-transparent text-[#e8e4dc] text-[14px] outline-none placeholder:text-[#3a3a36] font-mono disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-7 h-7 flex items-center justify-center text-[#e63320]/60 hover:text-[#e63320] transition-colors duration-200 cursor-pointer bg-transparent border-none disabled:opacity-30"
              >
                <i className="fas fa-arrow-up text-xs" />
              </button>
            </div>
            <div className="flex items-center justify-between px-5 pb-3">
              <span className="font-mono text-[10px] text-[#3a3a36]">Powered by Llama 3</span>
              {messages.length > 0 && (
                <button
                  onClick={() => setMessages([])}
                  className="font-mono text-[10px] text-[#3a3a36] hover:text-[#6a6660] transition-colors cursor-pointer bg-transparent border-none"
                >
                  clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating toggle button — dark on light page */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px)', borderRadius: '2px' }}
        className={`fixed right-4 z-50 w-11 h-11
          flex items-center justify-center
          transition-all duration-300 cursor-pointer border-none
          ${isOpen
            ? 'bg-[#e63320] text-white scale-95 shadow-[0_4px_20px_rgba(230,51,32,0.4)]'
            : 'bg-[#111110] border border-[#2e2e2a] text-[#e63320] hover:bg-[#1a1a18] shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
          }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <i className={`fas transition-all duration-300 text-sm ${isOpen ? 'fa-times' : 'fa-terminal'}`} />
      </button>
    </>
  );
}
