import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineLanguage, MdOutlineDarkMode } from 'react-icons/md';
import { IoLogoTableau } from 'react-icons/io5';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiMessageSquare } from 'react-icons/fi';
import { RxDropdownMenu } from 'react-icons/rx';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="search" placeholder='search .....' />
          <BsSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdOutlineLanguage className='icon' />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode className='icon' />
          </div>
          <div className="item">
            <IoLogoTableau className='icon' />
          </div>
          <div className="item">
            <IoIosNotificationsOutline className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FiMessageSquare className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <RxDropdownMenu className='icon' />
          </div>
          <div className="item">
            <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" 
              alt="niraj_image" 
              className='avatar'
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;