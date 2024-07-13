import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import CustomButton from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* all the other elements */}
      <div id="detail" className=''>
        <Outlet />
      </div>
    </>
  )
}

export default App;

