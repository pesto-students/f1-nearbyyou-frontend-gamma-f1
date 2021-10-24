import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { ticketAPI, ticketStatus, customerDetailsAPI } from '../Redux/Client/Listing/ListingSlice';

const BookSlot = () => {

    //object
    const dispatch = useDispatch();
    const history = useHistory();
    const { shopID } = useParams();

    //get data from store
    const { isTicketStatus, customerDetails } = useSelector(state => state.listing);

    // console.log("customerDetails-", customerDetails);

    //State Manage
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        email: '',
        contact: '',
        door_number: '',
        street: '',
        area: '',
        city_town: '',
        state: '',
        pincode: '',
        description: '',
        date: '',
        time: '',
        customerId: ''
    })

    //useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(ticketStatus(false));
        let userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));

        if (userData) {
            dispatch(customerDetailsAPI({ userID: userData.id }))
        } else {
            history.push('/');
        }

        // setForm({
        //     ...form,
        //     customerId: userData.id,
        //     fname: userData?.user_name?.split(" ")[0],
        //     lname: userData?.user_name?.split(" ")[1],
        //     email: userData?.email,
        //     contact: userData?.contact_number,
        //     door_number: userData?.custDetails[0]?.door_number,
        //     street: userData?.custDetails[0]?.street,
        //     area: userData?.custDetails[0]?.area,
        //     city_town: userData?.custDetails[0]?.city_town,
        //     state: userData?.custDetails[0]?.state,
        //     pincode: userData?.custDetails[0]?.pincode,
        // })

        // console.log("userData :- ", userData, userData.id);
        // if (userData) {
        //     dispatch(customerDetailsAPI({ userID: userData.id }))
        // } else {
        //     history.push('/');
        // }
    }, [])

    useEffect(() => {
        if (customerDetails) {
            if (customerDetails?.length > 0) {
                let data = customerDetails[0];
                setForm({
                    ...form,
                    customerId: data.id,
                    fname: data?.user_name?.split(" ")[0],
                    lname: data?.user_name?.split(" ")[1],
                    email: data?.email,
                    contact: data?.contact_number,
                    door_number: data?.Details[0]?.door_number,
                    street: data?.Details[0]?.street,
                    area: data?.Details[0]?.area,
                    city_town: data?.Details[0]?.city_town,
                    state: data?.Details[0]?.state,
                    pincode: data?.Details[0]?.pincode,
                })
            }
        }
    }, [customerDetails])

    useEffect(() => {
        if (isTicketStatus) {
            setForm({
                fname: '',
                lname: '',
                email: '',
                time: '',
                contact: '',
                door_number: '',
                street: '',
                area: '',
                city_town: '',
                state: '',
                pincode: '',
                description: '',
                date: '',
                time: ''
            })
            history.push('/viewTickets')
        }
    }, [isTicketStatus])

    //Functions

    //handleChnage
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    //Onsubmit
    const onSubmit = (e) => {
        e.preventDefault();

        console.log("form :- ", form);

        dispatch(ticketAPI({ description: form.description, date: form.date, time: form.time, customerId: form.customerId, ticket_status: 'pending', shop_ticket: shopID }))
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
                                    <h1>Book Slot For</h1>
                                    <p data-aos="fade-up" data-aos-delay="100">Jones Grill &amp; Restaurants</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 mb-5" data-aos="fade">
                            <form method="post" onSubmit={onSubmit} class="p-5 bg-white" style={{ marginTop: '-150px' }}>
                                {/* <div class="row form-group">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <label class="text-black" for="fname">First Name</label>
                                        <input type="text" id="fname" class="form-control" value={form.fname} name="fname" onChange={handleChange} required readOnly disabled />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black" for="lname">Last Name</label>
                                        <input type="text" id="lname" class="form-control" value={form.lname} name="lname" onChange={handleChange} required readOnly disabled />
                                    </div>
                                </div> */}
                                {/* <div class="row form-group">
                                    <div class="col-md-6">
                                        <label class="text-black" for="email">Email</label>
                                        <input type="email" id="email" class="form-control" value={form.email} name="email" onChange={handleChange} required readOnly disabled />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black" for="contact">Contact No</label>
                                        <input type="text" id="contact" class="form-control" value={form.contact} name="contact" onChange={handleChange} required readOnly disabled />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="address">Address</label>
                                        <textarea name="address" className="form-control" onChange={handleChange} required readOnly disabled>
                                            {form.address}
                                        </textarea>
                                    </div>
                                </div> */}
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="description">Service Description</label>
                                        <textarea name="description" className="form-control" onChange={handleChange} required>
                                            {form.description}
                                        </textarea>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-6">
                                        <label class="text-black" for="email">Service Date</label>
                                        <input type="date" min={'2021-10-11'} id="date" class="form-control" value={form.date} name="date" onChange={handleChange} required />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black" for="email">Service Time</label>
                                        <input type="time" id="time" class="form-control" value={form.time} name="time" onChange={handleChange} required />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <input type="submit" value="Book Slot Request" class="btn btn-primary btn-md text-white" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5" data-aos="fade" data-aos-delay="100">
                            <div class="p-4 mb-3 bg-white">
                                <p class="mb-0 font-weight-bold">Name</p>
                                <p class="mb-4">{form.fname} {form.lname}</p>
                                <p class="mb-0 font-weight-bold">Address</p>
                                <p class="mb-4">{form.door_number}, {form.street}, {form.area}, {form.city_town}, {form.state}, {form.pincode}</p>
                                <p class="mb-0 font-weight-bold">Phone</p>
                                <p class="mb-4"><a href="#">{form.contact}</a></p>
                                <p class="mb-0 font-weight-bold">Email Address</p>
                                <p class="mb-0"><a href="#"><span class="__cf_email__"
                                    data-cfemail="41382e3433242c20282d01252e2c20282f6f222e2c">[{form.email}]</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BookSlot;