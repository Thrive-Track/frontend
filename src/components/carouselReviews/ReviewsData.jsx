import React from "react";

export default function ReviewsData(props) {
  return (
    <>
      <div className="reviews_wrapper">
        <div className="reviews_wrapper2">
          <div className="reviews">
            <img src={props.image} className="reviews_image" />
            <div className="profile ">
              <h4>{props.name}</h4>
              <p className="occupation">{props.occupation}</p>
            </div>
          </div>
          <div className="reviews_text">
            <p>{props.review}</p>
          </div>
          <div className="ratings">
            <img src="Frame 143.png" className="first_ratings_image" />
          </div>
        </div>
      </div>
    </>
  );
}
