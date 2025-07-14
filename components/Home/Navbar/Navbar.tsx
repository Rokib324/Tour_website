import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { TbAirBalloon } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className='bg-blue-800 transition-all duration-200 h-[12vh] z-[1000]'>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                    <TbAirBalloon className='w-6 h-6 text-white'/>
                </div>
                <h1 className='text-xl md:text-2xl font-bold text-white uppercase'>Rokib's</h1>
            </div>
            {/* nav links */}
            <div className='hidden md:flex items-center space-x-10'>
                {navLinks.map((link)=>(
                    <Link key={link.id} href={link.url}>
                        <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right'>{link.title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
        </div>
  )
}

export default Navbar