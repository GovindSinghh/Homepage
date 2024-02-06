import React from 'react'
import Img1 from "../util/image_1.png"
import "./navbar.css"
import video1 from "../util/video_1.mp4"

export default function Navbar(){
    return(
        <section className='hero'>
            <video src={video1} autoPlay muted loop></video>
            <div className='nav'>
                <img src={Img1} alt="logo" height="110px" width="160px" />
                <div className='link'>
                    <a>Home</a>
                    <a>About Us</a>
                    <a>Contact Us</a>
                    <a>Marketplace</a>
                    <a>FAQ</a>
                </div>
            <div>
                <button>Register</button>
                <button>Connect Wallet</button>
            </div>
            </div>
            <h1>Welcome to our blockchain based{` `}
            <span style={{ color: 'rgba(9, 203, 93, 0.542)' }}>CARBON-CREDIT</span> platform</h1>
            <h3>Turning emissions into opportunities: The magic of carbon credits</h3>
            <button className='view'>View Market</button>
        </section>
    )
}