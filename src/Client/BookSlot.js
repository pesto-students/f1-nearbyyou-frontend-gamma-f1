import React,{useEffect} from 'react';

const BookSlot = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

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
                                    <h1>Book Slot For</h1>
                                    <p data-aos="fade-up" data-aos-delay="100">Jones Grill &amp; Restaurants</p>
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
                            <form action="#" class="p-5 bg-white" style={{ marginTop: '-150px' }}>
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
                                        <label class="text-black" for="subject">Subject</label>
                                        <input type="subject" id="subject" class="form-control" />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="7" class="form-control"
                                            placeholder="Write your notes or questions here..."></textarea>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <input type="submit" value="Book Slot Request" class="btn btn-primary btn-md text-white" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5" data-aos="fade" data-aos-delay="100">
                            <div class="p-4 mb-3 bg-white">
                                <p class="mb-0 font-weight-bold">Address</p>
                                <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                <p class="mb-0 font-weight-bold">Phone</p>
                                <p class="mb-4"><a href="#">+1 232 3235 324</a></p>
                                <p class="mb-0 font-weight-bold">Email Address</p>
                                <p class="mb-0"><a href="#"><span class="__cf_email__"
                                    data-cfemail="41382e3433242c20282d01252e2c20282f6f222e2c">[email&#160;protected]</span></a>
                                </p>
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

export default BookSlot;