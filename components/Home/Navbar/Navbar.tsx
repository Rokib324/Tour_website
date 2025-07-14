import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { TbAirBalloon } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className='bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]'>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                    <TbAirBalloon className='w-6 h-6 text-white'/>
                </div>
                <h1 className='text-xl md:text-2xl font-bold text-white uppercase'>Rokib's</h1>
            </div>
            {/* nav links */}
            <div className="hidden md:flex items-center space-x-10">
                {navLinks.map((link) => (
                    <Link key={link.id} href={link.url} className="group relative">
                    <span className="text-white text-lg font-medium">
                        {link.title}
                    </span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
                </div>
                {/* Book Now button */}
                <div className='hidden md:flex items-center space-x-4'>
                    <button className='bg-white text-black px-8 py-2 rounded-md'>Book Now</button>
                </div>
        </div>
    </div>
  )
}

export default Navbar