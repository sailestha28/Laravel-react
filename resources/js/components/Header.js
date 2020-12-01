import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from '././About';
import Contact from '././Contact';

function Header() {
    return (
        <div	 >   
           <header id="masthead" className="site-header">
            <div className="container">
                <div id="main-nav" className='clear-fix'>
                     <Router>
                          <nav id="site-navigation" className="main-navigation">
                        <div className="menu-item-wrap">
                            <ul id="" className="nav-items menu">
                                <li className="menu-item current-menu-item">
                             <Link to="/about"  > About Us </Link>
                                </li>
                                <li className="menu-item ">
                         <Link to="/contact"    > Contact </Link>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="menu-collapse">
                            <span className="icon-dash"></span>
                            <span className="icon-dash"></span>
                            <span className="icon-dash"></span>
                        </button>
                    </nav>
                        

                         <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />      
                    </Router>
              
                    <div className="site-branding">
                        <a >
                            <img className="logo" src="images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="icons-infromation">
                        <ul className="icon-lists">
                            <li className="icon-list">
                                <button className="search">
                                    <img src="images/header-icons.png" />
                                </button>
                            </li>
                            <li className="icon-list">
                                <button className="login">
                                    <img src="images/header-icons.png " />
                                    <span className="after-login-user">Benassie</span>
                                </button>
                                <div className="accouting-section">
                                    <ul className="lists">
                                        <li className="list">
                                            <a className="account_name" href="#"><span></span>My Account</a>
                                        </li>
                                        <li className="list">
                                            <a className="login_out" href="#"><span></span>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="icon-list">
                                <a className="cart">
                                    <img src="images/header-icons.png" />
                                    <span className="cart-number">1</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
            </div>
    );
}

export default Header;
