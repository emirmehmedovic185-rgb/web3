
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'ACCUEIL', id: Page.Home },
    { label: 'À PROPOS', id: Page.About },
    { label: 'CONTACT', id: Page.Contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 py-4 backdrop-blur-md' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => setPage(Page.Home)}
        >
          <div className="w-10 h-10 bg-scuderia-red flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-white font-bold -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-xl">S</span>
          </div>
          <span className="text-2xl font-serif font-black tracking-tighter">SCUDERIA<span className="text-scuderia-red">VISION</span></span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-sm tracking-[0.2em] font-semibold transition-colors relative group ${currentPage === item.id ? 'text-scuderia-red' : 'text-gray-400 hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-scuderia-red transition-transform duration-300 ${currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black h-screen flex flex-col items-center justify-center space-y-12 pb-32"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className="text-4xl font-serif italic hover:text-scuderia-red transition-colors flex items-center group"
              >
                {item.label}
                <ChevronRight className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={40} />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
