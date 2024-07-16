import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  console.log("Rendering Carousel with images:", images);

  return (
    <div className='' style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div className="carousel w-full" style={{ display: 'flex', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <div id={`slide${index + 1}`} key={index} className="carousel-item relative w-full" style={{ minWidth: '100%' }}>
            <img src={image} className="w-full" alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">❮</a>
              <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
