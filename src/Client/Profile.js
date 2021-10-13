import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { profileStatus, editProfile } from '../Redux/Client/Listing/ListingSlice';
// import S3FileUpload from 'react-s3';
import { uploadFile } from 'react-s3';

const config = {
    bucketName: 'myBucket',
    dirName: 'media', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
    secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
}

// onst config = {
//     bucketName: 'myBucket',
//     dirName: 'media', / optional /
//     region: 'eu-west-1',
//     accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
//     secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
//     s3Url: 'https:/your-custom-s3-url.com/', / optional /
// }

const Profile = () => {

    //object
    const dispatch = useDispatch();
    const history = useHistory();

    //get data from store
    const { isProfileStatus } = useSelector(state => state.listing);

    //State Manage
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
            fname: userData?.name?.split(" ")[0],
            lname: userData?.name?.split(" ")[1],
            email: userData?.email,
            contact: userData?.contact,
            address: '',
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

    //Upload File
    const uploadFileButton = (e) => {
        console.log("e :- ", e.target.files[0]);
        uploadFile(e.target.files, config)
            .then((data) => {
                console.log("Success :- ", data);
            })
            .catch((err) => {
                console.log("err :- ", err)
            })
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
                            {/* <input type="file" onChange={uploadFileButton}  /> */}
                            <form method="post" onSubmit={onSubmit} class="p-5 bg-white" style={{ marginTop: '-150px' }}>
                                <div class="row form-group">
                                    <div class="col-md-12 mb-3 mb-md-0">
                                        <label class="text-black" for="fname">File Upload</label>
                                        <input type="file" id="fname" name="fname" class="form-control" onChange={uploadFileButton} />
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
                                        <input type="text" id="street" name="street" class="form-control" required onChange={handleChange} value={form.strert} />
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
                                <NavLink to="/app/viewTickets"><p class="mb-0 font-weight-bold mt-5">View Your Ticket</p></NavLink>
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