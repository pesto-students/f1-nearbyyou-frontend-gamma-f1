import React, { useState, useEffect } from 'react';
import CategoryList from '../Common_Pages/CategoryList';
import { useSelector, useDispatch } from 'react-redux';
import { searchAPI, searchStatus, categoryAPI, categoryStatus } from '../Redux/Client/Listing/ListingSlice';

const Home = () => {

    //object
    const dispatch = useDispatch();

    //get data from store
    const { searchResult, isSearchStatus, categoryResult, isCategoryStatus } = useSelector(state => state.listing);

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
    const [searchForm, setSearchForm] = useState({
        freeText: '',
        pincode: '',
        category: ''
    })

    //Useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        dispatch(searchStatus(false));
        dispatch(categoryStatus(false));
        dispatch(categoryAPI({ type: "popular" }));
    }, [])

    useEffect(() => {
        if (isSearchStatus) {
            setSearchForm({
                freeText: '',
                pincode: '',
                category: ''
            })
            dispatch(searchStatus(false));
        }
    }, [isSearchStatus])

    useEffect(() => {
        if (isCategoryStatus) {
            dispatch(categoryStatus(false));
        }
    }, [isCategoryStatus])

    //Function

    //Search Handle Chnage
    const searchHandleChange = (e) => {
        const { name, value } = e.target;

        setSearchForm({
            ...searchForm,
            [name]: value
        })
    }

    //Click On Search
    const searchEvent = async () => {
        dispatch(searchAPI({ freeText: searchForm.freeText, pincode: searchForm.pincode, category: searchForm.category }))
    }

    return (
        <>
            <div class="site-blocks-cover overlay" style={{ backgroundImage: 'url(images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }}
                data-aos="fade" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-md-10">
                            <div class="row justify-content-center mb-4">
                                <div class="col-md-10 text-center">
                                    <h1 data-aos="fade-up">Find Nearby <span class="typed-words"></span></h1>
                                    <p data-aos="fade-up" class=" w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Porro provident corporis consequuntur et totam.</p>
                                </div>
                            </div>
                            <div class="form-search-wrap p-2" data-aos="fade-up" data-aos-delay="200">
                                <form>
                                    <div class="row align-items-center">
                                        <div class="col-lg-12 col-xl-4 no-sm-border border-right">
                                            <input type="text" name="freeText" class="form-control" placeholder="What are you looking for?" value={searchForm.freeText} onChange={searchHandleChange} />
                                        </div>
                                        <div class="col-lg-12 col-xl-3 no-sm-border border-right">
                                            <div class="wrap-icon">
                                                <span class="icon icon-room"></span>
                                                <input type="number" name="pincode" class="form-control" value={searchForm.pincode} placeholder="Pincode" onChange={searchHandleChange} />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-xl-3">
                                            <div class="select-wrap">
                                                <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                                                <select class="form-control" name="category" value={searchForm.category} onChange={searchHandleChange}>
                                                    <option value="0">All Categories</option>
                                                    <option value="1">Hotels</option>
                                                    <option value="2">Restaurant</option>
                                                    <option value="3">Eat &amp; Drink</option>
                                                    <option value="4">Events</option>
                                                    <option value="5">Fitness</option>
                                                    <option value="6">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-xl-2 ml-auto text-right">
                                            <input type="button" class="btn text-white btn-primary" value="Search" onClick={searchEvent} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="site-section" data-aos="fade">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-7 text-center border-primary">
                            <h2 class="font-weight-light text-primary">Most Visited Categorys</h2>
                            <p class="color-black-opacity-5">Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4 mb-lg-4 col-lg-4">
                            <div class="listing-item">
                                <div class="listing-image">
                                    <img src="images/ximg_1.jpg.pagespeed.ic.1JqK4ln2vg.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                </div>
                                <div class="listing-item-content">
                                    <a href="listings-single.html" class="bookmark" data-toggle="tooltip" data-placement="left"
                                        title="Bookmark"><span class="icon-heart"></span></a>
                                    <a class="px-3 mb-3 category" href="#">Hotels</a>
                                    <h2 class="mb-1"><a href="listings-single.html">Luxe Hotel</a></h2>
                                    <span class="address">West Orange, New York</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 mb-lg-4 col-lg-4">
                            <div class="listing-item">
                                <div class="listing-image">
                                    <img src="images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                </div>
                                <div class="listing-item-content">
                                    <a href="listings-single.html" class="bookmark"><span class="icon-heart"></span></a>
                                    <a class="px-3 mb-3 category" href="#">Restaurants</a>
                                    <h2 class="mb-1"><a href="listings-single.html">Jones Grill &amp; Restaurants</a></h2>
                                    <span class="address">Brooklyn, New York</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 mb-lg-4 col-lg-4">
                            <div class="listing-item">
                                <div class="listing-image">
                                    <img src="images/ximg_3.jpg.pagespeed.ic.2Xwi5rG8fo.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                </div>
                                <div class="listing-item-content">
                                    <a href="listings-single.html" class="bookmark"><span class="icon-heart"></span></a>
                                    <a class="px-3 mb-3 category" href="#">Events</a>
                                    <h2 class="mb-1"><a href="listings-single.html">Live Band</a></h2>
                                    <span class="address">West Orange, New York</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 mb-lg-4 col-lg-4">
                            <div class="listing-item">
                                <div class="listing-image">
                                    <img src="images/ximg_4.jpg.pagespeed.ic.Xwk9OG0HJQ.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                </div>
                                <div class="listing-item-content">
                                    <a href="listings-single.html" class="bookmark" data-toggle="tooltip" data-placement="left"
                                        title="Bookmark"><span class="icon-heart"></span></a>
                                    <a class="px-3 mb-3 category" href="#">Others</a>
                                    <h2 class="mb-1"><a href="listings-single.html">Gourmet Coffees</a></h2>
                                    <span class="address">New York City</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 mb-lg-4 col-lg-4">
                            <div class="listing-item">
                                <div class="listing-image">
                                    <img src="images/ximg_5.jpg.pagespeed.ic.CE7y7zGmo6.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                </div>
                                <div class="listing-item-content">
                                    <a href="listings-single.html" class="bookmark"><span class="icon-heart"></span></a>
                                    <a class="px-3 mb-3 category" href="#">Spa</a>
                                    <h2 class="mb-1"><a href="listings-single.html">La Italia Spa</a></h2>
                                    <span class="address">Italy</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 mb-lg-4 col-lg-4">
                            <div class="listing-item">
                                <div class="listing-image">
                                    <img src="images/ximg_6.jpg.pagespeed.ic.cOZc6e0Yb7.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                </div>
                                <div class="listing-item-content">
                                    <a href="listings-single.html" class="bookmark"><span class="icon-heart"></span></a>
                                    <a class="px-3 mb-3 category" href="#">Stores</a>
                                    <h2 class="mb-1"><a href="listings-single.html">Super Market Mall</a></h2>
                                    <span class="address">West Orange, New York</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <CategoryList data={categoryList} type='popular' />


            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <img src="images/ximg_1.jpg.pagespeed.ic.1JqK4ln2vg.jpg"
                                alt="Free Website Template by Free-Template.co" class="img-fluid rounded" />
                        </div>
                        <div class="col-md-5 ml-auto">
                            <h2 class="text-primary mb-3">Why Us</h2>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <div class="border p-3 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false"
                                            aria-controls="collapse-1" class="accordion-item h5 d-block mb-0">How to list my
                                            item?</a>
                                        <div class="collapse" id="collapse-1">
                                            <div class="pt-2">
                                                <p class="mb-0">Far far away, behind the word mountains, far from the countries
                                                    Vokalia and Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border p-3 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false"
                                            aria-controls="collapse-4" class="accordion-item h5 d-block mb-0">Is this available
                                            in my country?</a>
                                        <div class="collapse" id="collapse-4">
                                            <div class="pt-2">
                                                <p class="mb-0">A small river named Duden flows by their place and supplies it
                                                    with the necessary regelialia. It is a paradisematic country, in which
                                                    roasted parts of sentences fly into your mouth.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border p-3 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false"
                                            aria-controls="collapse-2" class="accordion-item h5 d-block mb-0">Is it free?</a>
                                        <div class="collapse" id="collapse-2">
                                            <div class="pt-2">
                                                <p class="mb-0">Even the all-powerful Pointing has no control about the blind
                                                    texts it is an almost unorthographic life One day however a small line of
                                                    blind text by the name of Lorem Ipsum decided to leave for the far World of
                                                    Grammar.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border p-3 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false"
                                            aria-controls="collapse-3" class="accordion-item h5 d-block mb-0">How the system
                                            works?</a>
                                        <div class="collapse" id="collapse-3">
                                            <div class="pt-2">
                                                <p class="mb-0">The Big Oxmox advised her not to do so, because there were
                                                    thousands of bad Commas, wild Question Marks and devious Semikoli, but the
                                                    Little Blind Text didn’t listen. She packed her seven versalia, put her
                                                    initial into the belt and made herself on the way.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-7 text-center border-primary">
                            <h2 class="font-weight-light text-primary">How It Works</h2>
                            <p class="color-black-opacity-5">Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
                            <div class="how-it-work-step">
                                <div class="img-wrap">
                                    <img src="images/step-1.svg" alt="Free website template by Free-Template.co"
                                        class="img-fluid" />
                                </div>
                                <span class="number">1</span>
                                <h3>Decide What To Do</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
                            <div class="how-it-work-step">
                                <div class="img-wrap">
                                    <img src="images/step-2.svg" alt="Free website template by Free-Template.co"
                                        class="img-fluid" />
                                </div>
                                <span class="number">2</span>
                                <h3>Find What You Want</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
                            <div class="how-it-work-step">
                                <div class="img-wrap">
                                    <img src="images/step-3.svg" alt="Free website template by Free-Template.co"
                                        class="img-fluid" />
                                </div>
                                <span class="number">3</span>
                                <h3>Explore Amazing Places</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="site-section bg-light">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-7 text-center border-primary">
                            <h2 class="font-weight-light text-primary">Satisfied Customers</h2>
                        </div>
                    </div>
                    <div class="slide-one-item home-slider owl-carousel">
                        <div>
                            <div class="testimonial">
                                <figure class="mb-4">
                                    <img src="images/xperson_3_sq.jpg.pagespeed.ic.YTHh95EYiA.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid mb-3" />
                                    <p>Willie Smith</p>
                                </figure>
                                <blockquote>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                                        the coast of the Semantics, a large language ocean.&rdquo;</p>
                                </blockquote>
                            </div>
                        </div>
                        <div>
                            <div class="testimonial">
                                <figure class="mb-4">
                                    <img src="images/xperson_2_sq.jpg.pagespeed.ic.RzMJGytjH9.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid mb-3" />
                                    <p>Robert Jones</p>
                                </figure>
                                <blockquote>
                                    <p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                                        your mouth.&rdquo;</p>
                                </blockquote>
                            </div>
                        </div>
                        <div>
                            <div class="testimonial">
                                <figure class="mb-4">
                                    <img src="images/xperson_4_sq.jpg.pagespeed.ic.ESafmiLLKV.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid mb-3" />
                                    <p>Peter Richmond</p>
                                </figure>
                                <blockquote>
                                    <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                        almost unorthographic life One day however a small line of blind text by the name of
                                        Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                                </blockquote>
                            </div>
                        </div>
                        <div>
                            <div class="testimonial">
                                <figure class="mb-4">
                                    <img src="images/xperson_5_sq.jpg.pagespeed.ic.YTHh95EYiA.jpg"
                                        alt="Free Website Template by Free-Template.co" class="img-fluid mb-3" />
                                    <p>Bruce Rogers</p>
                                </figure>
                                <blockquote>
                                    <p>&ldquo;The Big Oxmox advised her not to do so, because there were thousands of bad
                                        Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t
                                        listen. She packed her seven versalia, put her initial into the belt and made herself on
                                        the way.&rdquo;</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             */}
            {/* <div class="site-section">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-7 text-center border-primary">
                            <h2 class="font-weight-light text-primary">Tips &amp; Articles</h2>
                            <p class="color-black-opacity-5">See Our Daily tips &amp; articles</p>
                        </div>
                    </div>
                    <div class="row mb-3 align-items-stretch">
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div class="h-entry">
                                <img src="images/ximg_1.jpg.pagespeed.ic.1JqK4ln2vg.jpg"
                                    alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                <div class="h-entry-inner">
                                    <h2 class="font-size-regular"><a href="#">Etiquette tips for travellers</a></h2>
                                    <div class="meta mb-4">by <a href="#">Jeff Sheldon</a> <span class="mx-2">&bullet; </span>
                                        May 5th, 2019</div>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div class="h-entry">
                                <img src="images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg"
                                    alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                <div class="h-entry-inner">
                                    <h2 class="font-size-regular"><a href="#">Etiquette tips for travellers</a></h2>
                                    <div class="meta mb-4">by <a href="#">Jeff Sheldon</a> <span class="mx-2">&bullet; </span>
                                        May 5th, 2019</div>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div class="h-entry">
                                <img src="images/ximg_3.jpg.pagespeed.ic.2Xwi5rG8fo.jpg"
                                    alt="Free Website Template by Free-Template.co" class="img-fluid" />
                                <div class="h-entry-inner">
                                    <h2 class="font-size-regular"><a href="#">Etiquette tips for travellers</a></h2>
                                    <div class="meta mb-4">by <a href="#">Jeff Sheldon</a> <span class="mx-2">&bullet; </span>
                                        May 5th, 2019</div>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         */}
        </>
    )
}
export default Home;