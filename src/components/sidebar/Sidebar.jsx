import React from 'react';
import './sidebar.scss';
import { SiHomeadvisor,SiStatuspal } from "react-icons/si";
import { FiUsers,FiSettings } from 'react-icons/fi';
import { MdProductionQuantityLimits,
  MdNotificationsActive,
  MdOutlineHealthAndSafety } from 'react-icons/md';
import { BsBorderStyle } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { LiaBlogSolid } from 'react-icons/lia';
import { BiUserCircle, BiSolidLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">novonepal</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='title'>MAIN</p>
            <Link to='/' style={{textDecoration: 'none'}}>
              <li>
                <SiHomeadvisor className='icon'/>
                <span>Dashboard</span>
              </li>
            </Link>
          <p className='title'>LISTS</p>
            <Link to='/user' style={{textDecoration: 'none'}}>
              <li>
                <FiUsers className='icon' />
                <span>Users</span>
              </li>
            </Link>
          <li>
            <MdProductionQuantityLimits className='icon' />
            <span>Products</span>
          </li>
          <li>
            <BsBorderStyle className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <CiDeliveryTruck className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <SiStatuspal className='icon' />
            <span>Status</span>
          </li>
          <li>
            <MdNotificationsActive className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <MdOutlineHealthAndSafety className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <LiaBlogSolid className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <FiSettings className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <BiUserCircle className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <BiSolidLogOut className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;