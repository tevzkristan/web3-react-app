import React from 'react'
import "./Main.css"
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Right from '../components/Right'

function Main() {
  return (
    <section className="page">
      <div className="center">
        <Navbar/>
        <div className="main-content">
          <Left/>
          <Right/>
        </div>
      </div>
    </section>
  )
}

export default Main