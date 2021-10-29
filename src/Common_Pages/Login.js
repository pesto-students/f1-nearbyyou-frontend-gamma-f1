import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ErrorAlert, SuccessAlert } from '../Redux/SnackBar/SnackbarSlice';
import auth from '../Route/Auth';
import { registerAPI, registerStatus, LoginAPI, loginStatus, GoogleLoginAPi, googleLoginStatus } from '../Redux/Client/Register-Login/Register-LoginSlice';
import { findDOMNode } from 'react-dom';
import { GetAllCategories, allCategoriesStatus } from '../Redux/vendor/Profile/VendorProfileSlice';

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";
const gauth = getAuth();
const provider = new GoogleAuthProvider();



const Login = () => {

	//object
	const dispatch = useDispatch();
	const history = useHistory();

	//get data from store
	const { loginResults, isUpdatedSuccessfully, isLoginStatus, isGoogleLoginStatus, googleloginResults } = useSelector(state => state.register);
	const { allCategoriesResult, isallCategory } = useSelector(state => state.shop);

	const [userLogintype, setUserType] = useState('');

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
			if (loginResults == "vendor") {
				history.push('/vendor/app/home');
			} else {
				history.push('/');
			}
		}
	}, [])


	useEffect(() => {
		dispatch(registerStatus(false));
		dispatch(loginStatus(false));
		dispatch(googleLoginStatus(false));
		dispatch(GetAllCategories({}));
	}, [])

	const [categories, setCategories] = useState('')

	useEffect(() => {
		if (isallCategory) {
			setCategories(allCategoriesResult)
			dispatch(allCategoriesStatus(false))
		}
	}, [isallCategory])



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
			setUserType(loginResults)
			dispatch(loginStatus(false));
			if (loginResults == "vendor") {
				history.push('/vendor/app/home');
			} else {
				history.push('/');
			}
		}
	}, [isLoginStatus])

	useEffect(() => {
		if (isGoogleLoginStatus) {
			setUserType(loginResults)
			dispatch(googleLoginStatus(false))
			if (googleloginResults == "vendor") {
				history.push('/vendor/app/home');
			} else {
				history.push('/');
			}
		}
	}, [isGoogleLoginStatus])

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



	const [userRole , setUserRole] =useState('');
	const onSignIn = (user_role) => {
		setUserRole(user_role);
		signInWithRedirect(gauth, provider);
	}
	getRedirectResult(gauth)
		.then((result) => {
			console.log("atleast getting inside this ")
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			dispatch(GoogleLoginAPi(
				{
					user_name: user.auth.currentUser.displayName,
					email: user.auth.currentUser.email,
					contact_number: user.auth.currentUser.phoneNumber,
					token: user.accessToken,
					user_role: userRole
				}
			));
		}).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
		});

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
												<div class="col-md-12 text-center">
													<input type="submit" value="Sign Up" class="btn btn-primary btn-md text-white" />
												</div>
											</div>
											<div class="p-2 bg-white text-center" onClick={() => onSignIn()}>
												<h3 class="p-3"> OR </h3>
												<img width="40px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
												<button class="btn btn-md btn-outline-primary" style={{ textTransform: 'none' }}>Sign up with google</button>
											</div>
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
														{
															categories?.length > 0 && categories.map((item) => (
																<>
																	<option value={item._id}>{item.name}</option>
																</>
															))
														}
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
												<div class="col-md-12 text-center">
													<input type="submit" value="Sign Up" class="btn btn-primary btn-md text-white " />
												</div>
											</div>
											<div class="p-2 bg-white text-center" onClick={() => onSignIn("vendor")}>
												<h3> OR </h3>
												<img width="40px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
												<button class="btn btn-md btn-outline-primary" style={{ textTransform: 'none' }}>Sign up with google</button>
											</div>
										</>)
								}
							</form>
						</div>
						<div class="col-md-6 mb-5 mt-2">

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
									<div class="col-md-12 text-center">
										<input type="submit" value="Log In" class="btn btn-primary btn-md text-white" />
									</div>
								</div>
							</form>

							<div class="p-2 bg-white text-center" onClick={() => onSignIn()} >
								<h3 class="p-3"> OR </h3>
								<img width="40px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
								<button class="btn btn-md btn-outline-primary" style={{ textTransform: 'none' }}>Sign in with google</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
export default Login;