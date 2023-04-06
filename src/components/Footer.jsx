import React from 'react';
import { faArrowLeft, faArrowRight, faCartShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return ( 
    <>
    <footer className='footer'>
        <div class="footer-logo">
            <h1>woman</h1>
        </div>
        <div class="list">
                <ul class="footer-list1">
                    <h4>clothing</h4>
                    <li>Coats</li>
                    <li>Jackets and Suit Jackets</li>
                    <li>Sweaters and cardigans</li>
                    <li>Dresses and jumpsuits</li>
                    <li>Shirts</li>
                    <li>T-shirts and tops</li>
                    <li>Sweatshirts</li>
                    <li>Jeans</li>
                    <li>Trousers</li>
                    <li>Skirts</li>
                    <li>Sportswear</li>
                </ul>
                <ul class="footer-list2">
                    <h4>accessories</h4>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Wallets and cases</li>
                    <li>Belts</li>
                    <li>Hats and gloves</li>
                    <li>More accessories</li>
                </ul>
            </div>
            <div class="footer-bottom">
                <div class="sell">
                    <p>10% off your next purchase by subscribing to the newsletter</p>
                </div>
                <div class="email">
                    <input type="email" name="email" placeholder="Enter your e-mail" aria-invalid="true" />
                </div>
                <div class="footer-btn">
                    <button>Subscribe</button>
                </div>
                <div class="footer_text">
                    <p>By subscribing, you agree to our <a>Privacy Policy</a>
                     and <a>Promotion conditions.</a></p>
                </div>
                <div class="uzb">
                    <img src={require("../logo/internet.png")} />
                    <p><strong>Uzbekistan</strong></p>
                    <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon>
                </div>
                <div class="brands_name">
                    <p>
                        <strong>
                            <span>Help</span> <span>My purchase</span> 
                            <span> Returns</span> <span> Apps</span>
                            <span> Franchies</span><br />
                            <span class="btn-span"> Work for WWB</span> 
                            <span class="btn-span"> Press</span>  
                            <span class="btn-span"> Site map</span> 
                            <span class="btn-span"> Sustainability</span>
                        </strong>
                    </p>
                </div>
                <div class="footer-social">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                {/* <div class="logo">
                    <img src={require("../logo/3.png")} />
                </div> */}
            </div>
    </footer>
    <div class="wwb-2022">
        © 2022 WWB All rights reserved Privacy Policy and Cookies | Terms & Conditions
    </div>
 </>
 );
};
export default Footer;