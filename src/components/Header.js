import React from "react";
import Image from "next/image";

const Header = () =>{

    return (
        <header className='sticky shadow-md top-o z-50 p-5 bg-white grid grid-col-3 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer w-full'>
                <Image
                    src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

        </header>
    )
}

export default Header;