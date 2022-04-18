import React from 'react';
import './Banner.css';

import banner1 from '../../../images/banner/banner1.jpg';

const Banner = () => {
    

    return (
        <div className='banner'>
            <img
          className=""
          src={banner1}
          alt="First slide"
        />
        </div>
    );
};

export default Banner;