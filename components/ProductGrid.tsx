import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../src/models/Product';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  title?: string;
  subtitle?: string;
  showAllButton?: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products,
  onSelectProduct, 
  title = "Ürünlerimiz", 
  subtitle = "Bebeğinizin konforu için özenle seçilmiş ürünlerimize göz atın.",
  showAllButton
}) => {
  return (
    <section id="products" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h2>
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-200 rounded-full hover:bg-orange-50 hover:border-orange-200 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-orange-50 hover:border-orange-200 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.slug} product={product} onSelect={onSelectProduct} />
          ))}
        </div>

        {showAllButton && (
          <div className="mt-16 text-center">
            <button 
              onClick={showAllButton}
              className="bg-orange-50 text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-orange-100 transition-all border border-orange-100 shadow-sm"
            >
              Tüm Ürünleri Görüntüle
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
