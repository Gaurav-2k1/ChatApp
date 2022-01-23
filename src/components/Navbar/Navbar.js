import React from 'react';
import { MdDashboard } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import './style.scss';

const Navbar = () => {
    return (<div className='sidebar'>
        <div className='dashboardicon'>
            <MdDashboard size='2.5rem'/>
        </div>
        <div className='navicon'>

            <AiOutlineHome size='2.5rem' />
            <BsChatDots size='2.5rem' />
            <FiSettings size='2.5rem' />
        </div>
        <RiLogoutBoxRLine size='2.5rem' className='logout'/>
    </div>);
};

export default Navbar;


