import React from 'react';
import Header from '../../component/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;