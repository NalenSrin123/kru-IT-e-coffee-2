import {CreditCard,Heart, ListOrdered,LogOut,MapPinHouse,Settings,User} from 'lucide-react'
import React, { useState } from 'react'
function List_menu() {
  const [active, setActive] = useState('Settings')

  const menuItems = [
    { id: 'Profile',  label: 'My Profile',      icon: User },
    { id: 'Order',    label: 'My Orders',       icon: ListOrdered },
    { id: 'Address',  label: 'Address',         icon: MapPinHouse },
    { id: 'Payment',  label: 'Payment Methods', icon: CreditCard },
    { id: 'Wishlist', label: 'Wishlist',        icon: Heart },
    { id: 'Settings', label: 'Settings',        icon: Settings },
  ]

  const menuItemClass = (id) =>
    `group flex items-center gap-3 mb-4 p-3 rounded-lg cursor-pointer
     transition-all duration-300
     ${active === id
       ? 'bg-amber-700 text-white'
       : 'hover:bg-amber-700 hover:text-white'
     }`

  return (
    <div className="relative p-5">
      <div className="absolute p-7 shadow-xl border-2 rounded-xl mt-11 border-amber-700 ml-32 w-[300px]">

        {menuItems.map((item) => (
          <div
            key={item.id}
            className={menuItemClass(item.id)}
            onClick={() => setActive(item.id)}
          >
            <item.icon
              className={active === item.id ? 'text-white' : 'group-hover:text-white'}
            />
            <span className="font-bold">{item.label}</span>
          </div>
        ))}

        {/* Logout */}
        <div className="group flex items-center gap-3 mt-6 p-3 rounded-lg cursor-pointer
                        transition-all duration-300 hover:bg-red-100 hover:text-red-600">
          <LogOut className="group-hover:text-red-600" />
          <span className="font-bold">Logout</span>
        </div>

      </div>
    </div>
  )
}

export default List_menu