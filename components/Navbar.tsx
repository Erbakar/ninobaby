
import React, { useState } from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (view: View) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-xl sticky top-0 z-[100] border-b border-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigateTo('home')}
              className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
            >
              ninobaby
            </button>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {['home', 'products', 'about', 'contact'].map((view) => (
              <button 
                key={view}
                onClick={() => navigateTo(view as View)}
                className={`relative py-2 text-lg font-bold transition-all ${
                  currentView === view ? 'text-orange-500' : 'text-gray-600 hover:text-orange-400'
                }`}
              >
                {view === 'home' && 'Ana Sayfa'}
                {view === 'products' && 'Ürünler'}
                {view === 'about' && 'Hakkımızda'}
                {view === 'contact' && 'İletişim'}
                {currentView === view && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-yellow-400 text-yellow-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-md hover:shadow-xl active:scale-95">
              Giriş Yap
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-orange-500"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-2xl p-6 space-y-4 border-b border-orange-50 animate-in fade-in zoom-in duration-200">
          <button onClick={() => navigateTo('home')} className="block w-full text-center text-xl font-bold p-4 rounded-3xl hover:bg-orange-50">Ana Sayfa</button>
          <button onClick={() => navigateTo('products')} className="block w-full text-center text-xl font-bold p-4 rounded-3xl hover:bg-orange-50">Ürünler</button>
          <button onClick={() => navigateTo('about')} className="block w-full text-center text-xl font-bold p-4 rounded-3xl hover:bg-orange-50">Hakkımızda</button>
          <button onClick={() => navigateTo('contact')} className="block w-full text-center text-xl font-bold p-4 rounded-3xl hover:bg-orange-50">İletişim</button>
          <button className="w-full bg-yellow-400 text-yellow-900 p-5 rounded-full font-bold text-lg">Giriş Yap</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
