import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import Products from '../components/Products';

const Home = () => {
  const [count, setCount] = useState(0);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://img.daisyui.com/images/stock/photo-1669082138510-5ad474bd2d5d.jpg",
    "https://img.daisyui.com/images/stock/photo-1414694746927-acccc27bca85.jpg",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2f8e5d1707.jpg"
  ];

  return (
    <div>
      {/* <Carousel images={images} /> */}
      <Products />
    </div>
  );
};

export default Home;
