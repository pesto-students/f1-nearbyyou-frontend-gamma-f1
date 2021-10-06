import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShopList from '../Common_Pages/ShopList';
import CategoryList from '../Common_Pages/CategoryList';

const Listings = () => {

    //State Manage
    const [categoryList, setCategoryList] = useState([
        {
            image: 'flaticon-hotel',
            name: 'Hotels',
            count: '489'
        },
        {
            image: 'flaticon-microphone',
            name: 'Events',
            count: '482'
        },
        {
            image: 'flaticon-flower',
            name: 'Spa',
            count: '194'
        },
        {
            image: 'flaticon-restaurant',
            name: 'Stores',
            count: '1472'
        },
        {
            image: 'flaticon-cutlery',
            name: 'Restaurants',
            count: '439'
        },
        {
            image: 'flaticon-bike',
            name: 'Others',
            count: '692'
        },
    ])
    const [shopList, setShopList] = useState([
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        }
    ]);

    //Useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                                    <h1>Listings</h1>
                                    <p data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Cupiditate beatae quisquam perspiciatis adipisci ipsam quam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 mr-auto">
                            <div class="mb-5">
                                <h3 class="h5 text-black mb-3">Filters</h3>
                                <form action="#" method="post">
                                    <div class="form-group">
                                        <input type="text" placeholder="What are you looking for?" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <div class="select-wrap">
                                            <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                                            <select class="form-control" name="" id="">
                                                <option value="">All Categories</option>
                                                <option value="">Appartment</option>
                                                <option value="">Restaurant</option>
                                                <option value="">Eat &amp; Drink</option>
                                                <option value="">Events</option>
                                                <option value="">Fitness</option>
                                                <option value="">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="wrap-icon">
                                            <span class="icon icon-room"></span>
                                            <input type="text" placeholder="Pincode" class="form-control" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-8">
                            <ShopList data={shopList} />
                        </div>
                    </div>
                </div>
            </div>

            <CategoryList data={categoryList} type='popular' />

        </>
    )
}
export default Listings;