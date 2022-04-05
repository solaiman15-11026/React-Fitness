import React from 'react';
import useReview from '../../hook/useReview';
import CustomerReview from '../CustomerReview/CustomerReview';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='my-5'>
            <h1 className=' fw-bold'>Customer Reviews</h1>
            <hr className='w-50 mx-auto mb-5' />
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4'>

                    {
                        reviews.map(review => <CustomerReview
                            key={review.id}
                            review={review}
                        ></CustomerReview>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Review;