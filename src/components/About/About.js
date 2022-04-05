import React from 'react';
import banner from '../../image/banner.jpg'

const About = () => {
    return (
        // about details 
        <div className='container my-5'>
            <h1 className='fw-bold'>About</h1>
            <hr className='mb-3 w-50 mx-auto' />
            <div className='row row-cols-1 row-cols-md-2 pt-5 d-flex align-items-center justify-content-center'>
                <div className="banner-image">
                    <img className='img-fluid shadow-sm ' src={banner} alt="" />
                </div>
                <div className="banner-heading align-middle">
                    <h1 className=' text-uppercase fw-bolder text-success fs-1 mb-2'>Mac Book Pro</h1>
                    <p className=' fw-bold mt-2 py-2' >M1 Pro and M1 Max revolutionize the MacBook Pro experience and mark a huge step forward in the transition to Apple silicon on Mac.</p>
                    <button className='btn btn-outline-success fs-5 mb-5'>Live Demo</button>
                </div>
            </div>
        </div>
    );
};

export default About;