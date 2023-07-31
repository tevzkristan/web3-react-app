import React from 'react'
import './Right.css'

function Right() {
  return (
    <div className="new">
        <h1 className='new-header'>New</h1>

        <div className="sub-new">
            <h2 style={{ marginTop: '28px' }}>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever cactch up to EVs?</p>
        </div>
        <hr />
        <div className="sub-new">
            <h2>The Downsides of AI Artisrty</h2>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <hr />
        <div className="sub-new">
            <h2>Is VC Funding Drying Up?</h2>
            <p style={{ marginBottom: '48px' }}>Private funding by VC firms is down 50% YOY. We take a look at what means.</p>
        </div>
    </div>
  )
}

export default Right