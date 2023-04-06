import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";
import { HashLink } from 'react-router-hash-link';
import NewCollection from './NewCollection';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      {/* <div className="main_img">
        <img src={require("../zaraImages/she_newnow_.webp")} />
      </div> */}
      <div className="video">
        <video src={require('../mangoImg/teen_party_0411.mp4')} loop muted autoPlay></video>
      </div>
            <h1>In color Flour</h1>
      <main>
            <button>Teen Girl</button>
            <button>discover more</button>
      </main>  
    </div>
{/* <AiFillInstagram /> */}
    <div className="home2" id='new-collection'>
      <div className="block">
        <div className="section-1">
          <div className="section-1_h3">
            <h3><em> Party and events</em></h3>
            <a href="#">Discover more</a>
          </div>
        </div>
        <div className="section-2">
          <div className="section-2_h3">
              <h3><em style={{fontSize: '30px'}}> Coat time</em></h3>
              <a href="#">Discover more</a>
          </div>
        </div>
      </div>
    <div className="block-2">
        <section className="section-1">
                <h3><em style={{fontSize: '30px'}}> Sweaters and <br /> cardigans</em></h3>
                <a href="#">Discover more</a>
        </section>
        <section className="section-2">
                <h3><em style={{fontSize: '30px'}}> Dreesses and<br /> jumpsuits</em></h3>
                <a href="#">Discover more</a>
        </section>
        <section className="section-3">
                <h3><em style={{fontSize: '30px'}}> Coats and <br />jackets</em></h3>
                <a href="#">Discover more</a>
        </section>
    </div>
    <div className="block-2">
        <section className="section-4">
                <h3><em> Gift Guide</em></h3>
                <a href="#">Discover more</a>
        </section>
        <section className="section-5">
                <h3><em style={{fontSize: '27px'}}> Bags and <br />acsessuares</em></h3>
                <a href="#">Discover more</a>
        </section>
        <section className="section-6">
                <h3><em style={{fontSize: '40px'}}> Shoes</em></h3>
                <a href="#">Discover more</a>
        </section>
    </div>
    <h1 id='main-slide'>#WWBGIRLS</h1>
    </div>
    <div className="main">
    <Carousel autoPlay infiniteLoop showStatus={false} showArrows={false} showThumbs={false} showIndicators={false}>
        <img className='img-border' src={require("../zaraImages/pretty3.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty2.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty4.jpg")} />
    </Carousel>
    <Carousel autoPlay infiniteLoop showStatus={false} showArrows={false} showThumbs={false} showIndicators={false}>
        <img className='img-border' src={require("../zaraImages/pretty3.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty2.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty4.jpg")} />
    </Carousel>
    <Carousel autoPlay infiniteLoop showStatus={false} showArrows={false} showThumbs={false} showIndicators={false}>
        <img className='img-border' src={require("../zaraImages/pretty3.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty2.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty4.jpg")} />
    </Carousel>
    <Carousel autoPlay infiniteLoop showStatus={false} showArrows={false} showThumbs={false} showIndicators={false}>
        <img className='img-border' src={require("../zaraImages/pretty3.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty2.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty.jpg")} />
        <img className='img-border' src={require("../zaraImages/pretty4.jpg")} />
    </Carousel>
    </div> 
    <div className="button">
       <Link to={'/newCollection'}><button className='btn'>Discover more </button></Link>
    </div>
    </>
  );
};

export default Home;