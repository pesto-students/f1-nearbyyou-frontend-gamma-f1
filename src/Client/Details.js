import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ShopList from '../Common_Pages/ShopList';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { detailAPI, detailStatus } from '../Redux/Client/Listing/ListingSlice';
import NoDataFound from '../Common_Pages/NoDataFound';
import ReactStars from "react-rating-stars-component";
import Pegination from '../Common_Pages/Pegination';

const Details = () => {

    //object
    const dispatch = useDispatch();
    const history = useHistory();
    const { categoryName, categoryId, shopID } = useParams();

    console.log("Data Details :-", categoryName, categoryId, shopID);

    //get data from store
    const { detailResult, isDetailStatus } = useSelector(state => state.listing);

    console.log("detailResult: - ", detailResult);

    //State Manage
    const [activePage, setActivePage] = useState(1);
    const [avgRating, setAvgRating] = useState(0);
    const [details, setDetails] = useState('');
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
    }, [shopID])

    useEffect(() => {
        if (shopID) {
            console.log("shopID :- ", shopID);
            dispatch(detailAPI({ shopID: shopID }))
        }
    }, [shopID])

    useEffect(() => {
        if (detailResult?.length > 0) {
            setDetails(detailResult[0]);
        }
    }, [detailResult])

    console.log("details: - ", details);

    //Functions

    //Pegination Changr Function
    const handlePageChange = (data) => {
        console.log("Data :- ", data);
        // getDestinationData(data);
        setActivePage(data);
    }

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
                                    <h1>{details.shop_name}</h1>
                                    <p class="mb-0">{details.shop_door_number} {details.shop_street} {details.shop_city_town} {details.shop_state}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                {

                    details?.shop_name ?
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="">
                                        <p>
                                            <img src="/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg" alt="Image" class="img-fluid mb-4" />
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-3 ml-auto" style={{ paddingRight: '0' }}>
                                    <div class="mb-4">
                                        <h3 class="h5 text-black mb-2" style={{ fontSize: '35px' }}>
                                            {
                                                details?.shop_contact_number && (
                                                    <a href={`https://wa.me/+91${details?.shop_contact_number}/?text=`} target="_blank"><i class="fa fa-whatsapp cursor-pointer" style={{ marginRight: '50px' }} title='Contact US'></i> </a>
                                                )
                                            }
                                            <Link to={`/bookSlot/${shopID}`}><i class="fa fa-ticket cursor-pointer" title="Book Slot"></i></Link>
                                            {/* <Link to={`/app/bookSlot`}><i class="fa fa-ticket cursor-pointer" title="Book Slot"></i></Link> */}
                                        </h3>
                                    </div>

                                    <p class="mb-0 font-weight-bold">Shop Name</p>
                                    <p class="mb-4">{details.shop_name}</p>
                                    <p class="mb-0 font-weight-bold">Address</p>
                                    <p class="mb-4">{details.shop_door_number} {details.shop_street} {details.shop_city_town} {details.shop_state}</p>
                                    <p class="mb-0 font-weight-bold">Timing</p>
                                    <p class="mb-4">9AM - 9PM ( All Days )</p>
                                    <p class="mb-0 font-weight-bold">Contact</p>
                                    <p class="mb-4">{details.shop_contact_number}</p>
                                    <p class="mb-0 font-weight-bold">Description</p>
                                    <p class="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-lg-8 border-bottom mb-5 pb-5">
                                    <p>
                                        <h2 class="mb-5 text-primary">Reviews</h2>
                                        <div className="row">
                                            {
                                                details?.feedBacks?.map((i, k) => {
                                                    return (
                                                        <div className="col-md-12">
                                                            <div class="d-block d-md-flex listing-horizontal">
                                                                <div class="lh-content reviewView">
                                                                    <div className="row">
                                                                        <div className="col-md-8">
                                                                            <p>{i?.feedBack}</p>
                                                                        </div>
                                                                        <div className="col-md-4 justify-content-end">
                                                                            <p className="font-12">- {details?.userInfo[k]?.user_name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <p className="flex">
                                                                        <ReactStars
                                                                            value={i?.rating}
                                                                            count={5}
                                                                            size={30}
                                                                            activeColor="#ffd700"
                                                                            isHalf={true}
                                                                            emptyIcon={<i className="far fa-star"></i>}
                                                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                                            fullIcon={<i className="fa fa-star"></i>}
                                                                            classNames='pointerEventNone'
                                                                        // style={{PointerEvent:'none'}}
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <Pegination onChange={handlePageChange} totalItemsCount={details?.feedBacks?.length} activePage={activePage} />
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                </div>
                            </div>
                            <div className="row">
                                <ShopList />
                            </div>
                        </div>
                        : <NoDataFound msg={'Shop Detail Not Found !!'} />
                }
            </div>

        </>
    )
}
export default Details;