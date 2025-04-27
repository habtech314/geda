import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot } from 'lucide-react';
import { FAQ } from '../../types';

interface ChatbotProps {
  isOpen: boolean;
  toggle: () => void;
}

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, toggle }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: t('chatbot.welcome'),
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [t]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Get FAQ answers for common questions
  const getFAQAnswer = (question: string): string | null => {
    const faqs = t('chatbot.faq', { returnObjects: true }) as FAQ[];
    const lowerQuestion = question.toLowerCase();
    
    for (const faq of faqs) {
      if (lowerQuestion.includes(faq.question.toLowerCase())) {
        return faq.answer;
      }
    }
    
    return null;
  };
  
  // Handle user messages and bot responses
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot thinking
    setTimeout(() => {
      const faqAnswer = getFAQAnswer(input);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: faqAnswer || "I'll connect you with our staff for more information. You can also call us at +251 11 234 5678 for immediate assistance.",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-6 w-80 md:w-96 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary-500 text-white p-3 flex items-center">
            <Bot size={20} className="mr-2" />
            <h3 className="font-medium">{t('chatbot.title')}</h3>
          </div>
          
          {/* Messages */}
          <div className="flex-grow p-3 overflow-y-auto bg-neutral-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-neutral-800 border border-neutral-200'
                  }`}
                >
                  <div className="flex items-start mb-1">
                    {message.sender === 'bot' && <Bot size={16} className="mr-1 mt-1 text-primary-500" />}
                    {message.sender === 'user' && <User size={16} className="mr-1 mt-1 text-white" />}
                    <span className="text-xs opacity-75">
                      {message.sender === 'user' ? 'You' : 'GEDA Assistant'}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="p-3 border-t border-neutral-200 bg-white">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chatbot.placeholder')}
                className="flex-grow px-3 py-2 border border-neutral-300 rounded-l-md focus:outline-none focus:border-primary-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary-500 text-white px-3 py-2 rounded-r-md hover:bg-primary-600 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;