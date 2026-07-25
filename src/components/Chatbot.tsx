import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { CrackAnalysis } from '../types';

interface ChatbotProps {
  currentImage: CrackAnalysis | null;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot({ currentImage }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { role: 'assistant', content: 'Hello! I am the AI Crack Assistant. You can ask me anything about the currently selected crack analysis results.' }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    let systemPrompt = 'You are an AI assistant for a structural crack detection system. YOUR GUARDRAILS: You must ONLY answer questions strictly related to structural engineering, concrete cracks, and the current crack analysis results provided to you. If the user asks about general knowledge, programming, writing, math, or anything outside of this domain, you must politely decline and remind them that you are an engineering analysis assistant. Keep your answers concise, objective, and professional. ';
    if (currentImage) {
      systemPrompt += `The user is currently looking at an image named "${currentImage.fileName}". `;
      systemPrompt += `The severity level is "${currentImage.severityLevel}". `;
      systemPrompt += `The total crack area is ${currentImage.crackAreaMm2.toFixed(2)} mm², length is ${currentImage.crackLengthMm.toFixed(2)} mm, and width is ${currentImage.crackWidthMm.toFixed(2)} mm. `;
      systemPrompt += `Summary of the image: ${currentImage.summary} `;
    } else {
      systemPrompt += `No specific image is selected yet.`;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error fetching chat:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error communicating with the server.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-tech-dark text-tech-bg rounded-full shadow-lg hover:scale-105 transition-transform z-50 flex items-center justify-center no-print"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-tech-bg border border-tech-dark shadow-2xl z-50 flex flex-col h-[500px] max-h-[80vh] no-print rounded-sm overflow-hidden">
      {/* Header */}
      <div className="bg-tech-dark text-tech-bg p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <span className="font-bold font-mono text-sm tracking-wide">AI ASSISTANT</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:text-tech-accent transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-white">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 text-sm ${
                msg.role === 'user' 
                  ? 'bg-tech-dark text-tech-bg rounded-tl-xl rounded-tr-xl rounded-bl-xl' 
                  : 'bg-tech-accent/30 border border-tech-dark/20 text-tech-dark rounded-tr-xl rounded-bl-xl rounded-br-xl'
              }`}
            >
              <p className="whitespace-pre-wrap font-sans leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-tech-accent/30 border border-tech-dark/20 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl">
              <Loader2 className="w-4 h-4 animate-spin text-tech-dark" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-tech-dark p-3 bg-tech-bg flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about this crack..."
          className="flex-1 bg-white border border-tech-dark px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-tech-dark text-tech-dark"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="bg-tech-dark text-tech-bg px-3 py-2 hover:bg-tech-dark/90 disabled:opacity-50 transition-colors flex items-center justify-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
