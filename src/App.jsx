import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Carousel from './components/Carousel ';  
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
  ];

  console.log("Rendering App component");

  return (
    <>
      {/* all the other elements */}
      <div id="detail">
      <Navbar />
        <Carousel images={images} />
        <Outlet />
       
      </div>
    </>
  );
}

export default App;
