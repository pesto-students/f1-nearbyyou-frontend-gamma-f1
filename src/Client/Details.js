import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom'
import ShopList from '../Common_Pages/ShopList';

const Details = () => {

    //State Manage
    
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
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    return (
        <>
            <div class="site-blocks-cover inner-page-cover overlay"
                style={{ backgroundImage: 'url(/images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }} data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
                            <div class="row justify-content-center">
                                <div class="col-md-8 text-center">
                                    <h1>Jones Grill &amp; Restaurants</h1>
                                    <p class="mb-0">Atlanta Shopping, Althan, Surat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="">
                                <p>
                                    <img src="/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg" alt="Image" class="img-fluid mb-4" />
                                </p>

                                {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <h3>Even the all-powerful</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                    unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                                    decided to leave for the far World of Grammar.</p>
                                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                                    Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her
                                    seven versalia, put her initial into the belt and made herself on the way.</p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the
                                    skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
                                    her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she
                                    continued her way.</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <a href="#" class="btn btn-primary btn-md text-white">Contact Us</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div class="col-lg-3 ml-auto" style={{ paddingRight: '0' }}>
                            <div class="mb-4">
                                <h3 class="h5 text-black mb-2" style={{ fontSize: '35px' }}>
                                    <NavLink to="/"><i class="fa fa-whatsapp cursor-pointer" style={{ marginRight: '50px' }} title='Contact US'></i> </NavLink> <NavLink to="/app/bookSlot"><i class="fa fa-ticket cursor-pointer" title="Book Slot"></i></NavLink>
                                </h3>
                            </div>
                            {/* <div class="mb-4">
                                <h3 class="h5 text-black mb-2">Shop Name</h3>
                                <div class="form-group">
                                    <p>Jones Grill & Restaurants</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h3 class="h5 text-black mb-2">Address</h3>
                                <div class="form-group">
                                    <p>Atlanta Shopping, Althan, Surat, India</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h3 class="h5 text-black mb-2">Timing</h3>
                                <div class="form-group">
                                    <p>9AM - 9PM ( All Days )</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h3 class="h5 text-black mb-2">Contact</h3>
                                <div class="form-group">
                                    <p><i className="fa fa-phone"> +91 7567652068</i></p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h3 class="h5 text-black mb-2">Description</h3>
                                <div class="form-group">
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div> */}

                            <p class="mb-0 font-weight-bold">Shop Name</p>
                            <p class="mb-4">Jones Grill & Restaurants</p>
                            <p class="mb-0 font-weight-bold">Address</p>
                            <p class="mb-4">Atlanta Shopping, Althan, Surat, India</p>
                            <p class="mb-0 font-weight-bold">Timing</p>
                            <p class="mb-4">9AM - 9PM ( All Days )</p>
                            <p class="mb-0 font-weight-bold">Contact</p>
                            <p class="mb-4">+91 7567652068</p>
                            <p class="mb-0 font-weight-bold">Description</p>
                            <p class="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                            {/* <div classe="mb-4">
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
                         */}
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-lg-8 border-bottom mb-5 pb-5">
                            <p>
                                <h2 class="mb-5 text-primary">Services</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false"
                                                aria-controls="collapse-1" class="accordion-item h5 d-block mb-0">How to list my
                                                item?</a>
                                            <div class="collapse" id="collapse-1">
                                                <div class="pt-2">
                                                    <p class="mb-0 pt-2">
                                                        <ul class="ul-check list-unstyled success">
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div class="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false"
                                                aria-controls="collapse-4" class="accordion-item h5 d-block mb-0">Is this available
                                                in my country?</a>
                                            <div class="collapse" id="collapse-4">
                                                <div class="pt-2">
                                                    <p class="mb-0 pt-2">
                                                        <ul class="ul-check list-unstyled success">
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false"
                                                aria-controls="collapse-2" class="accordion-item h5 d-block mb-0">Is it free?</a>
                                            <div class="collapse" id="collapse-2">
                                                <div class="pt-2">
                                                    <p class="mb-0 pt-2">
                                                        <ul class="ul-check list-unstyled success">
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div class="border p-3 rounded mb-2">
                                            <a data-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false"
                                                aria-controls="collapse-3" class="accordion-item h5 d-block mb-0">How the system
                                                works?</a>
                                            <div class="collapse" id="collapse-3">
                                                <div class="pt-2">
                                                    <p class="mb-0 pt-2">
                                                        <ul class="ul-check list-unstyled success">
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                            <li>Adipisci dolore reprehenderit</li>
                                                            <li>Accusamus dicta laborum</li>
                                                            <li>Delectus sed labore</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <div class="border p-3 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false"
                                            aria-controls="collapse-1" class="accordion-item h5 d-block mb-0">How to list my
                                            item?</a>
                                        <div class="collapse" id="collapse-1">
                                            <div class="pt-2">
                                                <p class="mb-0 pt-2">
                                                    <ul class="ul-check list-unstyled success">
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                    </ul>
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
                                                <p class="mb-0 pt-2">
                                                    <ul class="ul-check list-unstyled success">
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border p-3 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false"
                                            aria-controls="collapse-2" class="accordion-item h5 d-block mb-0">Is it free?</a>
                                        <div class="collapse" id="collapse-2">
                                            <div class="pt-2">
                                                <p class="mb-0 pt-2">
                                                    <ul class="ul-check list-unstyled success">
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border p-3 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false"
                                            aria-controls="collapse-3" class="accordion-item h5 d-block mb-0">How the system
                                            works?</a>
                                        <div class="collapse" id="collapse-3">
                                            <div class="pt-2">
                                                <p class="mb-0 pt-2">
                                                    <ul class="ul-check list-unstyled success">
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                        <li>Adipisci dolore reprehenderit</li>
                                                        <li>Accusamus dicta laborum</li>
                                                        <li>Delectus sed labore</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                               */}
                            </p>
                        </div>
                        <div class="col-lg-3">
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-lg-8">
                            <h2 class="mb-5 text-primary">More Listings</h2>
                            <ShopList data={shopList} />
                        </div>
                        <div class="col-lg-3">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Details;