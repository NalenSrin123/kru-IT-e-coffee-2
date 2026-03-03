import React from "react";

function Sendotpcode() {
  return (
    <div>
      <div className="container ">
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
          <div className="w-full sm:w-[90%] md:w-[60%] lg:w-[45%] bg-white shadow-lg rounded-xl overflow-hidden">
            
            <div className="bg-gradient-to-r from-[#5B4BDB] to-[#4F46E5] text-white text-center py-4">
              <h5 className="text-lg md:text-xl font-bold">Your OTP Code</h5>
            </div>

   
            <div className="p-6">
              <p className="text-gray-700 mb-2">Hello,</p>
              <p className="text-gray-600">
                Your One-Time Password (OTP) for verification is:
              </p>

              <div className="mt-6 text-center bg-gray-100 rounded-lg py-4 mb-4">
                <h2 className="text-2xl font-mono md:text-3xl  text-[#4F46E5] tracking-widest">
                  123456
                </h2>
              </div>
              <p>
                This OTP is valid for 
                <span className="font-semibold">    2 minutes</span>. Please do not
                share this code with anyone.
              </p>

              

              <p className="mt-5"> Thank you for using our service!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sendotpcode;
//text-[#4F46E5]
//bg-gradient-to-r from-[#5B4BDB] to-[#4F46E5]
