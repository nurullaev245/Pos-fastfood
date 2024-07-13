import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Carousel from './components/Carousel ';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
