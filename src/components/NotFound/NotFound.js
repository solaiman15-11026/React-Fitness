import React from 'react';
import notFound from '../../image/not-found.png';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='mt-5'>
            <h1 className='fw-bold fs-1'>This is not available which are you looking for!!</h1>
            <img className='img-fluid w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;