import { School } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Add_Form_data() {
  return (
   <div className='flex justify-center items-center min-h-screen mt-10'>
        <div>
            <div className="flex justify-center items-center">
                <div className="bg-blue-600 p-3 rounded-lg shadow-lg mb-3">
                    <School className="text-white w-8 h-8" />
                </div>
            </div>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold text-center'>Input Form Data</h1>
                <p className='text-gray-600 text-center'>Input your informaion </p>
            </div>
            <div className='p-7 rounded-2xl shadow-xl lg:w-[800px] '>
                <form >
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-5 lg:gap-7">
                        <div className=''>
                            <label htmlFor="" className='text-gray-700'>Full Name</label>
                            <input type="text" placeholder='Your name' className='border mt-2 border-gray-300 shadow-lg rounded-xl w-full p-2 focus:ring-2 focus:ring-blue-300 outline-none ' />
                        </div>
                        <div className='sm:mt-3 md:mt-0 ld:mt-0'>
                            <label htmlFor="" className='text-gray-700'>Email</label>
                            <input type="text" placeholder='Your email' className='border mt-2 border-gray-300 shadow-lg rounded-xl w-full p-2 focus:ring-2 focus:ring-blue-300 outline-none ' />
                        </div>
                    </div>
                        <div className='sm:mt-3 md:mt-2 lg:mt-0'>
                            <label htmlFor="" className='text-gray-700'>Password</label>
                            <input type="text" placeholder='Your password' className='border mt-2 border-gray-300 shadow-lg rounded-xl w-full p-2 focus:ring-2 focus:ring-blue-300 outline-none ' />
                        </div>
                        <div className='sm:mt-3 md:mt-2 ld:mt-2'>
                            <label htmlFor="" className='text-gray-700'>Address</label>
                            <input type="text" placeholder='Your address' className='border mt-2 border-gray-300 shadow-lg rounded-xl w-full p-2 focus:ring-2 focus:ring-blue-300 outline-none ' />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-5 lg:gap-7">
                            <div className='sm:mt-3 md:mt-2 ld:mt-2'>
                                <label htmlFor="" className='text-gray-700'>Phone Number</label>
                                <input type="text" placeholder='Phone number' className='border mt-2 border-gray-300 shadow-lg rounded-xl w-full p-2 focus:ring-2 focus:ring-blue-300 outline-none ' />
                            </div>
                            <div className='sm:mt-3 md:mt-2 ld:mt-2'>
                                <label htmlFor="" className='text-gray-700'>Parent</label>
                                <input type="text" placeholder='Parent' className='border mt-2 border-gray-300 shadow-lg rounded-xl w-full p-2 focus:ring-2 focus:ring-blue-300 outline-none ' />
                            </div>
                        </div>
                        <div className='sm:mt-3 md:mt-2 ld:mt-2'>
                            <label htmlFor="">Gender</label>
                            <div className='grid grid-cols-3 gap-2 mt-2'>
                                <div className='border rounded-lg shadow-xl border-gray-300 hover:border-blue-500'>
                                    <div className='px-4 text-center py-1.5 hover:text-blue-900 font-medium'> ♂ Male</div>
                                </div>
                                <div className='border rounded-lg shadow-xl border-gray-300 hover:border-blue-500'>
                                    <div className='px-4 text-center py-1.5 hover:text-blue-900 font-medium'> ♀ Female</div>
                                </div>
                                <div className='border rounded-lg shadow-xl border-gray-300 hover:border-blue-500'>
                                    <div className='px-4 text-center py-1.5 hover:text-blue-900 font-medium'> ⚧ Other</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 w-full'>
                            <NavLink>
                                <button className='w-full rounded-xl text-center py-2 bg-blue-600 text-white font-medium hover:bg-blue-700'>Save →</button>
                            </NavLink>
                        </div>
                        
                    
                </form>
            </div>
        </div>
        
   </div>
  )
}

export default Add_Form_data
