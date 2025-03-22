"use client";

import Image from 'next/image';
import { Button } from './ui/button';

export const HeroBanner = () => {
  return (
    <section className="bg-jumia-light-gray py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Categories sidebar */}
          <div className="hidden md:block w-64 bg-white rounded-md shadow-sm">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Supermarket
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Health & Beauty
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Home & Office
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Phones & Tablets
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Computing
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Electronics
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Fashion
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Baby Products
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Gaming
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Sporting Goods
              </li>
              <li className="px-4 py-2 hover:bg-jumia-light-gray cursor-pointer text-sm">
                Garden & Outdoors
              </li>
            </ul>
          </div>

          {/* Main banner */}
          <div className="flex-1">
            <div className="bg-jumia-blue rounded-md overflow-hidden">
              <div className="relative h-[200px] md:h-[300px] flex items-center">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="https://ext.same-assets.com/108381812/956283930.gif"
                    alt="Flash Sale Banner"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-jumia-blue/80 to-transparent"></div>
                <div className="relative z-10 text-white p-6 md:p-10">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">FLASH SALE</h2>
                  <p className="text-sm md:text-base mb-4">Up to 70% off on selected items!</p>
                  <Button className="bg-jumia-orange hover:bg-jumia-orange/90 text-white">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>

            {/* Top categories cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="relative h-32 w-full">
                  <Image
                    src="https://ext.same-assets.com/108381812/1217838591.jpeg"
                    alt="Electronics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Electronics</p>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="relative h-32 w-full">
                  <Image
                    src="https://ext.same-assets.com/108381812/2087755986.jpeg"
                    alt="Fashion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Fashion</p>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="relative h-32 w-full">
                  <Image
                    src="https://ext.same-assets.com/108381812/768286165.jpeg"
                    alt="Home & Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Home & Office</p>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="relative h-32 w-full">
                  <Image
                    src="https://ext.same-assets.com/108381812/489250787.jpeg"
                    alt="Phone & Tablets"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Phones & Tablets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
