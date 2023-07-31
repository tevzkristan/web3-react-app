import React from 'react'
import Image1 from '../images/image-retro-pcs.jpg'
import Image2 from '../images/image-top-laptops.jpg'
import Image3 from '../images/image-gaming-growth.jpg'
import './Products.css'

function Products() {
  return (
    <div className="products">
        <div className="product">
            <img src={Image1} className='product-image' alt="image1" />
            <div className="info">
                <h1 className='number'>01</h1>
                <h2 className="product-title">Reviving Retro PCs</h2>
                <p className="description">What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>

        <div className="product">
            <img src={Image2} className='product-image' alt="image1" />
            <div className="info">
                <h1 className='number'>02</h1>
                <h2 className="product-title">Top 10 Laptops of 2022</h2>
                <p className="description">Our best picks for various needs and budgets.</p>
            </div>
        </div>

        <div className="product">
            <img src={Image3} className='product-image' alt="image1" />
            <div className="info">
                <h1 className='number'>03</h1>
                <h2 className="product-title">The Growth of Gaming</h2>
                <p className="description">How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default Products