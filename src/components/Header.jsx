import { faCartShopping, faHeart, faSearch, faUser, faBagShopping, faDisplay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { AiOutlineAccountBook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState, useRef } from 'react';








const Header = () => {
const [show, setShow] = useState();

// const dropdownRef = useRef(null);
// const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

// const closeHoverMenu = () => {
//   setMenuDropDownOpen(false);
// };

 
 const dropBox =  
<div className="header-hover">
<div className="list">
  <ul className='list_1'>
    <li>New Now</li>
    <li>Gift Guidee</li>
    <li className='showcase' onClick={() => setShow((prev) => !prev)}>
      {show ? 'Clothing'  : 'Clothing '}
{show &&
    <ul className='list_2'>
     <h3>Clothing</h3>
    <li className='li_a'>
      <a href="#">Coats</a>
      <a href="#">Jackets and Suit Jackets</a>
      <a href="#">Sweaters and cardigans</a>
      <a href="#">Dresses and jumpsuits</a>
      <a href="#">Shirts</a>
      <a href="#">t-shirts and taps</a>
      <a href="#">Sweatshirts</a>
      <a href="#">Jeans</a>
      <a href="#">trousers</a>
      <a href="#">Skirts</a>
      <a href="#">Sportswear</a>
      <a href="#">Pyjamas</a>
    </li>
    </ul>
}
    </li>
    <li>Accessories</li>
    <li>Plus Sizes</li>
    <li>Collections</li>
    <li>Featured</li>
  </ul>
</div>

<img src={require('../mangoImg/camille.webp')} />
</div> 


const [headerHover, sHeaderHover] = useState();
  return (
    <>
      <nav>
      <main>
            {/* <HashLink to={"/#home"}> Home</HashLink>  */}
            <Link to={"/woman"} className='dropDown'> Woman</Link>
            <HashLink to={"/newCollection"}>New now</HashLink>
            <HashLink to={"/#main-slide"}> New collection</HashLink>
            <Link to={"/sell"}>Sell</Link>
      </main>
         {/* {dropBox} */}
        <HashLink to={"/#home"}> <img src={require("../logo/3.png")} /></HashLink>  
       
        <div class="header-social"> 
            <span>
              <Link>
              <FontAwesomeIcon className='icon' icon={faSearch}></FontAwesomeIcon><br />
               Search
              </Link>
            </span>
            <span>
              <Link to={"/signIn"}>
                <FontAwesomeIcon className='icon' icon={faUser}></FontAwesomeIcon><br />
                Sign In
              </Link>
            </span>
            <span>
              <Link style={{letterSpacing: '2px'}}>
                <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon><br />
                wishlist
                </Link>
            </span>
            <span>
            <Link>
              <FontAwesomeIcon className='icon' icon={faBagShopping}></FontAwesomeIcon><br />
              Shopping bag
            </Link>
             </span>
        </div>
      </nav>
    </>
    
  )
}

export default Header;