
import "../slider/slider.css";
import React, { useEffect, useState } from "react";
import byd from "../../img/byd-slider.jpg";
import bmw from "../../img/bmw.webp";
import porsh from "../../img/porsh.jpg";
import toyota from "../../img/toyota.jpg";



const Slide = () => {
    
    const slides = [
        { id: 1, image: byd },
        { id: 2, image: bmw },
        { id: 3, image: toyota },
        { id: 4, image: porsh }

      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          goToNextSlide();
        }, 6000); 
        return () => clearInterval(interval); 
      }, [currentIndex]);
    
      const goToPreviousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const goToNextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
          >
            {slides.map((slide, index) => (
              <div className="slide" key={slide.id}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="left-arrow" onClick={goToPreviousSlide}>
            &lt;
          </button>
          <a href="" ></a>
          <button className="right-arrow" onClick={goToNextSlide}>
            &gt;
          </button>
          <div className="indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      )
    };
    
    

export default Slide;