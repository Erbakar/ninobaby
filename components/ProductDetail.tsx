import React, { useState, useEffect } from 'react';
import { Product } from '../src/models/Product';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product.mainImage);

  // Sync active image with product
  useEffect(() => {
    setActiveImage(product.mainImage);
    window.scrollTo(0, 0);
  }, [product]);

  const allImages = [product.mainImage, ...product.gallery].filter(Boolean);

  return (
    <div className="bg-[#FFFCF7] min-h-screen pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Button */}
        <button 
          onClick={onClose}
          className="flex items-center text-gray-500 hover:text-orange-500 font-bold mb-10 transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" />
          </svg>
          Geri Dön
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={activeImage} 
                alt={product.productName} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all ${
                      activeImage === img ? 'border-orange-500 scale-95' : 'border-white hover:border-orange-200'
                    }`}
                  >
                    <img src={img} alt={`${product.productName} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div>
              {product.badge && (
                <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-black uppercase tracking-wider mb-6">
                  {product.badge}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                {product.productName}
              </h1>
              <p className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-4">
                {product.categories.map(c => c.title).join(', ')}
              </p>
              <div className="text-4xl font-black text-gray-900">
                {product.price} {product.currency}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-xl border border-orange-50 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Ürün Açıklaması</h3>
              <div className="text-gray-600 leading-relaxed text-lg prose max-w-none">
                {documentToReactComponents(product.description)}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-orange-500 text-white py-6 rounded-[30px] font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 active:scale-95 flex items-center justify-center gap-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Sepete Ekle
              </button>
              <p className="text-center text-sm font-bold text-gray-400">
                📦 1500 TL üzeri alışverişlerde ücretsiz kargo
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-orange-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Güvenli</div>
                  <div className="text-xs text-gray-500">Sertifikalı Ürün</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">14 Gün</div>
                  <div className="text-xs text-gray-500">Kolay İade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
