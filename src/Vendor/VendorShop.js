import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';


import { useParams, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import {
	GetShopAPI,
	oneShopStatus,
	EditShopAPI,
	editShopStatus,
	AddServiceAPI,
	newServiceStatus,
	GetAllServiceAPI,
	allServicesStatus,
	DeleteServiceAPI,
	EditServiceAPI,
	editServicesStatus
} from '../Redux/vendor/Profile/VendorProfileSlice';

const ViewShop = () => {

	const dispatch = useDispatch();
	const history = useHistory();

	const { id } = useParams();


	console.log("shopid :- ", id);

	useEffect(() => {
		if (id) {
			dispatch(GetShopAPI({ shop_id: id }));
			dispatch(GetAllServiceAPI({ shop_id: id }))
		}
	}, [id])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);


	const {
		oneShopResults,
		isoneshopstatus,
		updateShopResults,
		iseditshopstatus,
		newServiceResults,
		isnewservicestatus,
		isAllServices,
		allServicesResults,
		isEditService
	} = useSelector(state => state.shop);
	const [shopdetails, setShopDetails] = useState('');

	const [inputstate, setInputState] = useState({
		disabled: true
	})

	const [allservices, setAllServices] = useState('')


	const [form, setForm] = useState({
		shop_email: '',
		shop_contact_number: '',
		shop_door_number: '',
		shop_street: '',
		shop_area: '',
		shop_city_town: '',
		shop_state: '',
		shop_pincode: '',
		shop_id: ''
	})

	useEffect(() => {
		if (isoneshopstatus) {
			setShopDetails(oneShopResults);
			dispatch(oneShopStatus(false));

		}
	}, [isoneshopstatus])

	useEffect(() => {
		if (isnewservicestatus) {
			dispatch(GetAllServiceAPI({ shop_id: id }))
			dispatch(newServiceStatus(false));
		}
	}, [isnewservicestatus])

	useEffect(() => {
		if (isAllServices) {
			dispatch(allServicesStatus(false));
			setAllServices(allServicesResults)
		}
	}, [isAllServices])

	useEffect(() => {
		if (isEditService) {
			dispatch(GetAllServiceAPI({ shop_id: id }))
			dispatch(editServicesStatus(false));
		}
	}, [isEditService])

	useEffect(() => {
		if (iseditshopstatus) {
			setShopDetails(updateShopResults);
			dispatch(editShopStatus(false));
			setInputState({ disabled: true })
		}
	}, [iseditshopstatus])


	useEffect(() => {

		setForm({
			...form,
			shop_email: shopdetails?.shop_email,
			shop_contact_number: shopdetails?.shop_contact_number,
			shop_door_number: shopdetails?.shop_door_number,
			shop_street: shopdetails?.shop_street,
			shop_area: shopdetails?.shop_area,
			shop_city_town: shopdetails?.shop_city_town,
			shop_state: shopdetails?.shop_state,
			shop_pincode: shopdetails?.shop_pincode,
			shop_id: id
		})
	}, [isoneshopstatus])

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}

	console.log("edit form-->", form)

	console.log("results in view page-->", shopdetails, isoneshopstatus);


	const changeEdit = (e) => {
		setInputState({ disabled: false })
	}

	const cancelEdit = (e) => {
		setInputState({ disabled: true })
	}

	const editShopClick = (e) => {
		e.preventDefault();
		dispatch(EditShopAPI(
			{
				shop_email: form.shop_email,
				shop_contact_number: form.shop_contact_number,
				shop_door_number: form.shop_door_number,
				shop_street: form.shop_street,
				shop_area: form.shop_area,
				shop_city_town: form.shop_city_town,
				shop_state: form.shop_state,
				shop_pincode: form.shop_pincode,
				shop_id: id
			}
		));

	}
	const [editData, setEditData] = useState({
		service_id: '',
		data: '',
		type: ''
	});

	const [service, setService] = useState({
		service_name: '',
		service_description: ''
	})
	const serviceChange = (e) => {
		const { name, value } = e.target;
		setService({
			...service,
			[name]: value
		})
	}

	const addServiceClick = (e) => {
		e.preventDefault();
		if (editData.type == "add") {
			dispatch(AddServiceAPI(
				{
					shop_id: id,
					service_name: service.service_name,
					service_description: service.service_description
				}
			));
		} else {
			dispatch(EditServiceAPI({
				service_id: editData.service_id,
				name: service.service_name,
				service_description: service.service_description
			}))
		}
	}

	const [show, setShow] = useState(false);



	const clickonEdit = (item) => {
		setEditData({
			service_id: item._id,
			type: "edit",
			data: { item }
		})
		setService({
			service_name: item.name,
			service_description: item.service_description
		})
	}
	const addItem = (add) => {
		setEditData({
			type: "add",
			data: ""
		})
	}
	useEffect(() => {
		console.log("editData-->", editData)
	}, [editData.type])


	const handleShow = () => {
		setShow(true)
	}


	const handleClose = () => {
		setShow(false)
		console.log("show in close==>", show)
	}
	const clickonDelete = (item) => {
		editData.service_id = item._id;
		handleShow();
		console.log("show for pop ===>", show)
	}
	const deleteservice = (service_id) => {
		console.log("value of modal", show)
		dispatch(DeleteServiceAPI({ service_id: service_id }));
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
									<h1>Shop Details</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="site-section bg-light">
				<div class="container">
					<div class="col-md-12 mb-5" data-aos="fade">
						<form class="p-5 bg-white" style={{ marginTop: '-150px' }} onSubmit={editShopClick} >
							<div class="row form-group">
								<div class="col-md-6 mb-3 mb-md-0">
									<label class="text-black" for="ticket_no">Shop Email</label>
									<input type="text" name="shop_email" defaultValue={shopdetails?.shop_email} id="ticket_no" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
								</div>
								<div class="col-md-6">
									<label class="text-black" for="ticket_status">Shop Contact</label>
									<input type="text" name="shop_contact_number" defaultValue={shopdetails?.shop_contact_number} id="ticket_status" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
								</div>
							</div>
							<div class="row form-group">
								<div class="col-md-12">
									<h4 class="text-black" for="address">Address</h4>
									<div class="row form-group">
										<div class="col-md-3">
											<label class="text-black" for="address">Door Number</label>
											<input type="text" name="shop_door_number" defaultValue={shopdetails?.shop_door_number} id="door_number" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
										</div>
										<div class="col-md-5">
											<label class="text-black" for="address">Street</label>
											<input type="text" name="shop_street" defaultValue={shopdetails?.shop_street} id="street" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
										</div>
										<div class="col-md-4">
											<label class="text-black" for="address">Area</label>
											<input type="text" name="shop_area" defaultValue={shopdetails?.shop_area} id="area" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
										</div>
									</div>
									<div class="row form-group">
										<div class="col-md-5">
											<label class="text-black" for="address">City</label>
											<input type="text" name="shop_city_town" defaultValue={shopdetails?.shop_city_town} id="city" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
										</div>
										<div class="col-md-4">
											<label class="text-black" for="address">State</label>
											<input type="text" name="shop_state" defaultValue={shopdetails?.shop_state} id="state" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
										</div>
										<div class="col-md-1">
											<label class="text-black" for="address">Pincode</label>
											<input type="text" name="shop_pincode" defaultValue={shopdetails?.shop_pincode} id="pincode" class="form-control" disabled={inputstate.disabled} onChange={handleChange} />
										</div>
									</div>

								</div>
							</div>
							<div class="row form-group">
								<div class="col-md-4">
									<input type="submit" value="save" name="status_of_ticket" class="btn btn-primary btn-md text-white" style={{ display: inputstate.disabled ? "none" : "block" }} />
								</div>
								<div class="col-md-4">
									{/* <input type="button" value="reject" name="status_of_ticket" onClick={() => selectStatus('closed')} class="btn btn-primary btn-md text-white" /> */}
								</div>
							</div>
						</form>
						<div class="row form-group float-right">
							<button class="btn btn-primary btn-md text-white" onClick={changeEdit} style={{ display: inputstate.disabled ? "block" : "none" }}>Edit</button>
							<button class="btn btn-primary btn-md text-white" onClick={cancelEdit} style={{ display: inputstate.disabled ? "none" : "block" }}>cancel</button>
						</div>
					</div>
					{shopdetails?.shop_status == "active" ?
						<div class="container">
							<h2>Services</h2>
							<label class="text-black" for="adding_new_service">Add New service</label>
							<div onClick={() => addItem("add")}>
								<button class="btn btn-primary btn-xs text-white" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
									<i class="fa fa-plus " aria-hidden="true"></i>
								</button>
							</div>

							<form onSubmit={addServiceClick}>
								<div class="form-group collapse add_service_form p-3" id="collapseExample">
									<label class="text-white" >Service Name</label>
									<div class="col-md-8 mb-3">
										{
											editData.type == "edit" ?
												<input type="text" defaultValue={editData.data.item.name} id="service_name" name="service_name" onChange={serviceChange} class="form-control" /> :
												<input type="text" defaultValue={""} id="service_name" name="service_name" onChange={serviceChange} class="form-control" placeholder="enter the name of new service" />
										}
									</div>
									<label class="text-white" for="service_description">service description</label>
									<div class="col-md-8 mb-3">
										{
											editData.type == "edit" ?
												<input type="text" defaultValue={editData.data.item.service_description} id="service_description" name="service_description" onChange={serviceChange} class="form-control" /> :
												<input type="text" defaultValue={""} id="service_description" name="service_description" onChange={serviceChange} class="form-control" />
										}
									</div>
									<div class="col-md-3">
										<button type="submit" class="btn btn-outline-white btn-primary btn-md text-white">
											Save
										</button>
									</div>
								</div>
							</form>
						</div>
						: ""}

					<div class="container">
						<Table responsive>
							<thead>
								<tr>
									<th>Service Name</th>
									<th>Service Description</th>
									<th>edit</th>
									<th>delete</th>
								</tr>
							</thead>
							<tbody>
								{
									allservices?.length > 0 && allservices.map((item, index) => (
										<tr>
											<td>{item.name}</td>
											<td>{item.service_description}</td>
											<td onClick={() => clickonEdit(item)} disabled><i data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></td>
											<td onClick={() => { if (window.confirm('Are you sure to delete this record?')) { deleteservice(item._id) } }}><i class="fa fa-trash fa-lg" aria-hidden="true"></i></td>
											{/* <td onClick={() => { clickonDelete(item._id) }}><i class="fa fa-trash fa-lg" aria-hidden="true"></i></td> */}
										</tr>
									))
								}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		</>
	)
}

export default ViewShop;