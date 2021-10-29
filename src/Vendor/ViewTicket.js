import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UpdateTicketStatusAPI } from '../Redux/vendor/Home/HomeSlice';


import { useParams, useHistory } from 'react-router-dom';
import { GetTicketsAPI, oneticketStatus } from '../Redux/vendor/Home/HomeSlice';

const ViewTicket = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [viewdata, setviewdata] = useState({
    ticket_details: '',
    customer_address: '',
  });
  const [userdeatils, setUserDetails] = useState('')



  const { oneticketResults, isoneticketStatus, updateTicketResults, isupdatestatus } = useSelector(state => state.ticket);

  useEffect(() => {
    setviewdata({
      ticket_details: oneticketResults.ticketdetails,
      customer_address: oneticketResults?.ticket_customer_details && oneticketResults?.ticket_customer_details[0] ? oneticketResults.ticket_customer_details[0] : ''
    })

  }, [oneticketResults])
  console.log("View Dtaa :- ", viewdata);



  const { id } = useParams();
  useEffect(() => {
    if (viewdata.customer_address) {
      setUserDetails(
        viewdata.customer_address?.customeranduser && viewdata.customer_address.customeranduser[0] ? viewdata.customer_address.customeranduser[0] : ''
      )
    }

  }, [viewdata.customer_address])


  console.log("user details-> ", userdeatils)
  console.log('customer_address -->', viewdata.customer_address)
  console.log("ticket details -->", viewdata.ticket_details)
  useEffect(() => {
    if (isoneticketStatus) {
      dispatch(oneticketStatus(false))
    }
  }, [isoneticketStatus])


  useEffect(() => {
    if (isupdatestatus) {
      dispatch(oneticketStatus(false))
      history.push('/vendor/app/home')
    }
  }, [isupdatestatus])

  // console.log("ticketID :- ", id);

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [ticketstatusdetails, setticketstatus] = useState({
    hold_date: '',
    hold_time: '',
    hold_description: '',
    status_of_ticket: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setticketstatus({
      ...ticketstatusdetails,
      [name]: value
    })
  }

  const [Tstatus, setStatus] = useState('')

  useEffect(() => {
    if (Tstatus) {
      dispatch(UpdateTicketStatusAPI(
        {
          ticket_status: Tstatus,
          ticket_id: id,
          hold_date: ticketstatusdetails.hold_date,
          hold_time: ticketstatusdetails.hold_time,
          hold_description: ticketstatusdetails.hold_description
        }
      ))
    }
  }, [Tstatus])



  const selectStatus = (status) => {
    setStatus(status)
    // setStatus(e.target.value)
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
                  <input type="text" value={viewdata?.ticket_details?.ticket_number} id="ticket_no" class="form-control" disabled />
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="ticket_status">Ticket status</label>
                  <input type="text" value={viewdata.ticket_details?.ticket_status} id="ticket_status" class="form-control" disabled />
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-6">
                  <label class="text-black" for="service_date">Service date</label>
                  <input type="text" value={viewdata.ticket_details?.service_date} id="service_date" class="form-control" disabled />
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="service_time">Service Time</label>
                  <input type="text" value={viewdata?.ticket_details?.service_time} id="date" class="form-control" name="date" disabled />
                </div>
              </div>
              {
                viewdata?.ticket_details?.hold_date ?
                  <div class="row form-group">
                    <div class="col-md-6">
                      <label class="text-black" for="service_date">Hold date</label>
                      <input type="text" value={viewdata.ticket_details?.hold_date} id="service_date" class="form-control" disabled />
                    </div>
                    <div class="col-md-6">
                      <label class="text-black" for="service_time">Hold Time</label>
                      <input type="text" value={viewdata?.ticket_details?.hold_time} id="date" class="form-control" name="date" disabled />
                    </div>
                    <div class="col-md-12">
                      <label class="text-black" for="service_time">Hold Description</label>
                      <input type="text" value={viewdata?.ticket_details?.hold_description} id="date" class="form-control" name="date" disabled />
                    </div>
                  </div>
                  :
                  ""
              }
              <div class="row form-group">
                <div class="col-md-8">
                  <label class="text-black" for="customer_name">Customer Name</label>
                  <input type="text" value={userdeatils?.user_name} id="customer_name" class="form-control" disabled />
                </div>
                <div class="col-md-4">
                  <label class="text-black" for="contact_number">Contact Number</label>
                  <input type="text" value={userdeatils?.contact_number} id="contact_number" class="form-control" disabled />
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <h4 class="text-black" for="address">Address</h4>
                  {/* <input type="text" id="address" class="form-control" disabled /> */}
                  <div class="row form-group">
                    <div class="col-md-3">
                      <label class="text-black" for="address">Door Number</label>
                      <input type="text" value={viewdata.customer_address?.door_number} id="door_number" class="form-control" disabled />
                    </div>
                    <div class="col-md-5">
                      <label class="text-black" for="address">Street</label>
                      <input type="text" value={viewdata.customer_address?.street} id="street" class="form-control" disabled />
                    </div>
                    <div class="col-md-4">
                      <label class="text-black" for="address">Area</label>
                      <input type="text" value={viewdata.customer_address?.area} id="area" class="form-control" disabled />
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-5">
                      <label class="text-black" for="address">City</label>
                      <input type="text" value={viewdata.customer_address?.city_town} id="city" class="form-control" disabled />
                    </div>
                    <div class="col-md-4">
                      <label class="text-black" for="address">State</label>
                      <input type="text" value={viewdata.customer_address?.state} id="state" class="form-control" disabled />
                    </div>
                    <div class="col-md-1">
                      <label class="text-black" for="address">Pincode</label>
                      <input type="text" value={viewdata.customer_address?.pincode} id="pincode" class="form-control" disabled />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="description">Description</label>
                  <textarea name="message" value={viewdata?.ticket_details?.service_description} id="description" cols="30" rows="7" class="form-control"
                    disabled></textarea>
                </div>
              </div>
              {
                viewdata?.ticket_details?.ticket_status == "closed" ? "" : 
                (viewdata?.ticket_details?.ticket_status == "holding") ||(viewdata?.ticket_details?.ticket_status == "new") ? (
                  <div class="row form-group">
                    <div class="col-md-4" >
                      <input type="button" value="accept" name="status_of_ticket" onClick={() => selectStatus('inprogress')} class="btn btn-primary btn-md text-white" />
                    </div>

                    <div class="col-md-4">
                      <input type="button" value="reject" name="status_of_ticket" onClick={() => selectStatus('closed')} class="btn btn-primary btn-md text-white" />
                    </div>
                  </div>) :""
              }
              {
                viewdata?.ticket_details?.ticket_status == "inprogress" ?
                  <div class="row form-group">
                    <div class="col-md-4" >
                      <input type="button" value="close" name="status_of_ticket" onClick={() => selectStatus('closed')} class="btn btn-primary btn-md text-white" />
                    </div>
                  </div> :""
              }

            </form>

            {
              (viewdata?.ticket_details?.ticket_status == "new") ?
                <form class="bg-white" >
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={show_text_area_for_reason} />
                    <h5 class="form-check-label" for="flexCheckDefault">
                      Request to change service date and time
                    </h5>
                  </div>
                  <div class="row form-group" id="reason_text_area" style={{ display: 'none' }} >
                    <div class="col-md-6">
                      <label class="text-black" for="date">select the date</label>
                      <div class='input-group date' id='date'>
                        <input type="date" id="hold_date" name="hold_date" class="form-control" onChange={handleChange} />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label class="text-black" for="date">select the time</label>
                      <div class='input-group time' id='time'>
                        <input type="time" id="hold_time" name="hold_time" class="form-control" onChange={handleChange} />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <label class="text-black" for="message">Reason for holding</label>
                      <textarea name="message" name="hold_description" id="message" cols="30" rows="7" class="form-control" onChange={handleChange}
                      ></textarea>
                    </div>
                    <div class="col-md-3 ">
                      <input type="button" name="status_of_ticket" onClick={() => selectStatus('holding')} value="hold" class="btn btn-primary btn-md text-white" />
                    </div>
                  </div>
                </form>
                : ""
            }


          </div>
        </div>
      </div>
    </>
  )
}

export default ViewTicket;