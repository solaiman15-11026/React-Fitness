import React from 'react';
import useReview from '../../hook/useReview';
import banner from '../../image/banner.jpg'
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [reviews, setReviews] = useReview();

    const navigate = useNavigate()

    const handleSeeReviews = () => {
        const path = `/review`
        navigate(path)
    }

    return (
        <div className=' mt-5'>
            {/* Banner Section */}
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-2 pt-5 d-flex align-items-center justify-content-center'>
                    <div className="banner-heading align-middle">
                        <h1 className=' text-uppercase fw-bolder textt fs-1 mb-2'>The Apple Watch</h1>
                        <p className=' fw-bold mt-2 py-2 text' >Well, it’s a distinctive piece of tech that at first can be hard to get your head around, or even to quite know what it does. In short, it’s a watch that sends notifications and other information from your iPhone to your wrist and lets you send stuff back the other way, whether that’s a text message, a phone call or a simple way to call an Uber.</p>
                        <button className='btn btn-outline-success fs-5 mb-5'>Live Demo</button>
                    </div>
                    <div className="banner-image">
                        <img className='img-fluid shadow-sm ' src={banner} alt="" />
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className='mt-5 '>
                <h1 className='pt-5'>What Our Clients Say!!!</h1>
                <hr className='w-50 mx-auto mb-5' />
                <div className='container mt-3'>
                    <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4'>

                        {
                            reviews.slice(0, 3).map(review => <HomeReview
                                key={review.id}
                                review={review}
                            ></HomeReview>)
                        }
                    </div>
                    <div>
                        <button onClick={handleSeeReviews} className='btn btn-outline-success fs-5 mb-5 mt-4'>See All Reviews</button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Home;