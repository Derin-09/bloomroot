'use client'

import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Image from 'next/image' 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

interface Product {
  id: string
  name: string
  price: string
  image: string
  description?: string
  category?: string
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        
        if (querySnapshot.empty) {
          setError("No products found in database");
          return;
        }

        const productsData: Product[] = [];
        querySnapshot.forEach((doc) => {
          if (!doc.data().image) { 
            console.warn(`Document ${doc.id} missing image field`);
          }
          productsData.push({ id: doc.id, ...doc.data() } as Product);
        });

        setProducts(productsData);
      } catch (err) {
        setError("Failed to load products. Try refreshing.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner /> 
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        {error} - Please try again later
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No products available at the moment
      </div>
    )
  }

  return (
    <section className="py-24 px-6 bg-white text-dirtygreen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold">Our Collection</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Featured Plants</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="h-80 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={false} 
                />
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{product.price}</p>
                {product.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                )}
                <button className="w-full py-3 bg-secondary-800 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}