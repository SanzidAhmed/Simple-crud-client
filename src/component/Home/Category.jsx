import React, { useEffect, useState } from 'react';
import CategoryOfProducts from './CategoryOfProducts/CategoryOfProducts';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("movement toys");
    console.log(activeTab);
    const handleTabActive = (tabClick) => {
        setActiveTab(tabClick)
    }
    useEffect(() => {
        fetch(`https://playkid-server.vercel.app/alltoys/${activeTab}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [activeTab])
    return (
        <div className=' text-[#1C3F3A] '>
            <div className='container mx-auto pb-10'>
                <h1 className='text-center py-10 text-3xl text-[#1C3F3A] uppercase'>Toys Category</h1>
                <div className="tabs mt-2 md:flex items-center justify-center text-white ">
                    <a onClick={() => handleTabActive("movement toys")} className={`text-[#1C3F3A] tab ${activeTab == "movement toys" ? "text-white bg-[#F6D83E]" : "movement toys"}`}>movement toys</a>
                    <a onClick={() => handleTabActive("Small world toys")} className={`text-[#1C3F3A] tab ${activeTab == "Small world toys" ? "text-white bg-[#F6D83E]" : "Small world toys"}`}>Small world toys</a>
                    <a onClick={() => handleTabActive("Creative toys")} className={`text-[#1C3F3A]   tab ${activeTab == "Creative toys" ? "text-white bg-[#F6D83E]" : "Creative toys"}`}>Creative toys</a>
                </div>
                <div className='grid md:grid-cols-4 my-4 min-h-min gap-10 w-full'>
                    {
                        categories.map(category => <CategoryOfProducts
                            key={category._id}
                            category={category}
                        ></CategoryOfProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;