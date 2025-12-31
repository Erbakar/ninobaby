
import React from 'react';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative overflow-hidden pt-10 pb-20 dot-pattern">
      <div className="blob w-96 h-96 bg-yellow-300 top-0 -right-20"></div>
      <div className="blob w-80 h-80 bg-orange-300 bottom-0 -left-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/40 backdrop-blur-sm rounded-[60px] p-10 lg:p-20 border border-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-block px-6 py-2 bg-yellow-100 text-yellow-700 rounded-full font-bold text-sm tracking-widest uppercase">
                👶 Yeni Sezon Ürünleri
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[1.1]">
                Miniklere <br />
                <span className="text-orange-500 italic">Büyük</span> Konfor
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                ninobaby ile bebeğinizin dünyasını renklendirin. En güvenli, en şık ve en konforlu ürünlerle ebeveynliği keyfe dönüştürün.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={onExplore}
                  className="bg-orange-500 text-white px-12 py-6 rounded-[30px] font-black text-xl hover:bg-orange-600 transition-all shadow-[0_15px_30px_-10px_rgba(249,115,22,0.5)] hover:shadow-orange-300 active:scale-95"
                >
                  Şimdi Keşfet
                </button>
                <div className="flex items-center gap-4 px-6">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-white shadow-lg bg-gray-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/face${i}/100/100`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">10k+ Anne</div>
                    <div className="text-sm text-gray-500">Bize güveniyor</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-200 rounded-[80px] rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative rounded-[80px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544126592-807daa215a15?auto=format&fit=crop&q=80&w=1200" 
                  alt="Hero Baby" 
                  className="w-full h-full object-cover aspect-[4/5] transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white p-4 rounded-full shadow-2xl animate-bounce duration-[3000ms] flex items-center justify-center text-center">
                 <div className="font-black text-orange-500 leading-none">
                    <span className="text-3xl">20%</span><br />
                    <span className="text-sm text-gray-500">İNDİRİM</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
