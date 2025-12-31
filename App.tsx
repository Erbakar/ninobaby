
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import About from './components/About';
import Contact from './components/Contact';
import { Product } from './types';

export type View = 'home' | 'products' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setCurrentView('products')} />
            
            {/* Why Us Section */}
            <section className="py-20 bg-orange-50/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 transform hover:-translate-y-1 transition-transform">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Maksimum Güvenlik</h3>
                    <p className="text-gray-600">Tüm ürünlerimiz uluslararası güvenlik standartlarına tam uyum sağlar.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 transform hover:-translate-y-1 transition-transform">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Üstün Konfor</h3>
                    <p className="text-gray-600">Bebeğinizin rahatlığı bizim için her şeyden önce gelir.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 transform hover:-translate-y-1 transition-transform">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Hızlı Teslimat</h3>
                    <p className="text-gray-600">Siparişleriniz en geç 24 saat içinde kargoya verilir.</p>
                  </div>
                </div>
              </div>
            </section>

            <ProductGrid 
              onSelectProduct={handleOpenProduct} 
              title="Günün Fırsatları" 
              subtitle="En çok tercih edilen ürünlerimize göz atın."
              showAllButton={() => setCurrentView('products')}
            />
          </>
        );
      case 'products':
        return (
          <div className="pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <nav className="flex mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <button onClick={() => setCurrentView('home')} className="text-gray-400 hover:text-gray-500">
                      <svg className="flex-shrink-0 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                      </svg>
                      <span className="ml-4 text-sm font-medium text-gray-500">Tüm Ürünler</span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Mağazamız</h1>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                Bebeğiniz için ihtiyacınız olan her şey burada. En güvenilir ve kaliteli ürünleri sizin için bir araya getirdik.
              </p>
            </div>
            <ProductGrid 
              onSelectProduct={handleOpenProduct} 
              title="Tüm Koleksiyon" 
              subtitle="Toplam 10 ürün listeleniyor"
            />
          </div>
        );
      case 'about':
        return <About onShopNow={() => setCurrentView('products')} />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}

        {/* Brand Banner */}
        <section className="bg-gradient-to-r from-orange-500 to-amber-600 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              İlk Siparişinize Özel %15 İndirim!
            </h2>
            <p className="text-orange-50 mb-10 text-lg opacity-90">
              Kod: NINO15 - Seçili ürünlerde geçerli hoş geldin indirimi.
            </p>
            <button className="bg-white text-orange-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl">
              İndirimi Kullan
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={handleCloseProduct} />
      )}
    </div>
  );
};

export default App;
