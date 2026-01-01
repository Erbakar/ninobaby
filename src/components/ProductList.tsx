import React, { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import { productService } from '../services/productService';

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
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.slug} 
              className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                {product.mainImage ? (
                  <img
                    src={product.mainImage}
                    alt={product.productName}
                    className="h-64 w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                ) : (
                  <div className="h-64 w-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 text-xs font-semibold rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.productName}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categories.map(c => c.title).join(', ')}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {product.price} {product.currency}
                  </p>
                </div>
                
                <button
                  className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                  onClick={() => console.log('View product:', product.slug)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

