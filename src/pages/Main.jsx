import React from 'react'
import "./Main.css"
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Right from '../components/Right'
import Products from '../components/Products'

function Main() {
  return (
    <section className="page">
      <div className="center">
        <Navbar/>
        <div className="main-content">
          <Left/>
          <Right/>
        </div>
        <Products/>
        <h1 className='footer-text'>This website was developed by Tevž</h1>
      </div>
    </section>
  )
}

export default Main