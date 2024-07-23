<<<<<<< HEAD
import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://img.daisyui.com/images/stock/photo-1669082138510-5ad474bd2d5d.jpg",
    "https://img.daisyui.com/images/stock/photo-1414694746927-acccc27bca85.jpg",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2f8e5d1707.jpg"
  ];
=======
import React, { useState} from 'react'

const Home = () => {
  const [count , setCount] = useState(0);
  const images =[
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
  ]
  return (
      <Corousel images={images} /> 
  )
}
>>>>>>> d7d21681fafa4ee547f35d1d5ebbd464573e8a7e

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

export default Home;
