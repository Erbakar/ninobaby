import React from 'react';
import { Product } from '../src/models/Product';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col lg:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-orange-50 transition-colors border border-gray-100 shadow-sm"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Image */}
        <div className="lg:w-1/2 p-4 lg:p-8">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
            <img 
              src={product.mainImage} 
              alt={product.productName} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
             {product.gallery.slice(0, 4).map((img, i) => (
               <div key={i} className="aspect-square rounded-lg overflow-hidden border border-gray-100 hover:border-orange-200 cursor-pointer transition-colors">
                  <img src={img} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="" />
               </div>
             ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
          <div className="mb-2">
            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              {product.categories.map(c => c.title).join(', ')}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.productName}</h2>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-orange-600">{product.price} {product.currency}</span>
            <div className="flex text-amber-400">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400 text-sm">(124 Değerlendirme)</span>
          </div>

          <div className="text-gray-600 text-lg leading-relaxed mb-8 prose prose-sm max-w-none">
            {documentToReactComponents(product.description)}
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-5 h-5 text-green-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              Stokta mevcut
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-5 h-5 text-green-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              Ücretsiz Kargo
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button className="flex-grow bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
              Sepete Ekle
            </button>
            <button className="p-4 rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
