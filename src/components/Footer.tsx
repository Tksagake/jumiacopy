"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, CreditCard, Truck, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 border-b border-gray-700 pb-10">
          <div className="flex items-center">
            <div className="mr-4 p-3 bg-gray-700 rounded-full">
              <Truck className="w-6 h-6 text-jumia-orange" />
            </div>
            <div>
              <h3 className="font-bold mb-1">NATIONWIDE DELIVERY</h3>
              <p className="text-sm text-gray-400">Fast delivery across Kenya</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4 p-3 bg-gray-700 rounded-full">
              <CreditCard className="w-6 h-6 text-jumia-orange" />
            </div>
            <div>
              <h3 className="font-bold mb-1">SAFE PAYMENT</h3>
              <p className="text-sm text-gray-400">Pay with M-Pesa, cards, or cash</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4 p-3 bg-gray-700 rounded-full">
              <ShieldCheck className="w-6 h-6 text-jumia-orange" />
            </div>
            <div>
              <h3 className="font-bold mb-1">SHOP WITH CONFIDENCE</h3>
              <p className="text-sm text-gray-400">7-day free returns</p>
            </div>
          </div>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="font-bold text-lg mb-4">JUMIA KENYA</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms and Conditions</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/return-policy" className="text-sm text-gray-400 hover:text-white">Return Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">MAKE MONEY WITH JUMIA</h3>
            <ul className="space-y-2">
              <li><Link href="/sell" className="text-sm text-gray-400 hover:text-white">Sell on Jumia</Link></li>
              <li><Link href="/vendor-hub" className="text-sm text-gray-400 hover:text-white">Vendor Hub</Link></li>
              <li><Link href="/become-affiliate" className="text-sm text-gray-400 hover:text-white">Become an Affiliate</Link></li>
              <li><Link href="/become-partner" className="text-sm text-gray-400 hover:text-white">Become a Sales Consultant</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">JUMIA INTERNATIONAL</h3>
            <ul className="space-y-2">
              <li><Link href="https://www.jumia.com.ng" className="text-sm text-gray-400 hover:text-white">Nigeria</Link></li>
              <li><Link href="https://www.jumia.com.eg" className="text-sm text-gray-400 hover:text-white">Egypt</Link></li>
              <li><Link href="https://www.jumia.com.gh" className="text-sm text-gray-400 hover:text-white">Ghana</Link></li>
              <li><Link href="https://www.jumia.ci" className="text-sm text-gray-400 hover:text-white">Ivory Coast</Link></li>
              <li><Link href="https://www.jumia.ug" className="text-sm text-gray-400 hover:text-white">Uganda</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li><Link href="/help-center" className="text-sm text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact Us</Link></li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-2" /> 0700 000 000
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-2" /> support@jumia.co.ke
              </li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-4">JOIN US ON</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="bg-gray-700 p-2 rounded-full hover:bg-jumia-blue">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="bg-gray-700 p-2 rounded-full hover:bg-jumia-blue">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" className="bg-gray-700 p-2 rounded-full hover:bg-jumia-blue">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://youtube.com" className="bg-gray-700 p-2 rounded-full hover:bg-jumia-blue">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <h3 className="font-bold text-lg mb-4 text-center">PAYMENT METHODS</h3>
          <div className="flex justify-center space-x-4 flex-wrap gap-y-2">
            <div className="bg-white p-2 rounded h-10 w-16 flex items-center justify-center">
              <span className="text-gray-800 text-xs font-bold">M-PESA</span>
            </div>
            <div className="bg-white p-2 rounded h-10 w-16 flex items-center justify-center">
              <span className="text-gray-800 text-xs font-bold">VISA</span>
            </div>
            <div className="bg-white p-2 rounded h-10 w-16 flex items-center justify-center">
              <span className="text-gray-800 text-xs font-bold">MASTERCARD</span>
            </div>
            <div className="bg-white p-2 rounded h-10 w-16 flex items-center justify-center">
              <span className="text-gray-800 text-xs font-bold">AIRTEL</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-700 mt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Jumia Kenya - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
