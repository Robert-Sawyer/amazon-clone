import Image from "next/image";
import React from "react";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import {signIn, signOut, useSession} from 'next-auth/react'

const Header = () => {

    const {data: session} = useSession();

    return (
        <header>
            <div className='flex items-center bg-amazon_black p-1 flex-grow py-2'>
                <div className='mt-3.5 flex items-center flex-grow sm:flex-grow-0 mx-2.5'>
                    <Image
                        src='https://links.papareact.com/f90'
                        width={130}
                        height={30}
                        objectFit='contain'
                        className='cursor-pointer'
                        alt=''
                    />
                </div>

                <div
                    className='hidden sm:flex items-center h-10 rounded-md flex-grow
                    cursor-pointer bg-yellow-400 hover:bg-yellow-500'
                >
                    <input
                        className='p-2 h-full w-6 flex-grow flex-shrink
                        rounded-l-md focus:outline-none px-4'
                        type='text'/>
                    <SearchIcon className='h-12 p-4'/>
                </div>

                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div className='link' onClick={!session ? signIn : signOut}>
                        <p className='hover:underline'>{session ? `Hello, ${session.user.name}` : 'Sign In'}</p>
                        <p className='boldParagraph'>Account & List</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='boldParagraph'>& Orders</p>
                    </div>
                    <div className='link relative flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4
                        bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                        <ShoppingCartIcon className='h-10'/>
                        <p className='boldParagraph hidden mt-2 md:inline'>Basket:</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_light text-white text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1'/>
                    All
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header;