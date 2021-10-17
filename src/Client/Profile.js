import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { profileStatus, editProfile } from '../Redux/Client/Listing/ListingSlice';
import service from '../Common_Pages/Service';
import { ErrorAlert, SuccessAlert } from '../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';
// import S3FileUpload from 'react-s3';
// import { uploadFile } from 'react-s3';

// const config = {
//     bucketName: 'myBucket',
//     dirName: 'media', /* optional */
//     region: 'eu-west-1',
//     accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
//     secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
// }

// onst config = {
//     bucketName: 'myBucket',
//     dirName: 'media', / optional /
//     region: 'eu-west-1',
//     accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
//     secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
//     s3Url: 'https:/your-custom-s3-url.com/', / optional /
// }

const __DEV__ = document.domain === 'localhost'

const Profile = () => {

    //object
    const dispatch = useDispatch();
    const history = useHistory();

    //get data from store
    const { isProfileStatus } = useSelector(state => state.listing);

    //State Manage
    const [binaryImage, setBinaryImage] = useState();
    const [images, setimages] = useState([{ preview: "/assets/no_image2.png" }]);
    const [uploadFileName, setUploadFileName] = useState("Choose Company Logo");
    const [form, setForm] = useState({
        customerId: '',
        fname: '',
        lname: '',
        email: '',
        contact: '',
        address: '',
        door_number: '',
        street: '',
        area: '',
        pincode: '',
        city: '',
        state: '',
    })

    //Useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(profileStatus(false));
        let userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));

        setForm({
            ...form,
            customerId: userData.id,
            fname: userData?.user_name?.split(" ")[0],
            lname: userData?.user_name?.split(" ")[1],
            email: userData?.email,
            contact: userData?.contact_number,
            door_number: userData?.custDetails[0]?.door_number,
            street: userData?.custDetails[0]?.street,
            area: userData?.custDetails[0]?.area,
            city: userData?.custDetails[0]?.city_town,
            state: userData?.custDetails[0]?.state,
            pincode: userData?.custDetails[0]?.pincode,
        })
    }, [])

    useEffect(() => {
        if (isProfileStatus) {
            let userInfo = {
                id: form.customerId,
                contact: form.contact,
                email: form.email,
                name: form.fname + " " + form.lname,
                role: 'customer'
            }
            localStorage.setItem('Near_By_You_Client', JSON.stringify(userInfo));
            dispatch(profileStatus(false));
            history.push('/');
        }
    }, [isProfileStatus])

    //Function

    //Handle Chnage
    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log("name :- ", name);
        console.log("value :- ", value);

        setForm({
            ...form,
            [name]: value
        })

    }

    //Handle Save
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("form : - ", form);
        dispatch(editProfile({ user_name: form.fname + " " + form.lname, contact_number: form.contact, door_number: form.door_number, street: form.street, area: form.area, pincode: form.pincode, city: form.city, state: form.state }))
    }

    // //Upload File
    const uploadFileButton = async (e) => {
        console.log("e :- ", e.target.files[0]);

        let file = e.target.files[0];
        let url = URL.createObjectURL(e.target.files[0]);

        const response = await service.convertBase64(file);

        if (response.status) {
            setUploadFileName(response.name);
            setimages([{ preview: url }]);
            setBinaryImage(response.file);
            dispatch(SuccessAlert('Image Upload Successfully'));

            var formData = new FormData();
            formData.append('imageData', response.file);

            const responseData = await axios.post("customer/uploadImage", formData);

        } else {
            dispatch(ErrorAlert('Erro in upload image !! Please try again'))
        }

        // uploadFile(e.target.files, config)
        //     .then((data) => {
        //         console.log("Success :- ", data);
        //     })
        //     .catch((err) => {
        //         console.log("err :- ", err)
        //     })
    }

    //Payment Click
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

    const displayRazorpay = async() =>{
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:8080/api/razorpay', { method: 'POST' }).then((t) =>
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
				name:'Bhargav Patel',
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
    console.log("binaryImage :- ", binaryImage);

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
                                    <h1>Profile</h1>
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
                        <div class="col-md-7 mb-5" data-aos="fade">
                            <form method="post" onSubmit={onSubmit} class="p-5 bg-white" style={{ marginTop: '-150px' }}>
                                <div class="row form-group">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <label class="text-black" for="fname">Upload File</label>
                                        <input type="file" class="form-control" onChange={uploadFileButton} />
                                    </div>
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <label class="text-black" for="fname">Payment Demo</label>
                                        <input onClick={displayRazorpay} type="button" value="Donot 499" class="form-control btn btn-primary btn-md text-white" />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <label class="text-black" for="fname">First Name</label>
                                        <input type="text" id="fname" name="fname" class="form-control" required onChange={handleChange} value={form.fname} />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black" for="lname">Last Name</label>
                                        <input type="text" id="lname" name="lname" class="form-control" required onChange={handleChange} value={form.lname} />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-6">
                                        <label class="text-black" for="email">Email</label>
                                        <input type="email" id="email" name="email" class="form-control" required disabled value={form.email} />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black" for="contact">Contact</label>
                                        <input type="text" id="contact" name="contact" class="form-control" required onChange={handleChange} value={form.contact} />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-4">
                                        <label class="text-black" for="door_number">Door Number</label>
                                        <input type="text" id="door_number" name="door_number" class="form-control" required onChange={handleChange} value={form.door_number} />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-black" for="street">Street</label>
                                        <input type="text" id="street" name="street" class="form-control" required onChange={handleChange} value={form.street} />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-black" for="area">Area</label>
                                        <input type="text" id="area" name="area" class="form-control" required onChange={handleChange} value={form.area} />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-4">
                                        <label class="text-black" for="pincode">Pincode</label>
                                        <input type="text" id="pincode" name="pincode" class="form-control" required onChange={handleChange} value={form.pincode} />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-black" for="city">City</label>
                                        <select name="city" required onChange={handleChange} value={form.city} class="form-control">
                                            <option value="">Select...</option>
                                            <option value="surat">Surat</option>
                                            <option value="bardoli">Bardoli</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-black" for="stae">State</label>
                                        <select name="state" required onChange={handleChange} value={form.state} class="form-control">
                                            <option value="">Select...</option>
                                            <option value="gujarat">Gujarat</option>
                                            <option value="maharashtra">Maharashtra</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <input type="submit" value="Send Message" class="btn btn-primary btn-md text-white" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5" data-aos="fade" data-aos-delay="100">
                            <div class="p-4 mb-3 bg-white">
                                <p class="mb-0 font-weight-bold">Your Profile</p>
                                <NavLink to="/viewTickets"><p class="mb-0 font-weight-bold mt-5">View Your Ticket</p></NavLink>
                                {/* <p class="mb-4"><a href="#">+1 232 3235 324</a></p>
                                <p class="mb-0 font-weight-bold">Email Address</p>
                                <p class="mb-0"><a href="#"><span class="__cf_email__"
                                    data-cfemail="41382e3433242c20282d01252e2c20282f6f222e2c">[email&#160;protected]</span></a>
                                </p> */}
                            </div>
                            {/* <div class="p-4 mb-3 bg-white">
                                <h3 class="h5 text-black mb-3">More Info</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia
                                    architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat
                                    quaerat eos qui, libero neque sed nulla.</p>
                                <p><a href="#" class="btn btn-primary px-4 py-2 text-white">Learn More</a></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;