import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const{name,price,img} =service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <button>Offer: {name}</button>
        </div>
    );
};

export default Service;