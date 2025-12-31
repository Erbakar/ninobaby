
import React from 'react';

interface AboutProps {
  onShopNow: () => void;
}

const About: React.FC<AboutProps> = ({ onShopNow }) => {
  return (
    <div className="bg-white dot-pattern">
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-full h-full bg-yellow-100 rounded-[80px] -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1200" 
                alt="Joyful Moment" 
                className="relative rounded-[80px] shadow-2xl z-10 w-full"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl z-20 max-w-xs border-4 border-yellow-50">
                 <p className="text-orange-500 font-black text-4xl mb-2">9 Yıl</p>
                 <p className="text-gray-600 font-bold">Güvenle ve sevgiyle büyüyen nesillerin yanındayız.</p>
              </div>
            </div>
            
            <div className="space-y-10">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                Her Gülümseme <br />
                Bir <span className="text-yellow-500 underline decoration-orange-300">Hikaye</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                NinoBaby, bir markadan öte bir aile hayali olarak doğdu. Bebeklerin en hassas dönemlerinde onlara eşlik eden her bir ürünümüzü, tıpkı kendi çocuklarımız için seçer gibi büyük bir titizlikle hazırlıyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-orange-50 rounded-[35px]">
                  <p className="text-3xl font-black text-orange-500 mb-2">100%</p>
                  <p className="text-gray-700 font-bold">Doğal Materyal</p>
                </div>
                <div className="p-6 bg-yellow-50 rounded-[35px]">
                  <p className="text-3xl font-black text-yellow-500 mb-2">24/7</p>
                  <p className="text-gray-700 font-bold">Mutlu Destek</p>
                </div>
              </div>

              <button 
                onClick={onShopNow}
                className="inline-block bg-gray-900 text-white px-12 py-6 rounded-full font-black text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95"
              >
                Aramıza Katıl
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
