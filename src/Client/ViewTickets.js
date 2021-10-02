import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom'

const ViewTickets = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    return (
        <>
            <div class="site-blocks-cover inner-page-cover overlay"
                style={{ backgroundImage: 'url(/images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }}
                data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
                            <div class="row justify-content-center">
                                <div class="col-md-8 text-center">
                                    <h1>View Tickets</h1>
                                    <p data-aos="fade-up" data-aos-delay="100">All Tickets View Over Here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-block d-md-flex listing-horizontal">
                                <NavLink to="/details" class="img d-block"
                                    style={{ backgroundImage: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)' }}>
                                    <span class="category">Restaurants</span>
                                </NavLink>
                                <div class="lh-content">
                                    <h3><a href="#">Jones Grill &amp; Restaurants</a></h3>
                                    <p>Don St, Brooklyn, New York</p>
                                    <p>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-secondary"></span>
                                        <span>(492 Reviews)</span>
                                    </p>
                                </div>
                                <div><span class="statusButton">Pending</span></div>
                            </div>
                            <div class="d-block d-md-flex listing-horizontal">
                                <a href="#" class="img d-block"
                                    style={{ backgroundImage: 'url(/images/ximg_1.jpg.pagespeed.ic.1JqK4ln2vg.jpg)' }} >
                                    <span class="category">Hotels</span>
                                </a>
                                <div class="lh-content">

                                    <h3><a href="#">Luxe Hotel</a></h3>
                                    <p>West Orange, New York</p>
                                    <p>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-secondary"></span>
                                        <span>(492 Reviews)</span>
                                    </p>
                                </div>
                                <div><span class="statusButton">Pending</span></div>
                            </div>
                            <div class="d-block d-md-flex listing-horizontal">
                                <a href="#" class="img d-block"
                                    style={{ backgroundImage: 'url(/images/ximg_3.jpg.pagespeed.ic.2Xwi5rG8fo.jpg)' }}>
                                    <span class="category">Events</span>
                                </a>
                                <div class="lh-content">

                                    <h3><a href="#">Live Band</a></h3>
                                    <p>Don St, Brooklyn, New York</p>
                                    <p>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-secondary"></span>
                                        <span>(22 Reviews)</span>
                                    </p>
                                </div>
                                <div><span class="statusButton">Pending</span></div>
                            </div>
                            <div class="d-block d-md-flex listing-horizontal">
                                <a href="#" class="img d-block"
                                    style={{ backgroundImage: 'url(/images/ximg_4.jpg.pagespeed.ic.Xwk9OG0HJQ.jpg)' }}>
                                    <span class="category">Others</span>
                                </a>
                                <div class="lh-content">

                                    <h3><a href="#">Gourmett Coffees</a></h3>
                                    <p>Don St, Brooklyn, New York</p>
                                    <p>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-secondary"></span>
                                        <span>(79 Reviews)</span>
                                    </p>
                                </div>
                                <div><span class="statusButton">Pending</span></div>
                            </div>
                            <div class="d-block d-md-flex listing-horizontal">
                                <a href="#" class="img d-block"
                                    style={{ backgroundImage: 'url(/images/ximg_5.jpg.pagespeed.ic.CE7y7zGmo6.jpg)' }}>
                                    <span class="category">Spa</span>
                                </a>
                                <div class="lh-content">

                                    <h3><a href="#">La Italia Spa</a></h3>
                                    <p>Italy, Europe</p>
                                    <p>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-secondary"></span>
                                        <span>(48 Reviews)</span>
                                    </p>
                                </div>
                                <div><span class="statusButton">Pending</span></div>
                            </div>
                            <div class="d-block d-md-flex listing-horizontal">
                                <a href="#" class="img d-block"
                                    style={{ backgroundImage: 'url(/images/ximg_6.jpg.pagespeed.ic.cOZc6e0Yb7.jpg)' }}>
                                    <span class="category">Stores</span>
                                </a>
                                <div class="lh-content">

                                    <h3><a href="#">Super Market Malls</a></h3>
                                    <p>Don St, Brooklyn, New York</p>
                                    <p>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-secondary"></span>
                                        <span>(433 Reviews)</span>
                                    </p>
                                </div>
                                <div><span class="statusButton">Pending</span></div>
                            </div>
                            <div class="col-12 mt-5 text-center">
                                <div class="custom-pagination">
                                    <span>1</span>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <span class="more-page">...</span>
                                    <a href="#">10</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewTickets;