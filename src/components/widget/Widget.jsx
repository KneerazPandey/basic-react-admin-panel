import React from 'react';
import { BsArrowBarUp } from 'react-icons/bs';
import { GrUserSettings } from 'react-icons/gr';
import { BsCartCheck } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import './widget.scss';

const Widget = (props) => {
  const { type }  = props;
  let data;
  const amount = 100;
  const diff = 20;

    switch(type) {
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: (
                    <GrUserSettings 
                        className='icon' 
                        style={{color: 'crimson', 'backgroundColor': 'rgba(255, 0, 9, 0.2)'}} 
                    />
                )
            };
            break;
        case "order": 
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: (
                    <BsCartCheck 
                        className='icon' 
                        style={{color: 'goldenrod', 'backgroundColor': 'rgba(218, 165, 32, 0.2)'}} 
                    />
                )
            };
            break;
        case "earning": 
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: (
                    <RiMoneyDollarCircleLine
                        className='icon' 
                        style={{color: 'green', 'backgroundColor': 'rgba(0, 128, 0, 0.2)'}} 
                    />
                )
            };
            break;
        case "balance": 
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: (
                    <MdOutlineAccountBalanceWallet 
                        className='icon' 
                        style={{color: 'purple', 'backgroundColor': 'rgba(128, 0, 128, 0.2)'}} 
                    />
                )
            };
            break;
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{ data.title }</span>
            <span className="counter">{ data.isMoney && "$" } {amount} </span>
            <span className="link">{ data.link }</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <BsArrowBarUp />
                {diff}%
            </div>
            { data.icon }
        </div>
    </div>
  )
}

export default Widget;