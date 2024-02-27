import React from 'react';
import { useState } from 'react';
export function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % 3; // Assuming you have 3 slides
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + 3) % 3; // Assuming you have 3 slides
    setActiveIndex(newIndex);
  };
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src="./images/banner.png" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src="./images/banner1.png" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src="./images/banner2.png" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <button className="sr-only btn-btn-primary">Previs</button>
      </a>
      <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <button className="sr-only btn-btn-primary">Next</button>
      </a>
    </div>
  );
}


