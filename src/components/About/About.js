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
                    <h1 className=' text-uppercase fw-bolder textt fs-1 mb-2'>The Apple Watch</h1>
                    <p className=' fw-bold mt-2 py-2 text' >Well, it’s a distinctive piece of tech that at first can be hard to get your head around, or even to quite know what it does. In short, it’s a watch that sends notifications and other information from your iPhone to your wrist and lets you send stuff back the other way, whether that’s a text message, a phone call or a simple way to call an Uber.</p>
                    <button className='btn btn-outline-success fs-5 mb-5'>Live Demo</button>
                </div>
            </div>
        </div>
    );
};

export default About;