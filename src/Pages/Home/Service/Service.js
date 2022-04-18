import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const{id,name,price,img} =service;
    const navigate= useNavigate();
    const navigateToServiceDetail = id =>{
       navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <button onClick={ () => navigateToServiceDetail(id)}>Offer: {name}</button>
        </div>
    );
};

export default Service;