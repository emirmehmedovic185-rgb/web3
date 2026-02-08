
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Sparkles } from 'lucide-react';
import { getConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bienvenue chez Scuderia Vision. Je suis votre concierge personnel. Comment puis-je vous assister dans votre quête de la perfection automobile aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getConciergeResponse(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response || "Je m'excuse, une erreur s'est produite. Comment puis-je vous aider autrement ?" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Le service est temporairement indisponible. Veuillez nous contacter directement." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-scuderia-red text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-28 right-8 z-50 w-[350px] md:w-[400px] h-[550px] glass-morphism rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-scuderia-red to-red-800 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Sparkles className="text-scuderia-red" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-widest">CONCIERGE AI</h4>
                  <span className="text-[10px] text-white/70 uppercase">Maranello Experience</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            {/* Chat Content */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-scuderia-red text-white rounded-tr-none' : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none animate-pulse flex space-x-2">
                    <div className="w-2 h-2 bg-white/40 rounded-full" />
                    <div className="w-2 h-2 bg-white/40 rounded-full" />
                    <div className="w-2 h-2 bg-white/40 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-black/40">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez votre question..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-scuderia-red transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-scuderia-red rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Concierge;
