import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import ShopList from '../Common_Pages/ShopList';
import CategoryList from '../Common_Pages/CategoryList';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from "lodash";
import { searchAPI, searchStatus } from '../Redux/Client/Listing/ListingSlice';

const Listings = () => {

    //object
    const dispatch = useDispatch();

    //get data from store
    const { searchResult, isSearchStatus } = useSelector(state => state.listing);

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
    const [searchForm, setSearchForm] = useState({
        freeText: '',
        pincode: '',
        category: ''
    });
    const [debounceState, setDebounceState] = useState({
        freeText: '',
        pincode: '',
        category: ''
    });

    //Useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        dispatch(searchStatus(false));
    }, [])

    useEffect(() => {
        if (isSearchStatus) {
            dispatch(searchStatus(false));
        }
    }, [isSearchStatus])

    useEffect(() => {
        if (debounceState.pincode != '' || debounceState.category != '' || debounceState.freeText != '') {
            dispatch(searchAPI({ freeText: debounceState.freeText, pincode: debounceState.pincode, category: debounceState.category }))
        }
    }, [debounceState.pincode, debounceState.category, debounceState.freeText])

    //Functions

    //Search Handle Chnage
    const searchHandleChange = (e) => {
        const { name, value } = e.target;

        setSearchForm({
            ...searchForm,
            [name]: value
        })

        debounceSearch(name, value);
    }

    //Debounce Search
    const debounceSearch = useCallback(
        debounce((name, value) => {
            setDebounceState({
                ...debounceState,
                [name]: value
            })
            console.log("Value :- ", value);
        }, 500), []
    );

    console.log("Search Data :- ", searchForm);

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
                                <form>
                                    <div class="form-group">
                                        <input type="text" name="freeText" class="form-control" placeholder="What are you looking for?" value={searchForm.freeText} onChange={searchHandleChange} />
                                    </div>
                                    <div class="form-group">
                                        <div class="select-wrap">
                                            <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                                            <select class="form-control" name="category" value={searchForm.category} onChange={searchHandleChange}>
                                                <option value="">All Categories</option>
                                                <option value="1">Appartment</option>
                                                <option value="2">Restaurant</option>
                                                <option value="3">Eat &amp; Drink</option>
                                                <option value="4">Events</option>
                                                <option value="5">Fitness</option>
                                                <option value="6">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="wrap-icon">
                                            <span class="icon icon-room"></span>
                                            <input type="number" name="pincode" class="form-control" value={searchForm.pincode} placeholder="Pincode" onChange={searchHandleChange} />
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

            {/* <CategoryList data={categoryList} type='popular' /> */}

        </>
    )
}
export default Listings;