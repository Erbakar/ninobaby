
import React, { useEffect, useState } from 'react';
import { productService } from '../services/productService';
import { Product } from '../models/Product';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError('Ürünler yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="p-10 text-center">Yükleniyor...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Contentful Ürünleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-50 group hover:shadow-xl transition-all duration-300">
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={product.mainImage} 
                alt={product.productName} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {product.badge}
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
                {product.categories[0]?.title || 'Genel'}
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2 line-clamp-1">{product.productName}</h3>
              <div className="text-2xl font-black text-gray-900">
                {product.price} {product.currency}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

