import React from "react";

const ProductFeed = ({products}) => {

    return (
        <div className='p-3'>
            <h1 className='text-3xl mb-2'>Products:</h1>
            {products?.map(({id, title, description, price, category, image}) => (
                <p key={id}>{title}</p>
            ))}
        </div>
    )
}

export default ProductFeed;