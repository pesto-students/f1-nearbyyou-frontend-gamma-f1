import React from 'react';
import { Link } from 'react-router-dom';

const VendorHeader = () => {
    return (
        <div class="site-wrap ">
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
                                {/* <Link to="/" class="text-white h2 mb-0"> <i class="fa fa-street-view" aria-hidden="true"></i></Link> */}
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU" alt="Image" class="img-fluid vendorimagebanner" style={{borderRadius : '63px'}} />
                            </h1>
                        </div>
                        <div class="col-12 col-md-10 d-none d-xl-block">
                            <nav class="site-navigation position-relative text-right" role="navigation">
                                <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li class="active livendor"><Link to="/vendor/app/home"><span>Dashboard</span></Link></li>
                                    <li class="livendor"><Link to="/vendor/app/profile"><span>Profile</span></Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: '3px' }}><a
                            href="#" class="site-menu-toggle js-menu-toggle text-white"><span
                                class="icon-menu h3"></span></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default VendorHeader;