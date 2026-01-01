
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import StaticPage from './components/StaticPage';
import { Product } from './types';
import { fetchProductsFromCMS } from './lib/cms';
import { PRODUCTS as initialProducts } from './constants';

export type View = 'home' | 'products' | 'about' | 'contact' | 'privacy' | 'shipping' | 'payment' | 'terms' | 'stores' | 'career' | 'product-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const cmsProducts = await fetchProductsFromCMS();
      if (cmsProducts.length > 0) {
        setProducts(cmsProducts);
      }
      setIsLoading(false);
    };
    loadProducts();
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo(0, 0);
  };

  const handleCloseProduct = () => {
    setCurrentView('products');
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
              products={products.slice(0, 4)}
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
      case 'privacy':
        return (
          <StaticPage 
            title="Gizlilik Politikası" 
            content={
              <div className="space-y-6 text-gray-600">
                <p>NinoBaby olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, şirketimize ait web sitemizi kullanırken paylaştığınız verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na ("KVKK") uygun olarak işlenmesine ve korunmasına büyük önem veriyoruz.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Veri Toplama ve Kullanımı</h3>
                <p>Siparişlerinizi işlemek, size daha iyi bir hizmet sunmak ve kampanyalarımızdan haberdar etmek amacıyla ad, soyad, e-posta ve adres gibi bilgilerinizi topluyoruz. Bu bilgiler, yasal zorunluluklar haricinde üçüncü şahıslarla asla paylaşılmaz.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Çerezler (Cookies)</h3>
                <p>Web sitemizdeki deneyiminizi iyileştirmek için çerezler kullanıyoruz. Çerezler, tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır.</p>
              </div>
            } 
          />
        );
      case 'shipping':
        return (
          <StaticPage 
            title="Teslimat Bilgileri" 
            content={
              <div className="space-y-6 text-gray-600">
                <p>Siparişleriniz, onaylandıktan sonra en geç 24 saat içinde kargoya teslim edilmektedir. Hafta sonu ve resmi tatillerde verilen siparişler, takip eden ilk iş gününde işleme alınır.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Kargo Ücretleri</h3>
                <p>1500 TL ve üzeri alışverişlerinizde kargo ücretsizdir. Bu tutarın altındaki siparişlerinizde kargo ücreti ödeme sayfasında otomatik olarak hesaplanmaktadır.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Teslimat Süresi</h3>
                <p>Kargoya teslim edilen siparişler, bulunduğunuz bölgeye göre genellikle 1-3 iş günü içerisinde adresinize teslim edilmektedir.</p>
              </div>
            } 
          />
        );
      case 'payment':
        return (
          <StaticPage 
            title="Ödeme Seçenekleri" 
            content={
              <div className="space-y-6 text-gray-600">
                <p>NinoBaby üzerinden yapacağınız alışverişlerde güvenli ödeme yöntemlerini kullanabilirsiniz.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Kredi Kartı</h3>
                <p>Tüm banka ve kredi kartları ile (Visa, MasterCard, Troy) ödemenizi gerçekleştirebilirsiniz. 256-bit SSL sertifikası ile ödeme bilgileriniz şifrelenmektedir.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Havale / EFT</h3>
                <p>Ödemenizi banka havalesi veya EFT yoluyla da yapabilirsiniz. Bu yöntemi seçtiğinizde, sipariş onayından sonra banka bilgilerimiz tarafınıza iletilecektir.</p>
              </div>
            } 
          />
        );
      case 'terms':
        return (
          <StaticPage 
            title="Kullanım Koşulları" 
            content={
              <div className="space-y-6 text-gray-600">
                <p>Bu web sitesini kullanarak, aşağıda belirtilen kullanım koşullarını kabul etmiş sayılırsınız.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Fikri Mülkiyet</h3>
                <p>Sitede yer alan tüm içerik, tasarım, logo ve görseller NinoBaby'e aittir. İzinsiz kopyalanması veya kullanılması yasaktır.</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Hizmet Değişiklikleri</h3>
                <p>NinoBaby, sitede sunulan hizmetleri ve fiyatları dilediği zaman değiştirme hakkını saklı tutar.</p>
              </div>
            } 
          />
        );
      case 'stores':
        return (
          <StaticPage 
            title="Mağazalarımız" 
            content={
              <div className="space-y-12">
                <div className="border-b border-orange-100 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">İstanbul - Beşiktaş (Merkez)</h3>
                  <p className="text-gray-600">Bebek Mah. Mutluluk Cad. No:42, Beşiktaş</p>
                  <p className="text-orange-500 font-bold mt-2">0212 555 0101</p>
                </div>
                <div className="border-b border-orange-100 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ankara - Çankaya</h3>
                  <p className="text-gray-600">Tunalı Hilmi Cad. No:123, Çankaya</p>
                  <p className="text-orange-500 font-bold mt-2">0312 444 0202</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">İzmir - Karşıyaka</h3>
                  <p className="text-gray-600">Mavişehir Mah. Sahil Bulvarı No:5, Karşıyaka</p>
                  <p className="text-orange-500 font-bold mt-2">0232 333 0303</p>
                </div>
              </div>
            } 
          />
        );
      case 'career':
        return (
          <StaticPage 
            title="Kariyer" 
            content={
              <div className="space-y-8 text-gray-600">
                <p>NinoBaby ailesine katılmak ve bebeklerin dünyasını güzelleştiren ekibimizin bir parçası olmak ister misiniz?</p>
                <h3 className="text-xl font-bold text-gray-900 mt-8">Açık Pozisyonlar</h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Mağaza Satış Danışmanı (İstanbul)</li>
                  <li>E-ticaret Operasyon Uzmanı</li>
                  <li>Müşteri Deneyimi Temsilcisi</li>
                </ul>
                <p className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mt-8">
                  Özgeçmişinizi <strong>ik@ninobaby.com</strong> adresine göndererek genel başvuru yapabilirsiniz.
                </p>
              </div>
            } 
          />
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onClose={handleCloseProduct} 
          />
        ) : null;
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

      <Footer setView={setCurrentView} />

      {/* {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={handleCloseProduct} />
      )} */}
    </div>
  );
};

export default App;
