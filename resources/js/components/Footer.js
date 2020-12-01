import React from 'react';
import ReactDOM from 'react-dom'

function Footer() {
    return (
        <div >
        <footer id='colophon' className="site-footer">
            <svg>
                {/*<path xmlns="http://www.w3.org/2000/svg" d="M6.45,13.92H8.94v9.24a.75.75,0,0,0,.75.74h4a.75.75,0,0,0,.75-.74V13.92h2.36a.75.75,0,0,0,.74-.65l.49-4a.74.74,0,0,0-.73-.83H14.41C14.52,6,14,5.29,15.57,5.29c1.08-.13,2.78.42,2.78-.74V1a.76.76,0,0,0-.64-.74A28.17,28.17,0,0,0,14.64.1C7.69.1,9.12,7.81,9,8.47H6.45a.75.75,0,0,0-.75.74v4a.75.75,0,0,0,.75.74Zm.74-4h2.5a.75.75,0,0,0,.74-.75V6.09c0-2.86,1.53-4.5,4.21-4.5.87,0,1.67,0,2.22.08V3.81c-.4.2-3.94-.88-3.94,2.67V9.21a.75.75,0,0,0,.74.75h2.76l-.31,2.48H13.66a.74.74,0,0,0-.74.74v9.23H10.43V13.18a.75.75,0,0,0-.74-.75H7.19Z" style="fill: #606060" />*/}
                </svg>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="widget-details">
                                <figure>
                                    <img src="images/logo.png" />
                                </figure>
                                <p className="content-text">
                                    Lorem ipsum dolor sit amet, consetetur sadipsc
                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.a
                                </p>
                                <ul className="social-icons">
                                    <li>
                                        <a className="facebook" href="www.faceobook.com"></a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="insta"></a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="twitter"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="widget-information widget-footer">
                                        <h3 className="f-title">INFORMATION</h3>
                                        <ul>
                                            <li>
                                                <a href="">About Benassi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Technology
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Contact Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Privacy policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Sustainability
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Care InstructionsB
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Bulk Orders
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Rebate Program
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Cookies
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="widget-cus-service widget-footer">
                                        <h3 className="f-title">CUSTOMER SERVICE
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="">Size guide
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Ordering and Payment
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Shipping Information
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Returns and Exchanges
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Terms and conditions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="widget-newsletter">
                                        <h3 className="f-title">Newsletter</h3>
                                        <p className="content-text">
                                            Subscribe to our newsletter to receive offers
                                            and news.
                                        </p>
                                        <div className="field-wrap">
                                            <input type="email" name="" placeholder="Enter your email address" />
                                        </div>
                                        <div className="btn-wrap">
                                            <button type="submit" className="btn">Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumb-wrap">
                                <img src="images/visa-grp.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
		</div>
    );
}
export default Footer;
