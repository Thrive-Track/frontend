import React from "react";
import ReviewsData from "./ReviewsData";
import "./Reviews.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import lily from "../../assets/carousel_images/calvin.png";
import angela from "../../assets/carousel_images/Ellipse.png";
import pretty from "../../assets/carousel_images/prettylady.png";
import handsome from "../../assets/carousel_images/handsome.png";
import fineman from "../../assets/carousel_images/fineman.png";
import kheydee from "../../assets/carousel_images/calvinunsplash.png";

function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const data = [
    {
      id: 1,
      image: lily,
      alt: "reviewer's image",
      name: "Lily Bell",
      occupation: "Account manager",
      review:
        '"Awesome management tool. I have gotten a lot more productive and focused since I began using ThriveTrack."',
    },

    {
      id: 2,
      image: kheydee,
      alt: "reviewer's image",
      name: "Owokorede",
      occupation: "Software engineer",
      review:
        '"This is the best task management tool I have used so far. My day is more fulfilled than it used to be."',
    },
    {
      id: 3,
      image: angela,
      alt: "reviewer's image",
      name: "Angela Mark",
      occupation: "Software Engineer",
      review:
        '"Wow! My day is more fulfilled than ever before. Every daily task is achievable with ThriveTrack. I can proudly say that that with this tool, I am ahead"',
    },
    {
      id: 4,
      image: pretty,
      alt: "reviewer's image",
      name: "Sandra kanu",
      occupation: "Product Designer",
      review:
        '"I have come across many task management tools, but ThriveTrack has given me the best experience so far. It is easy to use and customize."',
    },
    {
      id: 5,
      image: fineman,
      alt: "reviewer's image",
      name: "Beston Keghtor",
      occupation: "Product Designer",
      review:
        '"It\'s been an awesome journey with ThriveTrack. Planning my day with this tool has been so easy and fulfilling. I can be rest assured that my goals can be achieved."',
    },
    {
      id: 6,
      image: handsome,
      alt: "reviewer's image",
      name: "Sylvester Bamidele",
      occupation: "Product manager",
      review:
        '" If you want efficiency, organization and actualization, choose ThriveTrack."',
    },
  ];
  const reviews = data.map((item) => (
    <ReviewsData
      image={item.image}
      name={item.name}
      occupation={item.occupation}
      review={item.review}
    />
  ));
  return (
    <div className="reviews_container">
      <div className="reviews_heading">
        <p>What Users Are Saying</p>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div> */}
        {reviews}
      </Carousel>
    </div>
  );
}

export default Reviews;
