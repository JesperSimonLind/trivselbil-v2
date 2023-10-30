import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const reviews = [
  {
    text: "Mycket bra service och väl utfört arbete.",
    rating: 5,
  },
  {
    text: "Alltid bra service och resultat bästa tvätten kan verkligen rekommenderas",
    rating: 5,
  },
  {
    text: "Mycket bra service och prisvärt!",
    rating: 5,
  },
  {
    text: "Bättre service kan man inte få. Trevlig och mycket förtroendeingivande personal som utför ett mycket bra arbete.",
    rating: 5,
  },
  {
    text: "Supertrevliga och fick hjälp med min bil på bästa sätt.",
    rating: 5,
  },
  {
    text: "Alltid nöjd med den service vi får från den supertrevliga personalen.",
    rating: 5,
  },
];

const ReviewSlider = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<AiFillStar />);
    }
    return stars;
  };

  return (
    <div
      className="slideshow"
      style={{
        backgroundColor: "var(--color-darkPurple)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentReviewIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="review-card"
          style={{
            backgroundColor: "var(--color-darkPurple)",
          }}
        >
          <div
            className="rating"
            style={{
              fontSize: "30px",
              textAlign: "center",
              color: "var(--color-orange)",
            }}
          >
            {renderRatingStars(reviews[currentReviewIndex].rating)}
          </div>
          <p
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontFamily: "var(--font-base)",
              fontSize: "20px",
              lineHeight: "25px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            {reviews[currentReviewIndex].text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ReviewSlider;
