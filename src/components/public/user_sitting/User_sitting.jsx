import {
  Menu,
  User,
  Lock,
  Bell,
  LogOut,
  X,
  Settings,
  Edit,
  Pencil,
} from "lucide-react";
import React, { useState } from "react";
import List_menu from "./List_menu";

function User_sitting() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" from-amber-100 to-amber-50">
      <div className="">
        <div className="min-h-screen  relative">
          {/* Sidebar */}

          {/* Content */}
          <main className="max-w-4xl mx-auto  lg:max-w-5xl">
            <div className=" from-amber-100 to-amber-50     rounded-xl shadow p-6 space-y-6">
              <div className=" md:flex justify-between">
                <div className="mb-3">
                  <h2 className="text-xl text-center md:text-2xl font-bold">
                    Account Settings
                  </h2>
                </div>
                <div className="flex flex-col justify-content-center gap-5 ml-20">
                  {/* Profile Image */}
                  <div className="w-24 h-24 rounded-full bg-white shadow-xl overflow-hidden">
                    <img
                      src="/src/assets/images/User_setting/cute_girl.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Edit Profile Button */}
                  <div className=" bg-amber-800 w-32 h-10 rounded-2xl  flex items-center justify-center cursor-pointer hover:bg-amber-900 transition">
                    <span className="text-white ">Edit Profile</span>
                    {/* <Pencil className="w-5 h-5 text-white absolute right-3" /> */}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold text-gray-700 mb-1 "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="Address"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="Gender"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    placeholder="Gender"
                    className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="Phone Number"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 "
                  />
                </div>
                <div className="md:col-span-2 ">
                  <div className="mb-5">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-bold text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 "
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="New Password"
                      className="block text-sm font-bold text-gray-700 mb-1"
                    >
                      New Password
                    </label>
                    <input
                      type="text"
                      placeholder="New Password"
                      className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 "
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="Confirm Password"
                      className="block text-sm font-bold text-gray-700 mb-1"
                    >
                      New password
                    </label>
                    <input
                      type="text"
                      placeholder="Confirm password"
                      className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 "
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-content-center">
                <button className="px-6 py-2  text-white rounded-lg bg-green-700">
                  Save Changes
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default User_sitting;

// Components
function MenuItem({ icon, label, danger }) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-4 py-2 rounded-lg
        ${danger ? "text-red-500 hover:bg-red-50" : "hover:bg-gray-100"}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
