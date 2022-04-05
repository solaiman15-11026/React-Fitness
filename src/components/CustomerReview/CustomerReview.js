import React from 'react';
import './CustomerReview.css'

const CustomerReview = (props) => {
    const { img, name, review, ratings } = props.review
    return (
        <div className="col">
            <div className="card shadow rounded h-100">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title fs-4">{name}</h5>
                    <p className="card-text fs-6">Review: {review}</p>
                    <p className="card-text">Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;