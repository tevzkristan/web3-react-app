import React from 'react'
import myImage from '../images/image-web-3-desktop.jpg'
import './Left.css'

function Left() {
  return (
    <div className="content">
        <img src={myImage} className='image' alt="Image" />

        <div className="text">
            <h1 className='left-header'>The Bright<br />Future of<br />Web 3.0?</h1>
            <div className="text-right">
               <p className="left-para">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
               <button>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Left