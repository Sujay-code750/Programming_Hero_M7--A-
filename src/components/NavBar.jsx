import React from 'react';
import navLogo from '../assets/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { MdOutlineWatchLater } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';
import MyNavLink from './MyNavLink/MyNavLink';

const NavBar = () => {
    return (
        <div className='py-5 border-b border-gray-300'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <img src={navLogo} alt="" />
                </div>
                <div className='flex items-center'>
                    <MyNavLink to={'/'}><RiHome2Line /> Home</MyNavLink>
                    <MyNavLink to={'/timeLine'}><MdOutlineWatchLater /> TimeLine</MyNavLink>
                    <MyNavLink to={'/status'}><SiLevelsdotfyi /> Status</MyNavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;