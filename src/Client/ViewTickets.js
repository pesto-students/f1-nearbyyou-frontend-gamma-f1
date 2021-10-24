import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { feedBackSendStatus, sendFeedBackAPI, viewTicketAPI, viewTicketStatus, holdingRequestStausAPI, holdingReqStatus } from '../Redux/Client/Listing/ListingSlice';
import { Form } from 'react-bootstrap';
import NoDataFound from '../Common_Pages/NoDataFound';
import ReactStars from "react-rating-stars-component";
import { Modal, Button } from 'react-bootstrap';
import { ErrorAlert, SuccessAlert } from '../Redux/SnackBar/SnackbarSlice';

const ViewTickets = () => {

    //object
    const dispatch = useDispatch();

    //get data from store
    const { isViewTicketStatus, isFeedBackSendStatus, viewTicketData, isHoldingReqStatus } = useSelector(state => state.listing);

    console.log("viewTicketData :- ", viewTicketData);

    //State Manage
    const [viewTicket, setViewTicket] = useState([]);
    const [statusDrop, setStatusDrop] = useState('');
    const [callAPI, setCallAPI] = useState(false);
    const [show, setShow] = useState(false);
    const [feedBack, setFeedBack] = useState('');
    const [rating, setRating] = useState('');
    const [shopId, setShopId] = useState('');

    //useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(holdingReqStatus(false));
        dispatch(feedBackSendStatus(false));
    }, [])

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
        dispatch(viewTicketStatus(false));
        console.log("userData :- ", userData, userData.id);
        dispatch(viewTicketAPI({ custID: userData?._id, status: statusDrop }))
    }, [statusDrop, callAPI])

    useEffect(() => {
        setViewTicket(viewTicketData)
    }, [viewTicketData])

    useEffect(() => {
        if (isHoldingReqStatus) {
            dispatch(holdingReqStatus(false));
            setCallAPI(!callAPI);
        }
    }, [isHoldingReqStatus])

    useEffect(() => {
        handleClose();
        dispatch(feedBackSendStatus(false));
    }, [isFeedBackSendStatus])

    //Functions

    //Click on Accept Request
    const onAcceptClick = (id) => {
        dispatch(holdingRequestStausAPI({ id: id, type: 'accept' }))
    }

    //Click on Reject Request
    const onRejectClick = (id) => {
        dispatch(holdingRequestStausAPI({ id: id, type: 'reject' }))
    }

    //Give Rating
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    //Open Modal
    const handleShow = (shopId) => {
        setShopId(shopId);
        setShow(true);
    };

    //Close Modal
    const handleClose = () => {
        setShow(false)
    };

    //Handle Change Event
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedBack(value);
    }

    //Submit the Feedback
    const handleSubmit = () => {

        if (feedBack == '' || rating == 0) {
            if (feedBack == '') {
                dispatch(ErrorAlert('Please Add FeedBack !!'));
            } else {
                dispatch(ErrorAlert('Please Add Star Rating !!'));
            }
        } else {
            let userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));

            console.log("rating  =", rating);

            dispatch(sendFeedBackAPI({
                shopID: shopId,
                userId: userData?._id,
                feedBack: feedBack,
                rating: rating
            }));
        }

    }

    console.log("viewTicket-", viewTicket);

    return (
        <>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Close Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You can close the ticket after geting the service

                    <div className="feedBackForm">
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="text-black" for="email">Enter Feedback</label>
                                <textarea rows={4} id="feedBack" class="form-control" name="feedBack" required onChange={handleChange}>{feedBack}</textarea>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="text-black" for="email">Rating</label>
                                <ReactStars
                                    value={rating}
                                    count={5}
                                    onChange={ratingChanged}
                                    size={30}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer class="feedBackFooter">
                    <div className="feedBackButton">
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                    <Button variant="primary" onClick={handleSubmit}>
                        Close Ticket
                    </Button>
                </Modal.Footer>
            </Modal>
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
            <div class="site-section bg-light" style={{ paddingTop: '30px' }}>
                <div class="container">
                    <div className="row mb-4 justify-content-end">
                        <div className="col-md-3">
                            <select className="form-control" value={statusDrop} onChange={(e) => setStatusDrop(e.target.value)}>
                                <option value="">All</option>
                                <option value="pending">Pending</option>
                                <option value="holding">Holding</option>
                                <option value="in_progress">In Progress</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">

                            {console.log("viewTicket?.length: - ", viewTicket?.length)}

                            {
                                viewTicket?.length > 0 ?
                                    // 1 == 0 ?
                                    <>
                                        {viewTicket?.length > 0 && viewTicket.map((item, index) => {

                                            var timeArr = item?.ticket_status == 'pending' ? item?.service_time?.split(":") : item?.hold_time?.split(":");
                                            var suffix = '';
                                            var hours = '';
                                            if (timeArr) {
                                                suffix = parseInt(timeArr[0]) >= 12 ? "PM" : "AM";
                                                hours = ((parseInt(timeArr[0]) + 11) % 12 + 1) + ":" + timeArr[1] + " " + suffix
                                            }

                                            return (
                                                <>
                                                    <div class="d-block d-md-flex listing-horizontal">
                                                        <NavLink to={`/category/${item?.categoryDetails[0]?.name}/shop/${item?.shopdeatils[0]?._id}`} class="img d-block"
                                                            style={{ backgroundImage: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)' }}>
                                                            <span class="category">{item?.categoryDetails[0]?.name}</span>
                                                        </NavLink>
                                                        <div class="lh-content">
                                                            <h3><a href="#">{item?.shopdeatils[0]?.shop_name}</a></h3>
                                                            <p>{item?.shopdeatils[0]?.shop_area}, {item?.shopdeatils[0]?.shop_street}, {item?.shopdeatils[0]?.shop_city_town}, {item?.shopdeatils[0]?.shop_state}</p>
                                                            <p><b>{item?.ticket_status == 'pending' ? item?.service_date?.split('T')[0] : item?.hold_date?.split('T')[0]}</b>,  <b>{hours}</b></p>
                                                            <div className="row">
                                                                <div className="col-md-4">
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
                                                                {
                                                                    (item?.ticket_status == 'holding') && (
                                                                        <div className="col-md-6">
                                                                            <div class="border p-3 rounded mb-2">
                                                                                <a data-toggle="collapse" href={`#collapse-hold${index}`} role="button" aria-expanded="false"
                                                                                    aria-controls={`collapse-hold${index}`} class="accordion-item h5 d-block mb-0">Vendor Holding Request</a>
                                                                                <div class="collapse" id={`collapse-hold${index}`}>
                                                                                    <div class="pt-2">
                                                                                        <p class="mb-0">
                                                                                            {/* {item?.hold_date} {item?.hold_time} */}
                                                                                            <b>18-10-2021 10:00 AM</b>
                                                                                        </p>
                                                                                        <p class="mb-0 bottom-lne text-align-center">
                                                                                            Reason
                                                                                        </p>
                                                                                        <p class="mb-0">
                                                                                            {/* {item?.hold_description} */}
                                                                                            Today it;s not possible we reshedusle your req please accept this request if possible
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="justify-content-evenly">
                                                                                <button class="accept-btn cursor-pointer" onClick={() => onAcceptClick(item?._id)} >Accept</button>
                                                                                <button class="reject-btn cursor-pointer" onClick={() => onRejectClick(item?._id)}>Reject</button>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }

                                                                {
                                                                    (item?.ticket_status == 'in_progress') && (
                                                                        <div className="col-md-6">
                                                                            <div className="justify-content-left" style={{ marginTop: '16px' }}>
                                                                                <button class="reject-btn cursor-pointer" onClick={() => handleShow(item?.shopdeatils[0]?._id)}>Close Ticket</button>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                        <div><span class="statusButton">{item?.ticket_status == 'in_progress' ? 'In Progress' : item?.ticket_status}</span></div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        <div class="col-12 mt-5 text-center">
                                            <div class="custom-pagination">
                                                <span>1</span>
                                                <a href="#">2</a>
                                                <a href="#">3</a>
                                                <span class="more-page">...</span>
                                                <a href="#">10</a>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <NoDataFound msg={"No Ticket Found Yet !!"} />
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewTickets;