import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { viewTicketAPI, viewTicketStatus } from '../Redux/Client/Listing/ListingSlice';
import { Form } from 'react-bootstrap';

const ViewTickets = () => {

    //object
    const dispatch = useDispatch();

    //get data from store
    const { isViewTicketStatus, viewTicketData } = useSelector(state => state.listing);

    console.log("viewTicketData :- ", viewTicketData);

    //State Manage
    const [viewTicket, setViewTicket] = useState([]);
    const [statusDrop, setStatusDrop] = useState('pending')

    //useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
        dispatch(viewTicketStatus(false));
        console.log("userData :- ", userData, userData.id);
        dispatch(viewTicketAPI({ custID: userData.id, status : statusDrop }))
    }, [statusDrop])

    useEffect(() => {
        setViewTicket(viewTicketData)
    }, [viewTicketData])

    console.log("viewTicket-", viewTicket);

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
            <div class="site-section bg-light" style={{paddingTop : '30px'}}>
                <div class="container">
                    <div className="row mb-4 justify-content-end">
                        <div className="col-md-3">
                            <select className="form-control" value={statusDrop} onChange={(e) => setStatusDrop(e.target.value)}>
                                <option value="">All</option>
                                <option value="pending">Pending</option>
                                {/* <option value="holding">Holding</option> */}
                                <option value="in_progress">In Progress</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">

                            {
                                viewTicket?.length > 0 && viewTicket.map((item, index) => {

                                    var timeArr = item.service_time.split(":");
                                    var suffix = parseInt(timeArr[0]) >= 12 ? "PM" : "AM";
                                    var hours = ((parseInt(timeArr[0]) + 11) % 12 + 1) + ":" + timeArr[1] + " " + suffix

                                    return (
                                        <div class="d-block d-md-flex listing-horizontal">
                                            <NavLink to="/details" class="img d-block"
                                                style={{ backgroundImage: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)' }}>
                                                <span class="category">Restaurants</span>
                                            </NavLink>
                                            <div class="lh-content">
                                                <h3><a href="#">Jones Grill &amp; Restaurants</a></h3>
                                                <p>Don St, Brooklyn, New York</p>
                                                <p><b>{item?.service_date?.split('T')[0]}</b>,  <b>{hours}</b></p>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div class="border p-3 rounded mb-2">
                                                            <a data-toggle="collapse" href={`#collapse-${index}`} role="button" aria-expanded="false"
                                                                aria-controls={`collapse-${index}`} class="accordion-item h5 d-block mb-0">Your Service Description</a>
                                                            <div class="collapse" id={`collapse-${index}`}>
                                                                <div class="pt-2">
                                                                    <p class="mb-0">{item.service_description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div><span class="statusButton">Pending</span></div>
                                        </div>
                                    )
                                })
                            }

                            {/* <div class="d-block d-md-flex listing-horizontal">
                                <NavLink to="/details" class="img d-block"
                                    style={{ backgroundImage: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)' }}>
                                    <span class="category">Restaurants</span>
                                </NavLink>
                                <div class="lh-content">
                                    <h3><a href="#">Jones Grill &amp; Restaurants</a></h3>
                                    <p>Don St, Brooklyn, New York</p>
                                    <p><b>2021-10-18</b>,  <b>10:00 PM</b></p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="border p-3 rounded mb-2">
                                                <a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false"
                                                    aria-controls="collapse-1" class="accordion-item h5 d-block mb-0">Your Service Description</a>
                                                <div class="collapse" id="collapse-1">
                                                    <div class="pt-2">
                                                        <p class="mb-0">Far far away, behind the word mountains, far from the countries
                                                            Vokalia and Consonantia, there live the blind texts. Separated they live in
                                                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                            </div> */}
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