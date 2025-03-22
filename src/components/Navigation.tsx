"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const categories = [
  { name: "Official Stores", href: "/official-stores" },
  { name: "Phones & Accessories", href: "/phones-tablets" },
  { name: "TVs & Audio", href: "/electronics" },
  { name: "Appliances", href: "/home-office-appliances" },
  { name: "Health & Beauty", href: "/health-beauty" },
  { name: "Home & Office", href: "/home-office" },
  { name: "Fashion", href: "/category-fashion-by-jumia" },
  { name: "Computing", href: "/computing" },
  { name: "Gaming", href: "/video-games" },
  { name: "Supermarket", href: "/groceries" },
];

const popularStores = [
  { name: "Samsung", href: "/mlp-samsung-shop" },
  { name: "Tecno", href: "/mlp-tecno-official-store" },
  { name: "Infinix", href: "/mlp-infinix-official-store" },
  { name: "Oraimo", href: "/mlp-oraimo-official-store" },
  { name: "Nunix", href: "/mlp-nunix-store" },
  { name: "Vitron", href: "/mlp-vitron-official-store" },
  { name: "Hisense", href: "/mlp-hisense-store" },
  { name: "Defacto", href: "/mlp-defacto-store" },
];

export const Navigation = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide py-1 no-scrollbar">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link
                href={category.href}
                className="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-700 hover:text-jumia-blue flex items-center"
              >
                {category.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>

              {hoveredCategory === category.name && (
                <div className="absolute left-0 z-50 mt-1 w-64 bg-white shadow-lg p-4 border border-gray-200 rounded-md">
                  <div className="grid grid-cols-1 gap-2">
                    <h3 className="font-semibold text-jumia-blue mb-2">Popular in {category.name}</h3>
                    {popularStores.slice(0, 6).map((store) => (
                      <Link
                        key={store.name}
                        href={store.href}
                        className="text-sm hover:text-jumia-orange"
                      >
                        {store.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
