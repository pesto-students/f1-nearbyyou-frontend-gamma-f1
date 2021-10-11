import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ErrorAlert, SuccessAlert } from '../Redux/SnackBar/SnackbarSlice';
import { registerAPI, registerStatus, LoginAPI, loginStatus } from '../Redux/Client/Register-Login/Register-LoginSlice'

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
        c_address: '',
        c_password: '',
        c_rePassword: '',
        c_doorNumber: '',
        c_street: '',
        c_area: '',
        c_city: '',
        c_state: '',
        c_pincode: '',
        username: '',
        password: ''
    })

    //Useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                c_address: '',
                c_password: '',
                c_rePassword: '',
                c_doorNumber: '',
                c_street: '',
                c_area: '',
                c_city: '',
                c_state: '',
                c_pincode: '',
                username: '',
                password: ''
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
            dispatch(registerAPI({ user_name: form.c_fname + " " + form.c_lname, user_role: form.register_type, email: form.c_email, contact_number: form.c_contact, password: form.c_password, doorNumber: form.c_doorNumber, street: form.c_street, area: form.c_area, city: form.c_city, state: form.c_state, pincode: form.c_pincode}));
        } else {
            dispatch(ErrorAlert('Password and Repassword Not Match !!'));
        }
    }

    //Login Click
    const loginClick = (e) => {
        e.preventDefault();
        if (form.username != "" && form.password != "") {
            dispatch(LoginAPI({ username: form.username, password: form.password }));
        } else {
            dispatch(ErrorAlert('Please Enter Username and Password !!'));
        }

    }
    
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
                                                    <input type="text" id="fname" name="c_fname" class="form-control" required onChange={handleChange} value={form.c_fname} />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="text-black" for="lname">Last Name</label>
                                                    <input type="text" id="lname" name="c_lname" class="form-control" required onChange={handleChange} value={form.c_lname} />
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label class="text-black" for="email">Email</label>
                                                    <input type="email" id="email" name="c_email" class="form-control" required onChange={handleChange} value={form.c_email} />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="text-black" for="contact">Contact No</label>
                                                    <input type="text" id="contact" name="c_contact" class="form-control" required onChange={handleChange} value={form.c_contact} />
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-4">
                                                    <label class="text-black" for="c_doorNumber">Door Number</label>
                                                    <input type="text" id="c_doorNumber" name="c_doorNumber" class="form-control" required onChange={handleChange} value={form.c_doorNumber} />
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-black" for="Street">Street</label>
                                                    <input type="text" id="Street" name="c_street" class="form-control" required onChange={handleChange} value={form.c_street} />
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-black" for="area">Area</label>
                                                    <input type="text" id="area" name="c_area" class="form-control" required onChange={handleChange} value={form.c_area} />
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-4">
                                                    <label class="text-black" for="pincode">Pincode</label>
                                                    <input type="text" id="pincode" name="c_pincode" class="form-control" required onChange={handleChange} value={form.c_pincode} />
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-black" for="city_town">City</label>
                                                    <select className="form-control" name="c_city" required onChange={handleChange}>
                                                        <option>Select City</option>
                                                        <option value="surat">Surat</option>
                                                        <option value="bardoli">Bardoli</option>
                                                    </select>
                                                    {/* <input type="text" id="city_town" name="c_city" class="form-control" required onChange={handleChange} value={form.c_city} /> */}
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-black" for="state">State</label>
                                                    <select className="form-control" name="c_state"required onChange={handleChange}>
                                                        <option>Select State</option>
                                                        <option value="gujarat">Gujarat</option>
                                                        <option value="mumbai">Mumbai</option>
                                                    </select>
                                                    {/* <input type="text" id="state" name="c_state" class="form-control" required onChange={handleChange} value={form.c_state} /> */}
                                                </div>
                                            </div>
                                            {/* <div class="row form-group">
                                                <div class="col-md-12">
                                                    <label class="text-black" for="c_address">Address</label>
                                                    <textarea name="c_address" className="form-control" required onChange={handleChange}>
                                                        {form.c_address}
                                                    </textarea>
                                                </div>
                                            </div> */}
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label class="text-black" for="pass1">Password</label>
                                                    <input type="password" name="c_password" id="pass1" class="form-control" onChange={handleChange} required value={form.c_password} />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="text-black" for="pass2">Re-type Password</label>
                                                    <input type="password" name="c_rePassword" id="pass2" class="form-control" onChange={handleChange} required value={form.c_rePassword} />
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-12">
                                                    <input type="submit" value="Sign Up" class="btn btn-primary btn-md text-white" />
                                                </div>
                                            </div>
                                        </>)
                                }
                                {
                                    form.register_type == "vendor" && (
                                        <>
                                            <div class="row form-group">
                                                <div class="col-md-6 mb-3 mb-md-0">
                                                    <label class="text-black" for="fname">First Name</label>
                                                    <input type="text" id="fname" class="form-control" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="text-black" for="lname">Last Name</label>
                                                    <input type="text" id="lname" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-12">
                                                    <label class="text-black" for="email">Email</label>
                                                    <input type="email" id="email" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-12">
                                                    <input type="submit" value="Sign Up" class="btn btn-primary btn-md text-white" />
                                                </div>
                                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;