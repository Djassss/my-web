import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faCartShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Woman = () => {
  return (
    <>
    <div className='LogoImg'>
      <img src={require("../zaraImages/mangoImg.webp")} />
    </div>
    <div className="newNow">
      #new now
    </div>
    <div className="filter-price">
      <img src={require("../logo/filter.png")} width={'20px'}/>
      <img src={require("../logo/menu.png")} width={'20px'}/>
    </div>

<div className="block">
  <div className="section_1">
    <Carousel className='slide' infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img src={require("../mangoImg/загрузка(20).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка (38).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка(11).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
          <img  src={require("../mangoImg/загрузка(9).jpg")} />
          <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
    </Carousel>
    <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
  <div className='section_1'>
      <Carousel className='slide' infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
            <div>
              <img src={require("../mangoImg/загрузка(42).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(41).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(14).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
            <img  src={require("../mangoImg/загрузка(15).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
      </Carousel>
      <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
</div>

<div className="block">
  <div className="section_1">
    <Carousel className='slide'   infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img src={require("../mangoImg/загрузка(20).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка (38).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка(11).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
          <img  src={require("../mangoImg/загрузка(9).jpg")} />
          <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
    </Carousel>
    <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
  <div className='section_1'>
      <Carousel className='slide' infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
            <div>
              <img src={require("../mangoImg/загрузка(42).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(41).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(14).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
            <img  src={require("../mangoImg/загрузка(15).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
      </Carousel>
      <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
</div>

<div className="block">
  <div className="section_1">
    <Carousel className='slide'   infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img src={require("../mangoImg/загрузка(20).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка (38).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка(11).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
          <img  src={require("../mangoImg/загрузка(9).jpg")} />
          <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
    </Carousel>
    <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
  <div className='section_1'>
      <Carousel className='slide' infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
            <div>
              <img src={require("../mangoImg/загрузка(42).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(41).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(14).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
            <img  src={require("../mangoImg/загрузка(15).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
      </Carousel>
      <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
</div>

<div className="block">
  <div className="section_1">
    <Carousel className='slide'   infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img src={require("../mangoImg/загрузка(20).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка (38).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка(11).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
          <img  src={require("../mangoImg/загрузка(9).jpg")} />
          <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
    </Carousel>
    <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
  <div className='section_1'>
      <Carousel className='slide' infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
            <div>
              <img src={require("../mangoImg/загрузка(42).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(41).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(14).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
            <img  src={require("../mangoImg/загрузка(15).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
      </Carousel>
      <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
</div>

<div className="block">
  <div className="section_1">
    <Carousel className='slide'   infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
          <div>
            <img src={require("../mangoImg/загрузка(20).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка (38).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
            <img src={require("../mangoImg/загрузка(11).jpg")} />
            <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
          </div>
          <div>
          <img  src={require("../mangoImg/загрузка(9).jpg")} />
          <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
          </p>
          </div>
    </Carousel>
    <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
  <div className='section_1'>
      <Carousel className='slide' infiniteLoop showArrows={true} showStatus={false}  showThumbs={false} showIndicators={false}>
            <div>
              <img src={require("../mangoImg/загрузка(42).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(41).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
              <img  src={require("../mangoImg/загрузка(14).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
            <div>
            <img  src={require("../mangoImg/загрузка(15).jpg")} />
              <p className='legend'>
                <p>Berden ekle</p>
                <div className="size">
                  <span className='xxs'>xxs</span>
                  <span className='xs'>xs</span>
                  <span className='s'>s</span>
                  <span className='m'>m</span>
                  <span className='l'>l</span>
                  <span className='xl'>xl</span>
                  <span className='xxl'>xxl</span>
                </div>
              </p>
            </div>
      </Carousel>
      <div className="list-price">
        <span>
          text<br />
          199.00$
          </span>
        <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
    </div>
  </div>
</div>

  
  
 
    
  
   
    </>
  )
}

export default Woman;