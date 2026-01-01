import React from 'react';
import { Product } from '../src/models/Product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(product)}
      className="group relative bg-white rounded-[45px] p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(251,191,36,0.2)] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-yellow-200"
    >
      <div className="relative overflow-hidden rounded-[35px] aspect-[4/5] mb-6">
        <img 
          src={product.mainImage} 
          alt={product.productName} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-xs font-black shadow-lg">
            {product.badge.toUpperCase()}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="px-2 pb-4 flex flex-col items-center text-center">
        <span className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
          {product.categories.map(c => c.title).join(', ')}
        </span>
        <h3 className="text-md font-black text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-1">{product.productName}</h3>
        
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-3xl font-black text-gray-900">{product.price} {product.currency}</span>
        </div>

        <button 
          className="w-full bg-gray-50 text-gray-900 group-hover:bg-yellow-400 group-hover:text-yellow-900 py-4 rounded-[25px] font-black transition-all flex items-center justify-center gap-2"
        >
          Sepete Ekle
          <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
