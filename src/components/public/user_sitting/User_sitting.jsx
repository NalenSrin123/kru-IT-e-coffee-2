import { Menu, User, Lock, Bell, LogOut, X, Settings, Edit, Pencil } from 'lucide-react'
import React, { useState } from 'react'
import List_menu from './List_menu'

function User_sitting() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-gradient-to-b  from-amber-100 to-amber-50'>
        <div className=''>
      
            <div className="min-h-screen  relative">
              
              
              {/* Top bar */}
              <div className="flex items-center justify-between p-4 z-30   lg:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-10 h-10  flex items-center justify-center  rounded-full hover:bg-gray-100"
                >
                  <Menu className='md:w-7 md:h-7 cursor-pointer ' />
                </button>
                
                <div />
              </div>

              {/* Sidebar overlay */}
              {isOpen && (
                <div  onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/30 z-40"/>
              )}
                <div className='hidden md:hidden  lg:block'><List_menu/></div>
              {/* Sidebar */}
              <aside
                className={`
                  fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-amber-100 to-amber-50 shadow-xl z-50
                  transform transition-transform duration-300
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
              >
                <div className="flex items-center justify-between p-5 border-b">
                  <h2 className="font-bold text-lg">Settings</h2>
                  <button onClick={() => setIsOpen(false)}>
                    <X  className='cursor-pointer'/>
                  </button>
                </div>

                <nav className="p-4 space-y-2">
                  <MenuItem icon={<User />} label="Profile" />
                  <MenuItem icon={<Lock />} label="Security" />
                  <MenuItem icon={<Settings />} label="Setting" />
                  <MenuItem icon={<Bell />} label="Notifications" />
                  <MenuItem icon={<LogOut />} label="Logout" danger />
                </nav>
              </aside>

              {/* Content */}
              <main className="max-w-4xl mx-auto p-6 lg:max-w-5xl">
                <div className="bg-gradient-to-b from-amber-100 to-amber-50 border-2 border-amber-700    rounded-xl shadow p-6 space-y-6">
                  <div className=' md:flex justify-between'>
                    <div className='mb-3'>
                        <h2 className="text-xl text-center md:text-2xl font-bold">Account Settings</h2>
                    </div>
                    <div className='gap-5 ml-22'>
                        <div class="w-24 mb-3 ml-5 h-24 rounded-full bg-white shadow-xl ">
                            <img src="/src/assets/images/User_setting/cute_girl.jpg"alt="Profile" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="relative bg-amber-800 w-36 p-2 rounded-2xl h-10 flex items-center">
                            <div className="text-white ml-5">Edit Profile</div>
                            <Pencil className="w-5 h-5 text-white absolute right-3" />
                        </div>
                    </div>
                  </div>

                    <div className='grid md:grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-1 " >
                                Full Name
                            </label>
                            <input type="text" placeholder="John Doe" className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 " />
                        </div>
                        <div>
                            <label htmlFor="Address" className="block text-sm font-bold text-gray-700 mb-1" >
                                Address
                            </label>
                            <input type="text" placeholder="Address" className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 " />
                        </div>
                        <div>
                            <label htmlFor="Gender" className="block text-sm font-bold text-gray-700 mb-1" >
                                Gender
                            </label>
                            <input type="text" placeholder="Gender" className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 " />
                        </div>
                        <div>
                            <label htmlFor="Phone Number" className="block text-sm font-bold text-gray-700 mb-1" >
                                Phone Number
                            </label>
                            <input type="text" placeholder="Phone Number" className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 " />
                        </div>
                        <div className='md:col-span-2 '>
                            <div className='mb-5'>
                                <label htmlFor="Email" className="block text-sm font-bold text-gray-700 mb-1" >
                                    Email
                                </label>
                                <input type="text" placeholder="Email" className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 " />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="New Password" className="block text-sm font-bold text-gray-700 mb-1" >
                                    New Password
                                </label>
                                <input type="text" placeholder="New Password" className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 " />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="Confirm Password" className="block text-sm font-bold text-gray-700 mb-1" >
                                    New password
                                </label>
                                <input type="text" placeholder="Confirm password" className=" w-full p-2 border border-amber-700 rounded-lg  outline-none  focus:border-amber-500 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-200 " />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="px-6 py-2  text-white rounded-lg bg-green-700">
                        Save Changes
                        </button>
                    </div>
                </div>
              </main>

            </div>
        </div>
    </div>
  )
}

export default User_sitting

// Components
function MenuItem({ icon, label, danger }) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-4 py-2 rounded-lg
        ${danger ? 'text-red-500 hover:bg-red-50' : 'hover:bg-gray-100'}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

