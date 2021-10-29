import React, { useEffect, useState } from 'react';
import { Dropdown, ButtonGroup, Table, Modal, Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllShopsAPI, shopStatus, AddShopAPI, newShopStatus, GetAllPlans, allPlansStatus, EditShopAPI, editShopStatus, EditVendorProfileAPI, vendorProfileUpdateStatus, GetAllCategories, allCategoriesStatus } from '../Redux/vendor/Profile/VendorProfileSlice';
import { useHistory } from 'react-router-dom';
import service from '../Common_Pages/Service';
import { ErrorAlert, SuccessAlert } from '../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';


const __DEV__ = document.domain === 'localhost'

const VendorProfile = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { shopResults, isshopstatus, isnewShopStatus, allPlansResults, isAllPlans, iseditshopstatus, isVendorProfileUpdate, allCategoriesResult, isallCategory } = useSelector(state => state.shop);

	const [editProfileform, setEditProfileform] = useState({
		vendor_email: '',
		shop_name: '',
		vendor_contact_number: '',
		vendor_id: ''
	})

	const [categories, setCategories] = useState('')

	useEffect(() => {
		if (isallCategory) {
			setCategories(allCategoriesResult)
			dispatch(allCategoriesStatus(false))
		}
	}, [isallCategory])

	const [results, setResults] = useState({
		shops: '',
		vendor_details: ''
	});
	const [user, setUser] = useState('');

	useEffect(() => {
		if (isnewShopStatus) {
			dispatch(newShopStatus(false));
			const userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
			dispatch(GetAllShopsAPI({ user_id: userData.id }))
			history.push('/vendor/app/profile')
		}
	}, [isnewShopStatus])


	const [plans, setPlans] = useState('');
	useEffect(() => {
		if (isAllPlans) {
			setPlans(allPlansResults)
			dispatch(allPlansStatus(false))
		}
	}, [isAllPlans])

	useEffect(() => {
		if (isVendorProfileUpdate) {
			dispatch(vendorProfileUpdateStatus(false))
			setInputState({ disabled: true })
		}
	}, [isVendorProfileUpdate])


	useEffect(() => {
		setResults({
			shops: shopResults.data,
			vendor_details: shopResults.vendor_details
		});
		dispatch(shopStatus(false));
		setEditProfileform({
			...editProfileform,
			shop_name: results.vendor_details && results.vendor_details[0].shop_name,
			vendor_id: results.vendor_details && results.vendor_details[0]._id
		})
	}, [isshopstatus])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		const userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
		setUser(userData);
		console.log("user data after stringyfy->", userData);
		dispatch(GetAllShopsAPI({ user_id: userData.id }));
		dispatch(GetAllPlans({}));
		dispatch(GetAllCategories({}));
		setEditProfileform({
			...editProfileform,
			shop_name: '',
			vendor_email: userData.email,
			vendor_contact_number: userData.contact_number
		})
	}, [])

	useEffect(() => {
		if (iseditshopstatus) {
			dispatch(editShopStatus(false));
			const userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
			dispatch(GetAllShopsAPI({ user_id: userData.id }));
		}
	}, [iseditshopstatus])

	const [form, setForm] = useState({
		shop_email: '',
		shop_contact_number: '',
		shop_door_number: '',
		shop_street: '',
		shop_area: '',
		shop_city_town: '',
		shop_state: '',
		shop_pincode: '',
		shop_start_time: '',
		shop_end_time: '',
		shop_category: '',
		shop_owner: '',
		shop_description: ''
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
				shop_description: form.shop_description,
				shop_timings: form.shop_start_time + " to " + form.shop_end_time,
				shop_category: results.vendor_details && results.vendor_details[0].vendor_category,
				shop_owner: results.vendor_details && results.vendor_details[0]._id
			}
		));

	}

	const [plan_choosen, setPlanChoosen] = useState({
		plan_id: '',
		plan_amount: '',
		plan_name: '',
		isselected: false
	});
	const planselected = (plan) => {
		setPlanChoosen({
			plan_id: plan._id,
			plan_name: plan.name,
			plan_amount: plan.plan_price,
			isselected: true
		})
	}

	const [show, setShow] = useState(false);
	const [paymentShopID, setPaymentShopID] = useState('')

	//Open Modal
	const handleShow = (id) => {
		setShow(true);
		setPaymentShopID(id)
	}
	//Close Modal
	const handleClose = () => {
		setShow(false);
		setPlanChoosen({
			isselected: false
		})
		setPaymentShopID('');
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

		const data = await fetch(`http://localhost:3003/api/razorpay?plan_id=${plan_choosen?.plan_id}`, { method: 'GET' }).then((t) =>
			t.json()
		)

		const options = {
			key: __DEV__ ? 'rzp_test_LeuHX4bMmraCPA' : 'PRODUCTION_KEY',
			currency: 'INR',
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Near By You',
			description: 'Thanks for selecting a plan',
			image: '/images/near-by-you.jpg',
			handler: function (response) {
				setShow(false);
				setPlanChoosen({
					isselected: false
				})
				setPaymentShopID('');
				alert("payment susscessfully done");
				const userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));
				dispatch(GetAllShopsAPI({ user_id: userData.id }));
			},
			prefill: {
				name: 'Bhargav Patel',
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			},
			notes: {
				plan_id: plan_choosen?.plan_id,
				shop_id: paymentShopID
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	const sendrequest = (id) => {
		dispatch(EditShopAPI(
			{
				shop_status: "pending",
				shop_id: id
			}
		));

	}

	// //Upload File
	const [uploadFileName, setUploadFileName] = useState("Choose Company Logo");
	const [images, setimages] = useState([{ preview: "/assets/no_image2.png" }]);
	const [binaryImage, setBinaryImage] = useState();


	const uploadFileButton = async (e) => {
		console.log("e :- ", e.target.files[0]);

		let file = e.target.files[0];
		let url = URL.createObjectURL(e.target.files[0]);

		const response = await service.convertBase64(file);

		console.log("response: -", response);

		if (response.status) {

			setUploadFileName(response.name);
			setimages([{ preview: url }]);
			setBinaryImage(response.file);
			dispatch(SuccessAlert('Image Upload Successfully'));

			var formData = new FormData();
			formData.append('imageData', file);
			formData.append('fileName', response.name);

			const responseData = await axios.post("vendor/shop/uploadImage", formData);

		} else {
			dispatch(ErrorAlert('Erro in upload image !! Please try again'))
		}
	}

	//editing profile

	const [inputstate, setInputState] = useState({
		disabled: true
	})
	const changeEdit = (e) => {
		setInputState({ disabled: false })
	}

	const cancelEdit = (e) => {
		setInputState({ disabled: true })
	}
	const editVendorProfileCLick = (e) => {
		e.preventDefault();
		console.log("edit profie is clicked", editProfileform)
		dispatch(EditVendorProfileAPI(
			{
				shop_name: editProfileform.shop_name,
				email: editProfileform.vendor_email,
				contact_number: editProfileform.vendor_contact_number,
				vendor_id: editProfileform.vendor_id
			}
		))
	}

	const handleChangeForEdit = (e) => {
		const { name, value } = e.target;
		setEditProfileform({
			...editProfileform,
			[name]: value
		})
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
							<form class="p-1" onSubmit={editVendorProfileCLick}  >
								<div class="row form-group mt-4">
									<div class="col-md-12">
										<h3 class="text-black mb-5 mb-md-0 ">Shop Name: </h3>
										<input class="text-black mb-5 mb-md-0 form-control" name="shop_name" disabled={inputstate.disabled} defaultValue={results.vendor_details && results.vendor_details[0].shop_name} onChange={handleChangeForEdit} />
									</div>
								</div>
								<div class="form-group mt-4">
									<div class="col-md-12">
										<h3 class="text-black mb-5 mb-md-0 ">Contact Number : </h3>
										<input class="text-black form-control" name="vendor_contact_number" defaultValue={user.contact_number} disabled={inputstate.disabled} onChange={handleChangeForEdit} />
									</div>
								</div>
								<div class="form-group mt-4">
									<div class="col-md-12">
										<h3 class="text-black mb-5 mb-md-0 ">Shop Email  </h3>
										<input class="text-black form-control" name="vendor_email" defaultValue={user.email} disabled={inputstate.disabled} onChange={handleChangeForEdit} />
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-4">
										<input type="submit" value="save" name="status_of_ticket" class="btn btn-primary btn-md text-white" style={{ display: inputstate.disabled ? "none" : "block" }} />
									</div>
								</div>
							</form>
							<div class="row form-group float-right">
								<button class="btn btn-primary btn-md text-white" onClick={changeEdit} style={{ display: inputstate.disabled ? "block" : "none" }}>Edit</button>
								<button class="btn btn-primary btn-md text-white" onClick={cancelEdit} style={{ display: inputstate.disabled ? "none" : "block" }}>cancel</button>
							</div>
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

				<h2 class="text-black">Shop deatils</h2>
				<div class="row form-group">
					<div class="col-md-10">
						<h3 class="text-black" for="adding_new_service" >Add new shop branch</h3>
					</div>
					<div class="col-md-2">
						<button class="btn btn-primary btn-xs text-white " style={{ float: 'right', marginLeft: "60px" }} type="addservice" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
							<i class="fa fa-plus p-1" aria-hidden="true"></i>
						</button>
					</div>
				</div>

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

						<div class="row form-group">
							<div class="col-md-6 mb-3 mb-md-0">
								<label class="text-white" for="date">select Shop Start time</label>
								<div class='input-group time' id='time'>
									<input type="time" id="shop_start_time" name="shop_start_time" class="form-control" onChange={handleChange} />
								</div>
							</div>
							<div class="col-md-6 mb-3 mb-md-0">
								<label class="text-white" for="time">select Shop End time</label>
								<div class='input-group time' id='time'>
									<input type="time" id="shop_end_time" name="shop_end_time" class="form-control" onChange={handleChange} />
								</div>
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12 mb-3 mb-md-0">
								<label class="text-white" for="shop_description">Shop Description</label>
								<textarea name="shop_description" id="shop_description" cols="30" rows="7" class="form-control" onChange={handleChange}
								></textarea>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-6 mb-3 mb-md-0">
								<label class="text-black" for="fname">Upload File</label>
								<input type="file" class="form-control" onChange={uploadFileButton} />
							</div>
						</div>
						<div class="col-md-3">
							<button type="submit" class="btn btn-outline-white btn-primary btn-md text-white">
								ADD
							</button>
						</div>
					</form>
				</div>

				<Modal centered show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Payment</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<b className="mb-5">Select a plan</b>
						{plans?.length > 0 && plans.map((type) => (
							<div key={`inline-radio`} className="mb-2">
								<Form.Check
									inline
									label={"   " + type?.name + " - " + type?.plan_type + "- Rs-" + type?.plan_price}
									name="plans"
									type={"radio"}
									class="radioButton"
									value={type?._id}
									id={`inline-radio-1`}
									onChange={() => planselected(type)}
								/>
							</div>
						))}


					</Modal.Body>
					<Modal.Footer class="feedBackFooter">
						<div className="feedBackButton">
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</div>
						<Button variant="primary" disabled={plan_choosen.isselected == false} onClick={displayRazorpay}>
							Payment
						</Button>
					</Modal.Footer>
				</Modal>


				<Table responsive>
					<thead>
						<tr>
							<th>Shop Pincode</th>
							<th>Shop Email</th>
							<th>Shop Contact</th>
							<th>Shop Status</th>
							<th>View</th>
							<th>Action</th>
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

									<td ><Link to={`/vendor/app/view_shop/${item._id}`}><i class="fa fa-eye fa-lg" aria-hidden="true"></i></Link></td>
									{(item.shop_status == "payment pending") ?
										<td><input onClick={() => handleShow(item._id)} type="button" value="Make the payment" class="btn btn-primary btn-xs text-white" /></td> : ""
									}
									{(item.shop_status == "inactive") ?
										<td><input onClick={() => handleShow(item._id)} type="button" value="Renew" class="btn btn-primary btn-xs text-white" /></td> : ""
									}
									{(item.shop_status == "reject") ?
										<td><input onClick={() => sendrequest(item._id)} value="send request again" type="button" class="btn btn-primary btn-xs text-white" /></td> : ""

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