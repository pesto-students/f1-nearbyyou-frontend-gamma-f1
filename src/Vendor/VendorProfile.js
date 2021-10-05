import React, { useEffect, useState } from 'react';
import { Dropdown, Carousel, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const VendorProfile = () => {
	const [show_modal, setModal] = useState(false);
	const [activedropdown, set_dropdown_value] = useState(1);

	const dropdown_select = (shop_id) => {
		set_dropdown_value(shop_id);
	}
	useEffect(() => {
		console.log(activedropdown);
	}, [activedropdown]);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [])
	const showModal = () => {
		setModal(true);
	}
	const handleClose = () => { setModal(false); }

	return (
		<>
			<div class="site-blocks-cover inner-page-cover overlay small-header"
				style={{ backgroundImage: 'url(/images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }} data-aos="fade"
				data-stellar-background-ratio="0.5">
			</div>
			<div class="site-section bg-light">
				<div class="container">
					<div class="row align-items-center justify-content-center text-center">
						<div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
							<div class="row justify-content-center">
								<div class="col-md-8 text-center">
									<h1>PROFILE</h1>
								</div>
							</div>
						</div>
					</div>
					<button class="mb-2" type="button" > <i class="fa fa-plus p-1" aria-hidden="true"></i> Add branch</button>
					<Dropdown onSelect={dropdown_select} >
						<Dropdown.Toggle variant="success" id="dropdown-basic" >
							Select shop
						</Dropdown.Toggle>

						<Dropdown.Menu >
							<Dropdown.Item eventKey="1">Action</Dropdown.Item>
							<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
							<Dropdown.Item eventKey="3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
			<div class="site-section" style={{ marginTop: "-4.5rem" }}>
				<div class="container">
					<div class="row form-group">
						<div class="col-md-6" data-aos="fade">
							<Carousel variant="dark" >
								<Carousel.Item interval={1000}>
									<img fluid style={{ height: "20rem", width: "100%" }}
										className="d-block w-100"
										src="/images/ximg_6.jpg.pagespeed.ic.cOZc6e0Yb7.jpg"
										alt="First slide"
									/>
								</Carousel.Item>
								<Carousel.Item interval={500}>
									<img fluid style={{ height: "20rem", width: "100%" }}
										className="d-block w-100"
										src="/images/ximg_6.jpg.pagespeed.ic.cOZc6e0Yb7.jpg"
										alt="Second slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img fluid style={{ height: "20rem", width: "100%" }}
										className="d-block w-100"
										src="/images/ximg_6.jpg.pagespeed.ic.cOZc6e0Yb7.jpg"
										alt="Third slide"
									/>
								</Carousel.Item>
							</Carousel>
						</div>
						<div class="col-md-6" data-aos="fade">
							<form class="p-1" >
								<div class="row form-group">
									<div class="col-md-12 mb-3 mb-md-0">
										<h3 class="text-black mb-3 mb-md-0" for="shop_name">Shop Name</h3>
										<input type="text" id="ticket_no" class="form-control" disabled />
									</div>
									<div class="col-md-12 mb-3 mb-md-0">
										<h3 class="text-black mb-3 mb-md-0" for="branch_address">Branch Address</h3>
										<input type="text" id="ticket_no" class="form-control" disabled />
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-12 mb-3 mb-md-0">
										<h5 class="text-black" for="ticket_no">Contact Number</h5>
										<input type="text" id="ticket_no" class="form-control" disabled />
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-12">
										<h5 class="text-black" for="ticket_status">Alterative Contact Number</h5>
										<input type="text" id="ticket_status" class="form-control" disabled />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<h2>Overview</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<h2>Services</h2>
				<label class="text-black" for="adding_new_service">Add New service</label>
				<button type="addservice" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
					<i class="fa fa-plus p-1" aria-hidden="true"></i>
				</button>


				<div class="form-group collapse add_service_form p-3" id="collapseExample">
					<label class="text-black" for="service_name">Add New service</label>
					<div class="col-md-8 mb-3">
						<input type="text" id="ticket_no" class="form-control" placeholder="enter the name of new service" />
					</div>
					<label class="text-black" for="service_description">Add service description</label>
					<div class="col-md-8 mb-3">
						<input type="text" id="ticket_no" class="form-control" placeholder="enter the service description" />
					</div>
					<div class="col-md-3">
						<button type="submit">
							ADD
						</button>
					</div>

				</div>
				<Table responsive>
					<thead>
						<tr>
							<th>#</th>
							<th>Name of the service</th>
							<th>Service Description</th>
							<th>Action</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							{Array.from({ length: 2 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
							<td variant="primary" onClick={showModal}><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
							</td>
							<td><Link to="/vendor/app/service/delete"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></Link>
							</td>
							<Modal
								className="modal_content"
								show={show_modal}
								onHide={handleClose}
								centered>
								<Modal.Header closeButton>
									<Modal.Title>Edit Service</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Name of new service</Form.Label>
											<Form.Control type="service name" placeholder="Enter service name" />
											<Form.Label>Service Description</Form.Label>
											<Form.Control type="service name" placeholder="Enter service descritption" />
										</Form.Group>
									</Form>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
									<Button variant="primary" onClick={handleClose}>
										Save Changes
									</Button>
								</Modal.Footer>
							</Modal>
						</tr>
						<tr>
							<td>2</td>
							{Array.from({ length: 2 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
							<td><Link to="/vendor/app/service/edit"><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></Link>
							</td>
							<td><Link to="/vendor/app/service/delete"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></Link>
							</td>
						</tr>
						<tr>
							<td>3</td>
							{Array.from({ length: 2 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
							<td><Link to="/vendor/app/service/edit"><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></Link>
							</td>
							<td><Link to="/vendor/app/service/delete"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></Link>
							</td>
						</tr>
						<tr>
							<td>4</td>
							{Array.from({ length: 2 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
							<td><Link to="/vendor/app/service/edit"><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></Link>
							</td>
							<td><Link to="/vendor/app/service/delete"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></Link>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	)
}

export default VendorProfile;