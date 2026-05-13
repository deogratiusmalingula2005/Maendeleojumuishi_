import React, { useState } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';
import { motion, AnimatePresence } from 'motion/react';

export const AIChat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMessage);
      setMessages((prev) => [...prev, { role: 'ai', content: response || 'Samahani, sikuweza kupata jibu.' }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'ai', content: 'Samahani, kuna tatizo limetokea. Tafadhali jaribu tena baadaye.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-6 flex flex-col h-[500px]">
      <div className="flex items-center gap-2 mb-6 border-b border-neutral-100 pb-4">
        <Bot className="w-6 h-6 text-tz-blue" />
        <h2 className="text-xl font-display font-bold text-tz-black">Uliza AI Kuhusu Tanzania</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
        {messages.length === 0 && (
          <div className="text-center text-neutral-400 mt-10">
            <p className="text-sm">Anza mazungumzo kwa kuuliza swali lolote kuhusu sera au maendeleo ya Tanzania.</p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                msg.role === 'user' 
                  ? 'bg-tz-blue text-white rounded-tr-none' 
                  : 'bg-neutral-100 text-tz-black rounded-tl-none'
              }`}>
                {msg.role === 'ai' && <Bot className="w-5 h-5 shrink-0 mt-1" />}
                <p className="text-sm leading-relaxed">{msg.content}</p>
                {msg.role === 'user' && <User className="w-5 h-5 shrink-0 mt-1" />}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 p-4 rounded-2xl rounded-tl-none flex gap-3">
              <Loader2 className="w-5 h-5 animate-spin text-tz-blue" />
              <p className="text-sm text-neutral-500 italic">AI inafikiria...</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Andika swali lako hapa..."
          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-tz-blue/20 focus:border-tz-blue transition-all"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-tz-blue hover:bg-tz-blue/10 rounded-lg transition-all disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
