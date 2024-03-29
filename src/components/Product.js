import React, {useEffect, useState} from "react";
import Image from "next/image";
import Rating from "./Rating/Rating";

const Product = ({ id, title, description, price, category, image}) => {
    const [rating, setRating] = useState(50);
    const [hasPrime, setHasPrime] = useState(false);

    useEffect(() => {
        setRating(Math.floor(Math.random() * 100) + 1);
        setHasPrime(Math.random() < 0.5);
    }, []);

    return (
        <div key={id} className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <img style={{objectFit: 'contain', alignSelf: 'center', width: '100%', height: '200px'}}
                 src={image} alt=''/>

            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                <Rating
                    ratingInPercent={rating}
                    iconSize="m"
                    showOutOf={true}
                    enableUserInteraction={false}
                />
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <p>${price}</p>
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <Image className='w-12' src='https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png' width={20} height={20}/>
                    <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
                </div>
            )}
            <button className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product;