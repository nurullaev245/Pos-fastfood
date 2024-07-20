import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Carousel from './components/Carousel';
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
      <div id="detail">
        <Navbar />
        <Carousel images={images} />
        <Outlet />
      </div>

      <footer className="footer bg-green-500 text-blue-600-700 py-8 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h6 className="text-lg font-bold mb-2">ACME Fast Foods Ltd.</h6>
            <p>Serving deliciousness since 2024</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h6 className="text-lg font-bold mb-2">Contact Us</h6>
            <ul className="list-none">
              <li>Email: info@acmefastfoods.com</li>
              <li>Phone: +123-456-7890</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h6 className="text-lg font-bold mb-2">Follow Us</h6>
            <div className="flex justify-center md:justify-end">
              <a href="#" className="mx-2">Facebook</a>
              <a href="#" className="mx-2">Twitter</a>
              <a href="#" className="mx-2">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
