import React, { useState, useRef } from "react";
import { IoIosTimer } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { GiCheckedShield } from "react-icons/gi";

export default function Form_Confirm_OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");
    console.log("OTP:", finalOtp);
  };

  return (
    <div className="w-full flex h-screen justify-center items-center overflow-hidden text-black bg-yellow-600/50">
      <div className="w-[80%] md:max-w-md px-6 py-10 shadow-lg shadow-black/20 bg-white rounded-2xl">
        <div>
          <div className="flex gap-1 text-[15px] md:text-2xl font-extrabold items-center">
            <GiCheckedShield />
            <h3 className="text-[12px] md:text-sm font-extrabold">SECURITY LOGIN</h3>
          </div>
          <h1 className="mt-5 text-2xl font-bold">Enter OTP code</h1>
          <p className="text-sm mt-2">
            We've sent a 6-digit verification code to your email address. Please enter the code below to continue.
          </p>
          <h3 className="font-semibold text-sm md:text-xl mt-2 cursor-pointer">
            Change Number?
          </h3>
        </div>
        {/* OTP Inputs */}
        <div className="mt-5 flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-[12%] h-[55px] md:h-[70px] text-center text-xl font-bold border border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between items-center text-sm font-semibold">
          <div className="flex items-center gap-1">
            <IoIosTimer />
            <span>01:30</span>
          </div>
          <span className="cursor-pointer underline hover:text-yellow-700 duration-300">
            Resend Code?
          </span>
        </div>
        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-5 bg-yellow-700 text-white py-3 rounded-[12px] font-bold text-sm hover:bg-yellow-900 flex items-center justify-center gap-2 duration-300">
          Confirm <FaArrowRight />
        </button>
      </div>
    </div>
  );
}