import React from 'react';
import { faCartShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const NewCollection = () => {
  return (
    <>
    <div id='newCollection'>
      <div className="main_img">
        <img src={require('../mangoImg/she_newnow_1411.webp')}/>
      </div>
      <main className='text'>
         <h1>with love, to you</h1>
         <p>gift guide</p>
      </main>  
      <div className="btn">
      <HashLink to={"#shoes"}><button>Shoes</button></HashLink> 
      <HashLink to={"#bags"}><button>Bags for woman</button></HashLink> 
      <HashLink to={"#jeans"}><button>Jeans for woman</button></HashLink> 
      <HashLink to={"#dress"}><button>Dress</button></HashLink><br /> 
      <HashLink to={"#product"}><button>Jacket for woman</button></HashLink> 
      <HashLink to={"#product"}><button>Jacket for woman</button></HashLink> 
      <HashLink to={"#product"}><button>Jacket for woman</button></HashLink> 
      <HashLink to={"#product"}><button>Jacket for woman</button></HashLink> 
      <HashLink to={"#product"}><button>Jacket for woman</button></HashLink> 
        </div>
    </div>

    <div className="h3" id='new'>
      <h3>gift guide</h3>
    </div>

    <div className="slide">
      <Carousel className='slide1' autoPlay infiniteLoop  showArrows={true}  showStatus={false}  showThumbs={true} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(24).jpg")} />
            {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка.jpg")} />
            {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(30).jpg")} />
            {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
          <div>
          <img className='slider' src={require("../mangoImg/загрузка(16).jpg")} />
          {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
      </Carousel>
      {/* <Carousel   showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel> */}
      {/* <Carousel   showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel> */}
      <Carousel  className='slide1' autoPlay infiniteLoop  showArrows={true} showStatus={false}  showThumbs={true} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(2).jpg")} />
            {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(25).jpg")} />
            {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(5).jpg")} />
            {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
          <div>
          <img className='slider' src={require("../mangoImg/загрузка(13).jpg")} />
          {/* <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p> */}
          </div>
      </Carousel>
    </div>


    <div className="slide">
      <Carousel className='slide2'  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(14).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(15).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
      </Carousel>
      <Carousel className='slide2'  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(9).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(11).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
      </Carousel>
      <Carousel  className='slide2' autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(20).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(19).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
      </Carousel>
      <Carousel  className='slide2' autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/Без названия (12).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/Без названия (13).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty.jpg")} />
            <p className='legend'>
                <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
                <a href="#" id='bags'>view product</a>
              </p>
          </div> */}
      </Carousel>
    </div>
      <div className="product">Bags</div>

      <div className="slide">
      <Carousel  className='slide3' autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(15).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../mangoImg/загрузка(14).jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  className='slide3' autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(11).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(9).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
      </Carousel>
      <Carousel className='slide3' autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(16).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(24).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
      </Carousel>
      <Carousel className='slide3'  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка(20).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../mangoImg/загрузка (38).jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          {/* <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
          {/* <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div> */}
      </Carousel>
    </div>

    <div className="slide">
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#" id='jeans'>view product</a>
            </p>
          </div>
      </Carousel>
    </div>

      <div className="product">Jeans</div>
    
      <div className="slide">
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
    </div>
    <div className="slide">
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#" id='dress'>view product</a>
            </p>
          </div>
      </Carousel>
    </div>

      <div className="product">Dress</div>
    
      <div className="slide">
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
    </div>
    <div className="slide">
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#" id='shoes'>view product</a>
            </p>
          </div>
      </Carousel>
    </div>

    <div className="product">Shoes</div>

    <div className="slide">
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
    </div>
    <div className="slide">
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
      <Carousel  autoPlay  infiniteLoop showArrows={false} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
            <img className='slider' src={require("../zaraImages/pretty3.jpg")} />
            <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
          <div>
          <img className='slider' src={require("../zaraImages/pretty.jpg")} />
          <p className='legend'>
              <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
              <a href="#">view product</a>
            </p>
          </div>
      </Carousel>
    </div>
    </>
  )
}

export default NewCollection;