import React from "react";
import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

const Header = () =>{

    return (
        <header className='sticky shadow-md top-o z-50 p-5 bg-white grid grid-cols-3 md:px-10'>
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer w-full'>
                <Image
                    src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* Center */}
            <div className='flex items-center py-2 md:border-2 rounded-full md:shadow-sm'>
                <input
                    type='text'
                    placeholder='Start your search'
                    className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
                />
                <SearchIcon className='hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer'/>
            </div>

            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>

        </header>
    )
}

export default Header;