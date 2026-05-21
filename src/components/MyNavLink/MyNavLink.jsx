import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to , children}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive}) =>
                `btn border-none ${isActive ? 'bg-[#244d3f] text-white' : 'text-[#64748B] bg-white'}`
            }> {children}</NavLink>
        </div>
    );
};

export default MyNavLink;