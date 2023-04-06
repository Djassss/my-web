import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Sell = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showArrows={false} showThumbs={false} showIndicators={false}>
       <div>
       <img src={require("../zaraImages/zara3.jpg")} />
       </div>
       <div>
       <img src={require("../zaraImages/zara2.jpg")} />
       </div>
       <div>
       <img src={require("../zaraImages/zara1.jpg")} />
       </div>
    </Carousel>
  )
}

export default Sell;