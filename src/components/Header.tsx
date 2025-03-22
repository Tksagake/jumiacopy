"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, User, ChevronDown, Heart, Search } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top header with blue background */}
      <div className="bg-jumia-blue text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-xl font-bold">JUMIA</Link>
            <Link href="/sell" className="text-sm hidden md:inline-flex">Sell on Jumia</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/account" className="text-sm flex items-center">
              <User className="w-4 h-4 mr-1" /> Account <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/help" className="text-sm flex items-center">
              Help <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/cart" className="text-sm flex items-center">
              <ShoppingCart className="w-4 h-4 mr-1" /> Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Main header with search */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/2914567376/1248550479.svg"
              alt="Jumia Logo"
              className="h-8 w-auto"
              width={120}
              height={32}
            />
          </Link>

          {/* Search bar */}
          <div className="flex flex-1 w-full max-w-3xl relative">
            <input
              type="text"
              placeholder="Search products, brands and categories"
              className="w-full border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-jumia-orange"
            />
            <Button className="bg-jumia-orange hover:bg-jumia-orange/90 text-white px-6 rounded-l-none rounded-r-md">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Quick actions */}
          <div className="flex items-center space-x-6">
            <Link href="/account" className="flex flex-col items-center text-jumia-blue">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Account</span>
            </Link>
            <Link href="/wishlist" className="flex flex-col items-center text-jumia-blue">
              <Heart className="w-6 h-6" />
              <span className="text-xs mt-1">Wishlist</span>
            </Link>
            <Link href="/cart" className="flex flex-col items-center text-jumia-blue">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs mt-1">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
