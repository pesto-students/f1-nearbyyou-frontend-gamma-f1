import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ErrorAlert, SuccessAlert } from '../Redux/SnackBar/SnackbarSlice';
import auth from '../Route/Auth';
import { registerAPI, registerStatus, LoginAPI, loginStatus, GoogleLoginAPi } from '../Redux/Client/Register-Login/Register-LoginSlice'



const Login = () => {

	//object
	const dispatch = useDispatch();
	const history = useHistory();

	//get data from store
	const { value, isUpdatedSuccessfully, isLoginStatus } = useSelector(state => state.register);


	//Manage State
	const [form, setForm] = useState({
		register_type: '',
		c_fname: '',
		c_lname: '',
		c_email: '',
		c_contact: '',
		c_door_number: '',
		c_street: '',
		c_area: '',
		c_pincode: '',
		c_city: '',
		c_state: '',
		c_password: '',
		c_rePassword: '',
		username: '',
		password: '',
		v_category: '',
		v_shopName: ''

	})

	//Useeffect
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		if (auth.isAuthenticated()) {
			history.push('/')
		}
	}, [])


	useEffect(() => {
		dispatch(registerStatus(false));
		dispatch(loginStatus(false));
	}, [])


	useEffect(() => {
		if (isUpdatedSuccessfully) {
			setForm({
				register_type: '',
				c_fname: '',
				c_lname: '',
				c_email: '',
				c_contact: '',
				c_door_number: '',
				c_street: '',
				c_area: '',
				c_pincode: '',
				c_city: '',
				c_state: '',
				c_password: '',
				c_rePassword: '',
				username: '',
				password: '',
				v_category: '',
				v_shopName: ''
			});
			dispatch(registerStatus(false));
		}
	}, [isUpdatedSuccessfully])

	useEffect(() => {
		if (isLoginStatus) {
			setForm({
				username: '',
				password: ''
			});
			dispatch(loginStatus(false));
			history.push('/');
		}
	}, [isLoginStatus])

	//Functions

	//Handle Change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}

	//Register Click
	const registerClick = (e) => {
		e.preventDefault();
		if (form.c_password == form.c_rePassword) {
			dispatch(registerAPI(
				{
					user_name: form.c_fname + " " + form.c_lname,
					user_role: form.register_type,
					email: form.c_email,
					contact_number: form.c_contact,
					door_number: form.c_door_number,
					street: form.c_street,
					area: form.c_area,
					pincode: form.c_pincode,
					city: form.c_city,
					state: form.c_state,
					password: form.c_password,
					vendor_category: form.v_category,
					shop_name: form.v_shopName
				}
			));
		} else {
			dispatch(ErrorAlert('Password and Repassword Not Match !!'));
		}
	}

	//Login Click
	const loginClick = (e) => {
		e.preventDefault();
		dispatch(LoginAPI({ username: form.username, password: form.password }));
	}




	const onSignIn = (user_role) => {
		dispatch(GoogleLoginAPi({user_role: user_role}));


	}

	// const signOutg = () => {
	// 	signOut(auth).then(() => {
	// 		console.log("user is logged out")
	// 	}).catch((error) => {
	// 		// An error happened.
	// 	});
	// }



	return (
		<>
			<div class="site-blocks-cover inner-page-cover overlay"
				style={{ backgroundImage: 'url(images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }} data-aos="fade"
				data-stellar-background-ratio="0.5">
				<div class="container">
					<div class="row align-items-center justify-content-center text-center">
						<div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
							<div class="row justify-content-center">
								<div class="col-md-8 text-center">
									<h1>Sign Up / Login</h1>
									<p data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Cupiditate beatae quisquam perspiciatis adipisci ipsam quam.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="site-section bg-light">
				<div class="container">
					<div class="row">
						<div class="col-md-6 mb-5">
							<form method="post" class="p-5 bg-white" style={{ marginTop: '-150px' }} onSubmit={registerClick}>
								<div class="row justify-content-center mb-3">
									<div class="col-md-7 text-center border-primary">
										<h2 class="font-weight-light text-primary">Register</h2>
									</div>
								</div>
								<div class="row form-group justify-content-center">
									<div class="col-md-6 mb-3 mb-md-0">
										<label class="text-black" for="fname">Please Select</label>
										<select class="form-control" onChange={handleChange} name="register_type" value={form.register_type}>
											<option value="">Please Select</option>
											<option value="customer">Register As Seeker</option>
											<option value="vendor">Register As Vendor</option>
										</select>
									</div>
								</div>
								{
									form.register_type == "customer" && (
										<>
											<div class="row form-group">
												<div class="col-md-6 mb-3 mb-md-0">
													<label class="text-black" for="fname">First Name</label>
													<input type="text" id="fname" name="c_fname" class="form-control" required onChange={handleChange} />
												</div>
												<div class="col-md-6">
													<label class="text-black" for="lname">Last Name</label>
													<input type="text" id="lname" name="c_lname" class="form-control" required onChange={handleChange} />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-6">
													<label class="text-black" for="email">Email</label>
													<input type="email" id="email" name="c_email" class="form-control" required onChange={handleChange} />
												</div>
												<div class="col-md-6">
													<label class="text-black" for="contact">Contact No</label>
													<input type="text" id="contact" name="c_contact" class="form-control" required onChange={handleChange} />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-4">
													<label class="text-black" for="door_number">Door Number</label>
													<input type="text" id="door_number" name="c_door_number" class="form-control" required onChange={handleChange} />
												</div>
												<div class="col-md-4">
													<label class="text-black" for="street">Street</label>
													<input type="text" id="street" name="c_street" class="form-control" required onChange={handleChange} />
												</div>
												<div class="col-md-4">
													<label class="text-black" for="area">Area</label>
													<input type="text" id="area" name="c_area" class="form-control" required onChange={handleChange} />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-4">
													<label class="text-black" for="pincode">Pincode</label>
													<input type="text" id="pincode" name="c_pincode" class="form-control" required onChange={handleChange} />
												</div>
												<div class="col-md-4">
													<label class="text-black" for="city">City</label>
													<select name="c_city" required onChange={handleChange} class="form-control">
														<option value="">Select...</option>
														<option value="surat">Surat</option>
														<option value="bardoli">Bardoli</option>
													</select>
													{/* <input type="text" id="city" name="c_city" class="form-control" required onChange={handleChange} /> */}
												</div>
												<div class="col-md-4">
													<label class="text-black" for="stae">State</label>
													<select name="c_state" required onChange={handleChange} class="form-control">
														<option value="">Select...</option>
														<option value="gujarat">Gujarat</option>
														<option value="maharashtra">Maharashtra</option>
													</select>
													{/* <input type="text" id="stae" name="c_state" class="form-control" required onChange={handleChange} /> */}
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-6">
													<label class="text-black" for="pass1">Password</label>
													<input type="password" name="c_password" id="pass1" class="form-control" onChange={handleChange} required />
												</div>
												<div class="col-md-6">
													<label class="text-black" for="pass2">Re-type Password</label>
													<input type="password" name="c_rePassword" id="pass2" class="form-control" onChange={handleChange} required />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<input type="submit" value="Sign Up" class="btn btn-primary btn-md text-white" />
												</div>
											</div>
											<h3> OR </h3>
											<button onClick={()=>onSignIn("customer")} class="btn btn-outline-primary">Sign in with google</button>
										</>)

								}
								{
									form.register_type == "vendor" && (
										<>
											<div class="row form-group">
												<div class="col-md-6 mb-3 mb-md-0">
													<label class="text-black" for="fname">First Name</label>
													<input type="text" id="fname" class="form-control" name="c_fname" required onChange={handleChange} />
												</div>
												<div class="col-md-6">
													<label class="text-black" for="lname">Last Name</label>
													<input type="text" id="lname" class="form-control" name="c_lname" required onChange={handleChange} />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<label class="text-black" for="email">Email</label>
													<input type="email" id="email" class="form-control" name="c_email" required onChange={handleChange} />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<label class="text-black" for="contact">Contact No</label>
													<input type="text" id="contact" name="c_contact" class="form-control" required onChange={handleChange} />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<label class="text-black" for="pass1">Password</label>
													<input type="password" name="c_password" id="pass1" class="form-control" onChange={handleChange} required />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<label class="text-black" for="pass2">Re-type Password</label>
													<input type="password" name="c_rePassword" id="pass2" class="form-control" onChange={handleChange} required />
												</div>
											</div>
											<div class="row form-group justify-content-center">
												<div class="col-md-12 mb-3 mb-md-0">
													<label class="text-black" for="fname">Select Category</label>
													<select class="form-control" onChange={handleChange} name="v_category" value={form.v_category}>
														<option value="">Please Select</option>
														<option value="salon">Salon</option>
														<option value="plumbers">Plumbers</option>
														<option value="electrician">Electrician</option>
														<option value="carpenter">Carpenter</option>
														<option value="pestcontrol">Cleaning Pest and Control</option>
														<option value="painter">Painters</option>
													</select>
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<label class="text-black" for="shop_name">Shop Name</label>
													<input type="text" name="v_shopName" id="shopname" class="form-control" onChange={handleChange} required />
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<input type="submit" value="Sign Up" class="btn btn-primary btn-md text-white" />
												</div>
											</div>
											<h3> OR </h3>
											<button onClick={()=>onSignIn("vendor")} class="btn btn-outline-primary">Sign in with google</button>
										</>)
								}
							</form>
						</div>
						<div class="col-md-6 mb-5 mt-5">

							<form method="post" class="p-5 bg-white" style={{ marginTop: '-150px' }} onSubmit={loginClick}>
								<div class="row justify-content-center mb-3">
									<div class="col-md-7 text-center border-primary">
										<h2 class="font-weight-light text-primary">Login</h2>
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-12">
										<label class="text-black" for="email">Email</label>
										<input type="email" id="email2" name="username" class="form-control" onChange={handleChange} required />
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-12">
										<label class="text-black" for="pass1">Password</label>
										<input type="password" id="pass3" name="password" class="form-control" onChange={handleChange} required />
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-12">
										<input type="submit" value="Log In" class="btn btn-primary btn-md text-white" />
									</div>
								</div>
							</form>

							<button onClick={()=>onSignIn()} class="btn btn-outline-primary">Sign in with google</button>

						</div>

					</div>
				</div>
			</div>
		</>
	)
}
export default Login;