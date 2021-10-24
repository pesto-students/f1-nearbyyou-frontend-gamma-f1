import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllTicketsAPI, ticketStatus } from '../Redux/vendor/Home/HomeSlice';
import { GetAllShopsAPI, shopStatus } from '../Redux/vendor/Profile/VendorProfileSlice';

const VendorHome = () => {

	const dispatch = useDispatch();

	const { ticketResults, isticketStatus } = useSelector(state => state.ticket);
	const [activeMenu, setActiveMenu] = useState('new');
	
	const [results, setResults] = useState('')
	const [shop_results, setShopResults] = useState('')
	const [user, setUser] = useState('');
	const { shopResults, isshopstatus } = useSelector(state => state.shop);
	console.log("results from api-->", ticketResults)

	// const tickets = ticketResults;

	useEffect(() => {
		if (isticketStatus) {
			setResults(ticketResults);
			dispatch(ticketStatus(false))
		}
	}, [isticketStatus])

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
		setUser(userData);
		window.scrollTo({ top: 0, behavior: 'smooth' });
		dispatch(GetAllShopsAPI({ user_id: user?.id }));
	}, [])

	useEffect(() => {
		dispatch(shopStatus(false))
		setShopResults(shopResults?.data)
		console.log("shop results-->", shop_results)
	}, [isshopstatus])
	
	const [activePincode, setActivePincode] = useState(shop_results &&  shopResults[0] ? shop_results[0].shop_pincode: "");

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

	// const GetTicket = (data) => {
	// 	console.log('data ; -,', data)
	// 	// dispatch(GetTicketAPI({ ticket_status: activeMenu, shop_pincode: activePincode }))
	// }

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
								<option value="">All Shops Pincode</option>
								{
									shop_results?.length > 0 && shop_results.map((item) => (
										<option value={item.shop_pincode}>{item.shop_pincode}</option>
									))

								}
							</select>
						</div>
					</div>
					<Nav variant="tabs" className="menuTab" defaultActiveKey="link-1">
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="new_request" onSelect={() => selectMenu('new')}  >New Request</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="pending_request" onSelect={() => selectMenu('holding')}  >Holding Request </Nav.Link>
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
								<th>Service Date</th>
								<th>Service Time</th>
								<th>Service Description</th>
								<th>Action   </th>
							</tr>
						</thead>
						<tbody>
							{
								results?.length > 0 && results.map((item, index) => (
									<tr>
										<td>{item.ticket_number}</td>
										<td>{item.service_date}</td>
										<td>{item.service_time}</td>
										<td>{item.service_description}</td>
										<td ><Link to={`/vendor/app/view_ticket/${item._id}`}><i class="fa fa-eye fa-lg" aria-hidden="true"></i></Link>
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