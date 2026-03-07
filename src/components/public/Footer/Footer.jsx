import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, } from "react-icons/fa";

function Footer() {
     return (
          <div>
               <footer className="w-full bg-gradient-to-b from-[#2D1810] via-[#3D2315] to-[#1A0F08] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                              <div className="w-full lg:w-1/3 flex justify-center">
                                   <div className="relative">
                                        <div className="absolute inset-0 bg-amber-600/20 blur-2xl rounded-full"></div>
                                        <img
                                             src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-americano-coffee-beans-transparent-white-background-png-image_6698453.png"
                                             alt="Coffee Beans"
                                             className="relative w-32 sm:w-40 lg:w-56 object-contain drop-shadow-lg"
                                        />
                                   </div>
                              </div>
                              <div className="w-full lg:w-1/3 text-center lg:text-left">
                                   <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
                                        <span className="block bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">Check Out Our</span>
                                        <span className="block mt-2">Best Coffee</span>
                                        <span className="block text-amber-400 mt-2">Beans</span>
                                   </h1>

                                   <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 px-6 lg:px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-600/50 transform hover:scale-105">
                                        Explore Our Products
                                        <span className="text-lg">→</span>
                                   </button>
                              </div>
                              <div className="w-full lg:w-1/3 flex justify-center">
                                   <div className="relative">
                                        <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full"></div>
                                        <img
                                             src="https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-topview-coffee-bean-explosi-png-image_12744324.png"
                                             alt="Coffee Beans Top View"
                                             className="relative w-32 sm:w-40 lg:w-56 object-contain drop-shadow-lg"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 lg:mb-12">
                              <div className="text-center sm:text-left">
                                   <h2 className="text-2xl lg:text-3xl font-bold mb-3 tracking-wide">
                                        K<span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">0</span>FEE
                                   </h2>
                                   <p className="text-sm lg:text-base text-gray-300 mb-6 leading-relaxed">
                                        Match your taste. Fit your style with our premium selection.
                                   </p>
                                   <div className="flex gap-4 justify-center sm:justify-start">
                                        <a href="#" className="p-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-full transition-all duration-300 transform hover:scale-125">
                                             <FaFacebook className="text-blue-400 text-lg" />
                                        </a>
                                        <a href="#" className="p-2 bg-pink-600/20 hover:bg-pink-600/40 rounded-full transition-all duration-300 transform hover:scale-125">
                                             <FaInstagram className="text-pink-400 text-lg" />
                                        </a>
                                        <a href="#" className="p-2 bg-sky-600/20 hover:bg-sky-600/40 rounded-full transition-all duration-300 transform hover:scale-125">
                                             <FaTwitter className="text-sky-400 text-lg" />
                                        </a>
                                        <a href="#" className="p-2 bg-blue-700/20 hover:bg-blue-700/40 rounded-full transition-all duration-300 transform hover:scale-125">
                                             <FaLinkedin className="text-blue-300 text-lg" />
                                        </a>
                                        <a href="#" className="p-2 bg-red-600/20 hover:bg-red-600/40 rounded-full transition-all duration-300 transform hover:scale-125">
                                             <FaYoutube className="text-red-400 text-lg" />
                                        </a>
                                   </div>
                              </div>
                              <div className="text-center sm:text-left">
                                   <h3 className="text-lg font-bold mb-5 tracking-wide uppercase text-amber-400">Quick Links</h3>
                                   <ul className="space-y-3">
                                        <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Home</a></li>
                                        <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">About Us</a></li>
                                        <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Services</a></li>
                                        <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Help & Support</a></li>
                                        <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Contact</a></li>
                                   </ul>
                              </div>
                              <div className="text-center sm:text-left">
                                   <h3 className="text-lg font-bold mb-5 tracking-wide uppercase text-amber-400">Locations</h3>
                                   <ul className="space-y-3 text-gray-300 text-sm">
                                        <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">📍 Address 1<br />Location, 123</li>
                                        <li className="mt-3 hover:text-amber-400 transition-colors duration-300 cursor-pointer">📍 Address 2<br />Location, 123</li>
                                        <li className="mt-3 hover:text-amber-400 transition-colors duration-300 cursor-pointer">📍 Address 3<br />Location, 123</li>
                                   </ul>
                              </div>
                              <div className="text-center sm:text-left">
                                   <h3 className="text-lg font-bold mb-5 tracking-wide uppercase text-amber-400">Contact</h3>
                                   <ul className="space-y-3 text-gray-300 text-sm">
                                        <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">✉️ info@kofee.com</li>
                                        <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">📧 support@kofee.com</li>
                                        <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">☎️ +1 (555) 123-4567</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                         <p className="text-center text-gray-400 text-sm">
                              &copy; {new Date().getFullYear()} Kofee. All rights reserved. Designed with ❤️ by KRUtechIT
                         </p>
                    </div>
               </footer>
          </div>
     )
}
export default Footer
