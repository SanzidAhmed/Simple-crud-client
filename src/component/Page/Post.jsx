import React from 'react';

const Post = () => {
    const handleSubmitPost = (event) => {
        event.preventDefault();
        const ProductName = event.target.productName.value;
        const ProductDetails = event.target.productDetails.value;
        const ProductPhoto = event.target.productPhoto.value;
        const Category = event.target.category.value;
        const Price = event.target.price.value;
        const product = { ProductName, ProductDetails, ProductPhoto, Category, Price };
        fetch('http://localhost:3000/allPost', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    
    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmitPost}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Name?</span>
                    </label>
                    <input type="text" placeholder="Product name" required name='productName' className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Details?</span>
                    </label>
                    <input type="text" placeholder="Product Details" required name='productDetails' className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price?</span>
                    </label>
                    <input type="number" placeholder="Price..." required name='price' className="input input-bordered w-full " />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' className="select select-bordered w-full">
                        <option disabled selected>Pick your favorite anime</option>
                        <option>One Piece</option>
                        <option>Naruto</option>
                        <option>Death Note</option>
                        <option>Attack on Titan</option>
                        <option>Bleach</option>
                        <option>Fullmetal Alchemist</option>
                        <option>Jojo's Bizarre Adventure</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Photo</span>
                    </label>
                    <input type="text" name='productPhoto' required placeholder="Product Image URL" className="input input-bordered w-full" />
                </div>
                <input type="submit" value="Add Post" className='btn w-full mt-8' />
            </form>
        </div>
    );
};

export default Post;