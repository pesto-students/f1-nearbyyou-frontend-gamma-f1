import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UpdateTicketStatusAPI } from '../Redux/Vendor/Home/HomeSlice';

import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { GetTicketsAPI, oneticketStatus } from '../Redux/Vendor/Home/HomeSlice';

const ViewTicket = () => {

  const dispatch = useDispatch();

  const { oneticketResults, isoneticketStatus } = useSelector(state => state.ticket);
  console.log("ticket results ->", oneticketResults)


  const ticket_details = oneticketResults.ticketdetails;
  const customer_address = oneticketResults.ticket_customer_details;
  // const customer_basic_details = customer_address;
  console.log("ticket details separate-->", ticket_details)
  console.log("customer address details separate-->", customer_address)
  // console.log("customer basic details separate-->",customer_basic_details )  

  const { id } = useParams();

  useEffect(() => {
    if (isoneticketStatus) {

      dispatch(oneticketStatus(false))
    }
  }, [isoneticketStatus])

  console.log("ticketID :- ", id);

  useEffect(() => {
    if (id) {
      dispatch(GetTicketsAPI({ ticket_id: id }));
    }
  }, [id])

  const show_text_area_for_reason = (e) => {
    const checked = e.target.checked;
    if (checked) {
      document.getElementById("reason_text_area").style.display = "inline";
    }
    else {
      document.getElementById("reason_text_area").style.display = "none";
    }
  }

  const select_date_time = () => {
    document.getElementById('datetimepicker1').datetimepicker();
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [status, setStatus] = useState('')
  const selectStatus = (e) => {
    setStatus(e.target.value)
    dispatch(UpdateTicketStatusAPI({ ticket_status: status, ticket_number: '1' }))
  }
  console.log(status)
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
                  <h1>View Ticket</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section bg-light">
        <div class="container">
          <div class="col-md-12 mb-5" data-aos="fade">
            <form class="p-5 bg-white" style={{ marginTop: '-150px' }} >
              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="ticket_no">Ticket Number</label>
                  <input type="text" id="ticket_no" class="form-control" disabled />
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="ticket_status">Ticket status</label>
                  <input type="text" id="ticket_status" class="form-control" disabled />
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-6">
                  <label class="text-black" for="service_date">Service date</label>
                  <input type="text" id="service_date" class="form-control" disabled />
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="service_time">Service Time</label>
                  <input type="text" id="service_time" class="form-control" disabled />
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-8">
                  <label class="text-black" for="customer_name">Customer Name</label>
                  <input type="text" id="customer_name" class="form-control" disabled />
                </div>
                <div class="col-md-4">
                  <label class="text-black" for="contact_number">Contact Number</label>
                  <input type="text" id="contact_number" class="form-control" disabled />
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <h4 class="text-black" for="address">Address</h4>
                  {/* <input type="text" id="address" class="form-control" disabled /> */}
                  <div class="row form-group">
                    <div class="col-md-3">
                      <label class="text-black" for="address">Door Number</label>
                      <input type="text" id="door_number" class="form-control" disabled />
                    </div>
                    <div class="col-md-5">
                      <label class="text-black" for="address">Street</label>
                      <input type="text" id="street" class="form-control" disabled />
                    </div>
                    <div class="col-md-4">
                      <label class="text-black" for="address">Area</label>
                      <input type="text" id="area" class="form-control" disabled />
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-5">
                      <label class="text-black" for="address">City</label>
                      <input type="text" id="city" class="form-control" disabled />
                    </div>
                    <div class="col-md-4">
                      <label class="text-black" for="address">State</label>
                      <input type="text" id="state" class="form-control" disabled />
                    </div>
                    <div class="col-md-1">
                      <label class="text-black" for="address">Pincode</label>
                      <input type="text" id="pincode" class="form-control" disabled />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="description">Description</label>
                  <textarea name="message" id="description" cols="30" rows="7" class="form-control"
                    disabled></textarea>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-4">
                  <input type="submit" value="accept" onClick={selectStatus} class="btn btn-primary btn-md text-white" />
                </div>
                <div class="col-md-4">
                  <input type="submit" value="reject" onClick={selectStatus} class="btn btn-primary btn-md text-white" />
                </div>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={show_text_area_for_reason} />
                <label class="form-check-label" for="flexCheckDefault">
                  Request to change service date and time
                </label>
              </div>
              <div class="row form-group" id="reason_text_area" style={{ display: 'none' }} >
                <div class="col-md-6">
                  <label class="text-black" for="date">select the date</label>
                  <div class='input-group date' id='datetimepicker1' onChange={select_date_time}>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                  </div>
                </div>
                <div class="col-md-12">
                  <label class="text-black" for="message">Mention the reason and select date and time</label>
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control"
                  ></textarea>
                </div>
                <div class="col-md-3 ">
                  <input type="submit" value="hold" onClick={selectStatus} class="btn btn-primary btn-md text-white" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewTicket;