import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {

    let userData = JSON.parse(localStorage.getItem('Near_By_You_Client'));

    return (
        <>
            {
                !userData?.user_name && (
                    <div class="py-5 bg-primary">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7 mr-auto mb-4 mb-lg-0">
                                    <h2 class="mb-3 mt-0 text-white">Let's get started. Create your account</h2>
                                    <p class="mb-0 text-white">Far far away, behind the word mountains, far from the countries Vokalia
                                        and Consonantia, there live the blind texts.</p>
                                </div>
                                <div class="col-lg-4">
                                    <p class="mb-0"><Link to="/login" class="btn btn-primary btn-outline-white text-white btn-md px-5">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 class="footer-heading mb-4">Quick Links</h2>
                                    <ul class="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 class="footer-heading mb-4">Products</h2>
                                    <ul class="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 class="footer-heading mb-4">Features</h2>
                                    <ul class="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 mb-5 mb-lg-0 col-lg-3">
                                    <h2 class="footer-heading mb-4">Follow Us</h2>
                                    <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                                    <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                                    <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                                    <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h2 class="footer-heading mb-4">Subscribe Newsletter</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                live the blind texts.</p>
                            <form action="#" method="post">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control bg-transparent" placeholder="Enter Email"
                                        aria-label="Enter Email" aria-describedby="button-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary text-white" type="button"
                                            id="button-addon2">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row pt-5 mt-5">
                        <div class="col-12 text-md-center text-left">
                            <p>

                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template
                                is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a
                                    href="https://colorlib.com/" target="_blank">Colorlib</a>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;