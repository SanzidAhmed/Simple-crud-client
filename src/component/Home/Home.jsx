
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')
    const [asc, setAsc] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:3000/allPost?search=${search}&sort=${asc? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    }, [search, asc]);

    const handleSearch = event => {
        setSearch(searchRef.current.value);
    }
    return (
        <div className='container mx-auto'>
            <div className='flex gap-8 justify-between items-center mb-8'>
                <div>
                    <button className='btn btn-primary' onClick={() => setAsc(!asc)}>{asc ? 'Price: High to Low': 'Price: Low to High'}</button>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <input onClick={handleSearch} ref={searchRef} type="text"  placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch}  className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4 p-10 md:p-0 gap-10'>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <div key={post._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={post.ProductPhoto} alt="Shoes" className='h-64'/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{post.ProductName}</h2>
                                <h3>Price: ${post?.Price}</h3>
                                <p>Category: {post?.Category}</p>
                                <p>Description: {post.ProductDetails}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/post/${post._id}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center'><span className="loading loading-spinner loading-lg"></span></p>
                )}
            </div>
        </div>
    );
};

export default Home;
