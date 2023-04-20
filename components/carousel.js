import React, { useState, useEffect, useRef } from "react";
import Container from "./container";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/helpers/images";

export default function Carousel() {
  const [selectedImage, setSelectedImage] = useState(null);
  const carousel = useRef();
  const fullscreenRef = useRef();
  const totalImages = images.length;

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedImage]);

  const handlePreviousImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage < totalImages - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <Container extraClasses="mt-24 mb-36">
      <motion.div
        ref={carousel}
        className="carousel overflow-scroll scrollbar-hide relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="inner-carousel flex">
          {images.map((image, index) => {
            return (
              <motion.div
                key={index}
                className={`relative item min-h-[20rem] h-[20rem] min-w-[100%] sm:min-w-[60%] md:min-w-[33%] p-4`}
                onClick={() => setSelectedImage(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  key={`image-${index}`}
                  src={image.src}
                  alt="image"
                  className="h-full w-full object-cover rounded-[5px] cursor-pointer"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      {/* typescript is not used cause of AnimatePresence */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0  flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            key={selectedImage}
          >
            <div
              ref={fullscreenRef}
              className="absolute inset-0 bg-black opacity-85 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />

            <div className="flex flex-col relative">
              <motion.div
                className="relative overflow-hidden pb-[66.66%] w-[90vw] h-[355px] sm:max-w-[60vw] "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  
                  src={images[selectedImage]?.src}
                  alt="selected image"
                  className="rounded-lg absolute h-full w-full object-contain"
                />
              </motion.div>
              <div className="arrow-buttons flex w-[50%] justify-evenly mx-auto mt-4">
                <motion.button
                  style={{ display: selectedImage > 0 ? "block" : "none" }}
                  onClick={handlePreviousImage}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      fill="none"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  style={{
                    display: selectedImage < totalImages - 1 ? "block" : "none",
                  }}
                  onClick={handleNextImage}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}
