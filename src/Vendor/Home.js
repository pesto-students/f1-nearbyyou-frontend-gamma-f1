import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllTicketsAPI, ticketStatus } from '../Redux/vendor/Home/HomeSlice';

const VendorHome = () => {

	const dispatch = useDispatch();

	const { ticketResults, isticketStatus } = useSelector(state => state.ticket);
	console.log("search result is---->", ticketResults);
	const [activeMenu, setActiveMenu] = useState('new');
	const [activePincode, setActivePincode] = useState('989898');

	let data = [{
		ticketNo: '1',
		date: '12-10-291',
		cno: '8989898989',
		cname: 'pppp'
	},
	{
		ticketNo: '2',
		date: '12-10-291',
		cno: '111222',
		cname: 'QQQ'
	}

	]

	useEffect(() => {
		if (isticketStatus) {

			dispatch(ticketStatus(false))
		}
	}, [isticketStatus])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [])

	useEffect(() => {
		dispatch(GetAllTicketsAPI({ ticket_status: activeMenu, shop_pincode: activePincode }))
	}, [activeMenu, activePincode])

	const selectMenu = (type) => {
		setActiveMenu(type);
	}

	const selectShopPincode = (e) => {
		const { name, value } = e.target
		setActivePincode(value)
	}

	const GetTicket = (data) => {
		console.log('data ; -,', data)
		// dispatch(GetTicketAPI({ ticket_status: activeMenu, shop_pincode: activePincode }))
	}

	return (
		<>
			<div class="site-blocks-cover inner-page-cover overlay small-header"
				style={{ backgroundImage: 'url(/images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }} data-aos="fade"
				data-stellar-background-ratio="0.5">
			</div>

			<div class="site-section">
				<div class="container">
					<h2>Select Shop pincode</h2>
					<div class="form-group">
						<div class="select-wrap">
							<span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
							<select class="form-control" name="shop_pincode" onChange={selectShopPincode}>
								<option value="">All Categories</option>
								<option value="989898">989898</option>
								<option value="111111">111111</option>
								<option value="888888">888888</option>
							</select>
						</div>
					</div>
					<Nav variant="tabs" className="menuTab" defaultActiveKey="link-1">
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="new_request" onSelect={() => selectMenu('new')}  >New Request</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="pending_request" onSelect={() => selectMenu('pending')}  >Pending Request </Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="inprogress_request" onSelect={() => selectMenu('inprogress')}  >In-Progress Request </Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="closed_request" onSelect={() => selectMenu('closed')}  >Closed Request </Nav.Link>
						</Nav.Item>
					</Nav>
					<Table responsive>
						<thead>
							<tr>
								<th>Ticket Number</th>
								<th>Service Datetime</th>
								<th>Customer Name</th>
								<th>Customer Contact</th>
								<th>Action   </th>
							</tr>
						</thead>
						<tbody>
							{
								data?.length > 0 && data.map((item, index) => (
									<tr>
										<td>{item.ticketNo}</td>
										<td>{item.date}</td>
										<td>{item.cno}</td>
										<td>{item.cname}</td>
										<td onClick={() => GetTicket(item)}><Link to={`/vendor/app/view_ticket/${item.ticketNo}`}><i class="fa fa-eye fa-lg" aria-hidden="true"></i></Link>
										</td>
									</tr>
								))
							}
						</tbody>
					</Table>
				</div>
			</div>
		</>
	)
}

export default VendorHome;