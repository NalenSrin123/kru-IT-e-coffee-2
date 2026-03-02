import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, } from "react-icons/fa";

function Footer() {
     return (
          <div>
               <footer className=" w-full h-150 bg-[#8B5A2B] text-white pt-6 px-6 md:px-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                         <div className="md:w-1/3 flex justify-center md:justify-start">
                              <img src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-americano-coffee-beans-transparent-white-background-png-image_6698453.png" alt="" className="w-40 md:w-64 object-contain" />
                         </div>
                         <div className="md:w-1/3 ">
                              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                   <span className="block"> Check Out Our</span>
                                   <span className="block"> Best Coffee </span>
                                   <span className="block"> Beans</span>
                              </h1>

                              <button className=" flex justify-end bg-black/60 px-6 py-2 rounded-full hover:bg-amber-950  duration-300 ">
                                   Explore Our Products <span className="ml-2">{">>"}</span>
                              </button>
                         </div>
                         <div className="md:w-1/5 flex justify-center md:justify-end">
                              <img
                                   src="https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-topview-coffee-bean-explosi-png-image_12744324.png"
                                   alt="Coffee Beans Right"
                                   className="w-40 md:w-64 object-contain"
                              />
                         </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-35 mt-20">
                         <div>
                              <h2 className="text-3xl font-bold mb-3">
                                   K<span className="text-yellow-400">{"0"}</span>FEE
                              </h2>
                              <p className="text-sm mb-4 text-gray-200">Match your taste .Fit your <br /> style!</p>
                              <div className="flex gap-4 text-lg">
                                   <FaFacebook className="text-blue-600 text-1xl hover:text-pink-100 transition duration-300 cursor-pointer" />
                                   <FaInstagram className="text-orange-600 text-1xl hover:text-purple-600 transition duration-300 cursor-pointer" />
                                   <FaTwitter className="text-sky-500 text-1xl hover:text-sky-600 transition duration-300 cursor-pointer" />
                                   <FaLinkedin className="text-amber-50 text-1xl hover:text-black transition duration-300 cursor-pointer" />
                                   <FaYoutube className="text-red-600 text-1xl hover:text-amber-50 transition duration-300 cursor-pointer" />
                              </div>
                         </div>
                         <div>
                              <ul className="">
                                   <li><a href="#">HOME</a></li>
                                   <li><a href="#">ABOUT US</a></li>
                                   <li><a href="#">SERVICES</a></li>
                                   <li><a href="#">HELP & SUPPORT</a></li>
                                   <li><a href="#">CONTACT</a></li>
                              </ul>
                         </div>
                         <div>
                              <ul className="">
                                   <li>ADDRESS 1, LOCATION, 123</li>
                                   <li>ADDRESS 2, LOCATION, 123</li>
                                   <li>ADDRESS 3, LOCATION, 123</li>
                              </ul>
                         </div>
                         <div>
                              <ul className="">
                                   <li>YOURINF0@MAIL.COM</li>
                                   <li>ADDRESS, LOCATION, 123</li>
                                   <li>111 222 333 444 555</li>
                              </ul>
                         </div> 
                    </div>
                    <br />
                    <br />
                    <hr className="w-full border-t-2 border-white" />
                    <br />
                    <div className="flex justify-center items-center">
                         <p className="text-card year-card font-stretch-90%">&copy; {new Date().getFullYear()} Kofee.Designed by KRUtechIT</p>
                    </div>
               </footer>
          </div>
     )
}
export default Footer
