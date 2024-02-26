import React from 'react';

export function Slideshow() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="image2.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="image3.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
    </div>
  );
}


