"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

// Mock product data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    originalPrice: 4500,
    discount: 33,
    image: "https://ext.same-assets.com/108381812/1217838591.jpeg",
    rating: 4.5,
    reviews: 456,
  },
  {
    id: 2,
    name: "Smartphone 8GB RAM 128GB Storage",
    price: 14999,
    originalPrice: 19999,
    discount: 25,
    image: "https://ext.same-assets.com/108381812/489250787.jpeg",
    rating: 4.7,
    reviews: 1205,
  },
  {
    id: 3,
    name: "Air Fryer Digital 4L",
    price: 7500,
    originalPrice: 11999,
    discount: 38,
    image: "https://ext.same-assets.com/108381812/768286165.jpeg",
    rating: 4.3,
    reviews: 308,
  },
  {
    id: 4,
    name: "LED Smart TV 43 Inch",
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    image: "https://ext.same-assets.com/108381812/2087755986.jpeg",
    rating: 4.6,
    reviews: 531,
  },
  {
    id: 5,
    name: "Men's Casual T-Shirt",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "https://ext.same-assets.com/108381812/1217838591.jpeg",
    rating: 4.2,
    reviews: 143,
  },
  {
    id: 6,
    name: "Laptop Backpack Waterproof",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    image: "https://ext.same-assets.com/108381812/2087755986.jpeg",
    rating: 4.4,
    reviews: 287,
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-8 bg-jumia-light-gray">
      <div className="container mx-auto px-4">
        <div className="bg-jumia-orange text-white rounded-md mb-6 p-4">
          <h2 className="text-xl font-bold">Top Selling Items</h2>
          <p className="text-sm">Great deals on popular products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden h-full hover:shadow-md transition-shadow">
              <Link href={`/product/${product.id}`}>
                <div className="relative h-40 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-jumia-red text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}
                </div>

                <CardContent className="p-3">
                  <p className="text-sm line-clamp-2 mb-1 h-10">{product.name}</p>
                  <p className="font-bold text-base">KSh {product.price.toLocaleString()}</p>
                  {product.originalPrice > product.price && (
                    <p className="text-gray-500 text-xs line-through">KSh {product.originalPrice.toLocaleString()}</p>
                  )}
                  <div className="flex items-center mt-2">
                    <div className="flex text-jumia-orange">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-3 h-3 ${star <= Math.floor(product.rating) ? 'text-jumia-orange' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button className="bg-jumia-orange hover:bg-jumia-orange/90 text-white px-6">
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};
