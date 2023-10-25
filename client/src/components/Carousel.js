import { useState } from "react";
import { motion } from "framer-motion";
import fig1 from "../assets/images/ocassion_one.png"
import { Link } from "react-router-dom";

const Carousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [fig1, fig1, fig1, fig1, fig1];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 0.6, zIndex: 5 },
    left1: { x: "-50%", scale: 0.5, zIndex: 3 },
    left: { x: "-90%", scale: 0.4, zIndex: 2 },
    right: { x: "90%", scale: 0.4, zIndex: 1 },
    right1: { x: "50%", scale: 0.5, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center h-screen">
          {images.map((image, index) => (
            <Link to='/flowers'>
              <div>
                <motion.img
                  key={index}
                  src={image}
                  alt={image}
                  className="rounded-[12px]"
                  initial="center"
                  animate={positions[positionIndexes[index]]}
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                  style={{ width: "40%", position: "absolute" }}
                />
              </div>
              <div>
                <h1 className="text-black">Love and Romance</h1>
              </div>
              
            </Link>
        ))}

      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;