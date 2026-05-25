import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

            <ToastContainer position="top-center"/>
        </div>
    );
};

export default RootLayout;