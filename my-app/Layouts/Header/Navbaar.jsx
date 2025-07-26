"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Navbaar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)

  const navItems = [
    {
      name: "Home",
      link: "/",
      submenu: null
    },
    {
      name: "About",
      link: "/about",
      submenu: [
        { name: "Our Story", link: "/about/story" },
        { name: "Team", link: "/about/team" },
        { name: "Careers", link: "/about/careers" }
      ]
    },
    {
      name: "Services",
      link: "/services",
      submenu: [
        { name: "Web Development", link: "/services/web" },
        { name: "Mobile Apps", link: "/services/mobile" },
        { name: "UI/UX Design", link: "/services/design" }
      ]
    },
    {
      name: "Products",
      link: "/products",
      submenu: null
    },
    {
      name: "Contact",
      link: "/contact",
      submenu: null
    }
  ]

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  const handelClick=()=>{
    window.location.reload()
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/next.svg" 
                alt="Company Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center">
                  <Link 
                    href={item.link}
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <FiChevronDown 
                      className="ml-1 text-gray-500 group-hover:text-red-600 transition-colors duration-300" 
                    />
                  )}
                </div>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex} 
                        href={subItem.link}
                        className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className="reload h-22 w-22 bg-red-400 mx-auto" >
            <button onClick={handelClick} className='p-4'>Click me</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                <div 
                  className="flex justify-between items-center py-3 px-2 text-gray-700 font-medium cursor-pointer"
                  onClick={() => item.submenu && toggleSubmenu(index)}
                >
                  <Link href={item.link} className="block w-full">
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <FiChevronDown 
                      className={`transition-transform duration-200 ${openSubmenu === index ? 'transform rotate-180' : ''}`}
                    />
                  )}
                </div>
                {item.submenu && openSubmenu === index && (
                  <div className="pl-4 space-y-2 pb-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex} 
                        href={subItem.link}
                        className="block py-2 px-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}