import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const singleProduct = useLoaderData();
    console.log(singleProduct);
    const { ProductPhoto, ProductName, Price, ProductDetails } = singleProduct;
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center gap-20'>
                <img src={ProductPhoto} alt="" className='md:w-[700px]' />
                <div>
                    <h1>{ProductName}</h1>
                    <p>Price: ${Price}</p>
                    <p>Description: {ProductDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;