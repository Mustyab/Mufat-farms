import React from 'react'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  
  return (
    <section className='home'>
      <div className='home-content'>
        <h1>Welcome to Mufat Farms your source for Fresh Poultry & Eggs</h1>
        <p>We are a family-owned farm dedicated to providing the freshest produce and the best quality products.</p>
        <button className='products-btn' onClick={() => navigate('/products')} >Explore Products</button>
      </div>
      <div className='home-image'>
      </div>
    </section>
  )
}

export default Home
