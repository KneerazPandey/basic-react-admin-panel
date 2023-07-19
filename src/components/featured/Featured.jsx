import React from 'react';
import { 
  BiDotsVerticalRounded, 
  BiSolidArrowFromBottom, 
  BiSolidArrowFromTop} from 'react-icons/bi';
import { CircularProgressbar } from 'react-circular-progressbar';
import './featured.scss';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <BiDotsVerticalRounded fontSize={20} />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar 
            value={70}
            text={'70%'}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <BiSolidArrowFromBottom  fontSize={'small'} />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <BiSolidArrowFromTop fontSize={'small'} />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <BiSolidArrowFromBottom fontSize={'small'} />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;