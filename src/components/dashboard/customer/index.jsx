import React, { useState,useEffect } from "react";
import axios from 'axios';
function CustomerList() {
     const [search, setSearch] = useState("");
     const [Customers ,setCustomer] = useState([]);

     useEffect(()=>{
          const getCustomers = async ()=>{
               try {
               
                   const res = await axios.get(
                         "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/customers",
                         {
                              headers: {
                              Authorization: `Bearer 59|XxoZvsB8G6M4FjVrg58k9XMECkiMu8x4WlMF6BBq1eb1d31a`, // send token here
                              },
                         }
                    );
                    setCustomer(res.data.data);
               } catch (error) {
                    console.log(error)
                    
               }
          }
          getCustomers();
     },[])

     // Format date
     const formatDate = (date) => {
          return new Date(date).toLocaleDateString();
     };

     // Filter users
     const filteredUsers = Customers.filter((customers) =>
          `${customers.name} ${customers.email}`
               .toLowerCase()
               .includes(search.toLowerCase())
     );

     return (
          <div className="p-3 sm:p-4 md:p-6 bg-gray-100 min-h-screen">
               {/* Header - Responsive */}
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                         Coffee User List
                    </h1>

                    <button className="bg-[#905E42] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm sm:text-base w-full sm:w-auto">
                         + Add User
                    </button>
               </div>

               {/* Search - Responsive */}
               <div className="mb-4 sm:mb-6">
                    <input
                         type="text"
                         placeholder="Search user..."
                         value={search}
                         onChange={(e) => setSearch(e.target.value)}
                         className="w-50 p-2 sm:p-3 border rounded-lg focus:outline-none text-sm sm:text-base focus:border-[#905E42] focus:ring-2 focus:ring-[#905E42]/20"
                    />
               </div>

               {/* Table - Responsive Desktop View */}
               <div className="hidden md:block bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                         <table className="w-full text-left text-sm">
                              <thead className="bg-[#905E42] text-white sticky top-0">
                                   <tr>
                                        <th className="p-3">ID</th>
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Provider</th>
                                        <th className="p-3">Created At</th>
                                        <th className="p-3">Last Login</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Action</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {filteredUsers.length > 0 ? (
                                        filteredUsers.map((customers) => (
                                             <tr
                                                  key={customers.id}
                                                  className="border-b hover:bg-gray-50 transition-colors"
                                             >
                                                  <td className="p-3">{customers.id}</td>
                                                  <td className="p-3 font-medium">{customers.name}</td>
                                                  <td className="p-3 text-sm text-gray-600">{customers.email}</td>
                                                  <td className="p-3">{customers.provider}</td>
                                                  <td className="p-3 text-sm">{formatDate(customers.createdAt)}</td>
                                                  <td className="p-3 text-sm">{formatDate(customers.last_login_at)}</td>
                                                  <td className="p-3">
                                                       <span
                                                            className={`px-3 py-1 rounded-full text-xs font-semibold 
                                                                 ${customers.is_active == 1 ? "bg-green-100 text-green-700"  : "bg-red-100 text-red-600"}`}
                                                       >
                                                            {customers.is_active == 1 ? " Active" : " Inactive"}
                                                       </span>
                                                  </td>


                                                  <td className="p-3 space-x-2">
                                                       <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors text-xs sm:text-sm">
                                                            Edit
                                                       </button>

                                                       <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-xs sm:text-sm">
                                                            Delete
                                                       </button>
                                                  </td>
                                             </tr>
                                        ))
                                   ) : (
                                        <tr>
                                             <td
                                                  colSpan="7"
                                                  className="text-center p-6 text-gray-500"
                                             >
                                                  No users found
                                             </td>
                                        </tr>
                                   )}
                              </tbody>
                         </table>
                    </div>
               </div>

               {/* Card View - Responsive Mobile View */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
                    {filteredUsers.length > 0 ? (
                         filteredUsers.map((user) => (
                              <div
                                   key={user.id}
                                   className="bg-white shadow-md rounded-lg p-4 border-l-4 border-[#905E42]"
                              >
                                   <div className="space-y-3">
                                        <div className="flex justify-between items-start">
                                             <div>
                                                  <p className="text-xs text-gray-500">Name</p>
                                                  <p className="font-bold text-gray-800">{user.name}</p>
                                             </div>
                                             <span
                                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${user.status === "Active"
                                                       ? "bg-green-100 text-green-700"
                                                       : "bg-red-100 text-red-600"
                                                       }`}
                                             >
                                                  {user.status}
                                             </span>
                                        </div>

                                        <div>
                                             <p className="text-xs text-gray-500">Email</p>
                                             <p className="text-sm text-gray-700 break-words">{user.email}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                             <div>
                                                  <p className="text-xs text-gray-500">Coffee</p>
                                                  <p className="text-sm text-gray-800">{user.coffee}</p>
                                             </div>
                                             <div>
                                                  <p className="text-xs text-gray-500">Joined</p>
                                                  <p className="text-sm text-gray-800">{formatDate(user.createdAt)}</p>
                                             </div>
                                        </div>

                                        <div className="flex gap-2 pt-2 border-t">
                                             <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors text-xs font-medium">
                                                  Edit
                                             </button>
                                             <button className="flex-1 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors text-xs font-medium">
                                                  Delete
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         ))
                    ) : (
                         <div className="col-span-1 sm:col-span-2 text-center p-8 text-gray-500">
                              No users found
                         </div>
                    )}
               </div>
          </div>
     );
}

export default CustomerList;