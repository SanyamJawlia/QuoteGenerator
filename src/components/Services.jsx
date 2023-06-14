import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

const Services = () => {
  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
      showThumbs={false} showIndicators={false} interval={2000}>
        
        <div>
            <img src={img1} alt="Item1" />
            <p className="legend">Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="Item2" />
            <p className="legend">Peer-to-peer Support Stack</p>
        </div>
        <div>
            <img src={img3} alt="Item3" />
            <p className="legend">Peer-to-peer Support Stack</p>
        </div>

      </Carousel>
    </div>
  )
}

export default Services
