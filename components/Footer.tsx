
import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-gray-900 text-white pt-32 pb-12 relative overflow-hidden">
      {/* Wavy top effect using SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-20 fill-[#FFFCF7]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <span className="text-4xl font-black tracking-tighter text-yellow-400">
              ninobaby
            </span>
            <p className="text-gray-400 leading-relaxed font-medium">
              Sevgiyle tasarlanan, güvenle büyüten modern bebek dünyasının yeni adresi. Bizimle her an daha renkli.
            </p>
            <div className="flex space-x-6">
              {[1,2,3].map(i => (
                <div key={i} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:rotate-12 transition-all cursor-pointer">
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black text-white mb-8">Kategoriler</h4>
            <ul className="space-y-4 font-bold text-gray-400">
              <li><button onClick={() => setView('products')} className="hover:text-yellow-400 transition-colors">Mama Sandalyeleri</button></li>
              <li><button onClick={() => setView('products')} className="hover:text-yellow-400 transition-colors">Portatif Tuvaletler</button></li>
              <li><button onClick={() => setView('products')} className="hover:text-yellow-400 transition-colors">Bebek Yatakları</button></li>
              <li><button onClick={() => setView('products')} className="hover:text-yellow-400 transition-colors">Aksesuarlar</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black text-white mb-8">Kurumsal</h4>
            <ul className="space-y-4 font-bold text-gray-400">
              <li><button onClick={() => setView('about')} className="hover:text-yellow-400 transition-colors">Hakkımızda</button></li>
              <li><button onClick={() => setView('contact')} className="hover:text-yellow-400 transition-colors">İletişim</button></li>
              <li><button onClick={() => setView('stores')} className="hover:text-yellow-400 transition-colors">Mağazalarımız</button></li>
              <li><button onClick={() => setView('career')} className="hover:text-yellow-400 transition-colors">Kariyer</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black text-white mb-8">Bülten</h4>
            <p className="text-gray-400 mb-8 font-medium">Haberlerden ilk siz haberdar olun!</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="E-posta" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-yellow-400 text-yellow-900 px-6 rounded-xl font-black hover:bg-yellow-300 transition-all">
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold text-sm">
            © 2024 ninobaby.com | Her çocuk özeldir.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-500">
            <button onClick={() => setView('privacy')} className="hover:text-white transition-colors">Gizlilik</button>
            <button onClick={() => setView('shipping')} className="hover:text-white transition-colors">Teslimat</button>
            <button onClick={() => setView('payment')} className="hover:text-white transition-colors">Ödeme</button>
            <button onClick={() => setView('terms')} className="hover:text-white transition-colors">Şartlar</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
