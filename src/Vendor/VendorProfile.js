import React, { useEffect, useState } from 'react';
import { Dropdown, Carousel, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllShopsAPI, shopStatus, AddShopAPI, newShopStatus } from '../Redux/vendor/Profile/VendorProfileSlice';
import { useHistory } from 'react-router-dom';

const __DEV__ = document.domain === 'localhost'

const VendorProfile = () => {


	const dispatch = useDispatch();
	const history = useHistory();

	const { shopResults, isshopstatus, isnewShopStatus, newShopResults } = useSelector(state => state.shop);
	const [results, setResults] = useState({
		shops: '',
		vendor_details: ''
	});
	const [user, setUser] = useState('');

	useEffect(() => {
		if (isnewShopStatus) {
			dispatch(newShopStatus(false));;
			history.push('/vendor/app/profile')
		}
	})

	useEffect(() => {
		// if (isshopstatus) {
		setResults({
			shops: shopResults.data,
			vendor_details: shopResults.vendor_details
		});
		dispatch(shopStatus(false));
		// }
	}, [isshopstatus])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		// console.log(localStorage.getItem('Near_By_You'))
		const userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
		setUser(userData);
		console.log("user data after stringyfy->", userData);
		dispatch(GetAllShopsAPI({ user_id: userData.id }));

	}, [])




	console.log("shop results-->", results.shops);;
	console.log("vendor details -->", results.vendor_details);

	const [form, setForm] = useState({
		shop_email: '',
		shop_contact_number: '',
		shop_door_number: '',
		shop_street: '',
		shop_area: '',
		shop_city_town: '',
		shop_state: '',
		shop_pincode: '',
		shop_category_name: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}

	const addShopClick = (e) => {
		e.preventDefault();
		dispatch(AddShopAPI(
			{
				shop_email: form.shop_email,
				shop_contact_number: form.shop_contact_number,
				shop_door_number: form.shop_door_number,
				shop_street: form.shop_street,
				shop_area: form.shop_area,
				shop_city_town: form.shop_city_town,
				shop_state: form.shop_state,
				shop_pincode: form.shop_pincode,
				shop_category_name: form.shop_category_name,
			}
		));

	}
	function loadScript(src) {
		return new Promise((resolve) => {
			const script = document.createElement('script')
			script.src = src
			script.onload = () => {
				resolve(true)
			}
			script.onerror = () => {
				resolve(false)
			}
			document.body.appendChild(script)
		})
	}


	const displayRazorpay = async () => {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:3003/api/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_LeuHX4bMmraCPA' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: '/images/near-by-you.jpg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name: 'Bhargav Patel',
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}


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
				</div>
			</div>
			<div class="site-section" style={{ marginTop: "-4.5rem" }}>
				<div class="container">
					<div class="row form-group">
						<div class="col-md-6" data-aos="fade">
							<form class="p-1" >
								<div class="row form-group m-5">
									<h1 class="text-black mb-5 mb-md-0 ">{results.vendor_details && results.vendor_details[0].shop_name}</h1>
								</div>
								<div class="form-group mb-5">
									<div class="col-md-12  mb-md-0">
										<h5 class="text-black" for="ticket_no">Contact Number : {user.contact_number}</h5>
									</div>
								</div>
								<div class="form-group mb-3">
									<div class="col-md-12">
										<h5 class="text-black" for="ticket_status">Shop Email : {user.email} </h5>
									</div>
								</div>
							</form>
						</div>
						<div class="col-md-6" data-aos="fade">
							<img fluid style={{ height: "20rem", width: "100%" }}
								className="d-block w-100"
								src="/images/ximg_6.jpg.pagespeed.ic.cOZc6e0Yb7.jpg"
								alt="First slide"
							/>
						</div>

					</div>
				</div>
			</div>

			<div class="container">

				<h2>Shop deatils</h2>
				<label class="text-black" for="adding_new_service">Add new shop branch</label>
				<button class="btn btn-primary btn-xs text-white" type="addservice" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
					<i class="fa fa-plus p-1" aria-hidden="true"></i>
				</button>


				<div class="form-group collapse add_service_form p-3" id="collapseExample">
					<form onSubmit={addShopClick}>
						<label class="text-white" for="service_name">Add New service</label>
						<div class="row form-group">
							<div class="col-md-6">
								<label class="text-white" for="service_description">Shop Email </label>
								<input type="text" name="shop_email" class="form-control" onChange={handleChange} placeholder="enter shop email" required />
							</div>
							<div class="col-md-6">
								<label class="text-white" for="service_description">Shop Contact </label>
								<input type="text" name="shop_contact_number" class="form-control" onChange={handleChange} placeholder="enter shop contact" required />
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-4">
								<label class="text-white" for="service_description">Shop door number</label>
								<input type="text" name="shop_door_number" class="form-control" onChange={handleChange} required />
							</div>
							<div class="col-md-4">
								<label class="text-white" for="service_description">Shop street </label>
								<input type="text" name="shop_street" class="form-control" onChange={handleChange} />
							</div>
							<div class="col-md-4">
								<label class="text-white" for="service_description">Shop area </label>
								<input type="text" name="shop_area" id="ticket_no" class="form-control" onChange={handleChange} required />
							</div>
						</div>
						<div class="row form-group mb-3">
							<div class="col-md-5">
								<label class="text-white" for="service_description">Shop city/town</label>
								<input type="text" name="shop_city_town" class="form-control" onChange={handleChange} required />
							</div>
							<div class="col-md-4">
								<label class="text-white" for="service_description">Shop state </label>
								<input type="text" name="shop_state" class="form-control" onChange={handleChange} required />
							</div>
							<div class="col-md-3">
								<label class="text-white" for="service_description">Shop pincode </label>
								<input type="text" name="shop_pincode" class="form-control" onChange={handleChange} required />
							</div>
						</div>
						<label class="text-white" for="shop_category">select shop category</label>
						<div class="row form-group">

							<div class="select-wrap col-md-6">
								<span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
								<select class="form-control" name="shop_category_name" onChange={handleChange} value={form.shop_category}>
									<option value="">All Categories</option>
									<option value="salon">Salon</option>
									<option value="plumbers">Plumbers</option>
									<option value="electrician">Electrician</option>
									<option value="carpenter">Carpenter</option>
									<option value="pestcontrol">Cleaning Pest and Control</option>
									<option value="painter">Painters</option>
								</select>
							</div>
						</div>
						<div class="col-md-3">
							<button type="submit" class="btn btn-outline-white btn-primary btn-md text-white">
								ADD
							</button>
						</div>
					</form>
				</div>
				<Table responsive>
					<thead>
						<tr>
							<th>Shop Pincode</th>
							<th>Shop Email</th>
							<th>Shop Contact</th>
							<th>Shop Status</th>
							<th>View</th>
						</tr>
					</thead>
					<tbody>
						{
							results.shops?.length > 0 && results.shops.map((item, index) => (
								<tr>
									<td>{item.shop_pincode}</td>
									<td>{item.shop_email}</td>
									<td>{item.shop_contact_number}</td>
									<td>{item.shop_status}</td>
									{(item.shop_status == "active" || item.shop_status == "reject" || item.shop_status == "pending") ?
										<td ><Link to={`/vendor/app/view_shop/${item._id}`}><i class="fa fa-eye fa-lg" aria-hidden="true"></i></Link></td> : ""}
									{(item.shop_status == "payment pending") ?
										<td><input onClick={displayRazorpay} type="button" value="Donot 499" class="form-control btn btn-primary btn-md text-white" /></td> : ""
									}

								</tr>
							))
						}
					</tbody>
				</Table>
			</div>
		</>
	)
}

export default VendorProfile;