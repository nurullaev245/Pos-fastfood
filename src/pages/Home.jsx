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

export default Home