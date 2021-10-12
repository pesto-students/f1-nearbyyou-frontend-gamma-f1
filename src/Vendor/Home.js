import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VendorHome = () => {

	const [activeMenu, setActiveMenu] = useState('new')

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [])

	useEffect(() => {
		console.log(activeMenu);
	}, [activeMenu])

	const selectMenu = (type) => {
		setActiveMenu(type);
	}

	return (
		<>
			<div class="site-blocks-cover inner-page-cover overlay small-header"
				style={{ backgroundImage: 'url(/images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }} data-aos="fade"
				data-stellar-background-ratio="0.5">
			</div>

			<div class="site-section">
				<div class="container">
					<Nav variant="tabs" className="menuTab" defaultActiveKey="link-1">
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="new_request" onClick={() => selectMenu('new')}  >New Request</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="pending_request" onClick={() => selectMenu('pending')}  >Pending Request </Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="inprogress_request" onClick={() => selectMenu('inprogress')}  >In-Pending Request </Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="menuItem" eventKey="closed_request" onClick={() => selectMenu('close')}  >Closed Request </Nav.Link>
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
							<tr>
								<td>1</td>
								{Array.from({ length: 3 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
								<td><Link to="/vendor/app/view_ticket"><i class="fa fa-eye fa-lg" aria-hidden="true"></i></Link>
								</td>
							</tr>
							<tr>
								<td>2</td>
								{Array.from({ length: 3 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
								<td><i class="fa fa-eye fa-lg" aria-hidden="true"></i></td>
							</tr>
							<tr>
								<td>3</td>
								{Array.from({ length: 3 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
								<td><i class="fa fa-eye fa-lg" aria-hidden="true"></i></td>
							</tr>
							<tr>
								<td>4</td>
								{Array.from({ length: 3 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
								<td><i class="fa fa-eye fa-lg" aria-hidden="true"></i></td>
							</tr>
							<tr>
								<td>5</td>
								{Array.from({ length: 3 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
								<td><i class="fa fa-eye fa-lg" aria-hidden="true"></i></td>
							</tr>
							<tr>
								<td>6</td>
								{Array.from({ length: 3 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
								<td><i class="fa fa-eye fa-lg" aria-hidden="true"></i></td>
							</tr>
							<tr>
								<td>7</td>
								{Array.from({ length: 3 }).map((_, index) => (
									<td key={index}>Table cell {index}</td>
								))}
								<td><i class="fa fa-eye fa-lg" aria-hidden="true"></i></td>
							</tr>

						</tbody>
					</Table>
				</div>
			</div>
		</>
	)

}

export default VendorHome;