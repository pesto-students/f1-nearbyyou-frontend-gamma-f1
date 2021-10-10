import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import auth from '../Route/Auth';

const Header = () => {

    //Objects
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <div class="site-wrap">
            <div class="site-mobile-menu">
                <div class="site-mobile-menu-header">
                    <div class="site-mobile-menu-close mt-3">
                        <span class="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div class="site-mobile-menu-body"></div>
            </div>
            <header class="site-navbar" role="banner">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-11 col-xl-2">
                            <h1 class="mb-0 site-logo" style={{ width: '222px' }}>
                                <Link to="/" class="text-white h2 mb-0"> <i class="fa fa-street-view" aria-hidden="true"></i> Near By You</Link>
                            </h1>
                        </div>
                        <div class="col-12 col-md-10 d-none d-xl-block">
                            <nav class="site-navigation position-relative text-right" role="navigation">
                                <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li class={pathName == "/" ? "active" : ""}><NavLink to="/"><span>Home</span></NavLink></li>
                                    <li class={pathName == "/category" ? "active" : ""}><NavLink to="/category"><span>All Categorys</span></NavLink></li>
                                    <li class={pathName == "/about" ? "active" : ""}><NavLink to="/about"><span>About</span></NavLink></li>
                                    <li class={pathName == "/contact" ? "active" : ""}><NavLink to="/contact"><span>Contact</span></NavLink></li>
                                    {
                                        auth.isAuthenticated() ? (
                                            <li class={pathName == "/app/viewTickets" ? "active" : ""}><NavLink to="/app/viewTickets"><span>View Tickets</span></NavLink></li>
                                        ) : (
                                            <li class={pathName == "/login" ? "active" : ""}><NavLink to="/login"><span>Login</span></NavLink></li>
                                        )
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: '3px' }}><a
                            href="#" class="site-menu-toggle js-menu-toggle text-white"><span
                                class="icon-menu h3"></span></a></div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;