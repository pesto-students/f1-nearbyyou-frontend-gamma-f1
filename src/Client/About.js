import React,{useEffect} from 'react'

const About = () => {

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
                                    <h1>About Us</h1>
                                    <p data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Cupiditate beatae quisquam perspiciatis adipisci ipsam quam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="images/ximg_1.jpg.pagespeed.ic.1JqK4ln2vg.jpg" alt="Image" class="img-fluid rounded" />
                        </div>
                        <div class="col-md-5 ml-auto">
                            <h2 class="text-primary mb-3">History</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus
                                sed labore dolor enim optio odio at!</p>
                            <p class="mb-4">Adipisci dolore reprehenderit est et assumenda veritatis, ex voluptate odio
                                consequuntur quo ipsa accusamus dicta laborum exercitationem aspernatur reiciendis perspiciatis!
                            </p>
                            <ul class="ul-check list-unstyled success">
                                <li>Adipisci dolore reprehenderit</li>
                                <li>Accusamus dicta laborum</li>
                                <li>Delectus sed labore</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section " data-aos="fade">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-8">
                            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                live the blind texts.</h3>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-4 mx-auto">
                            <h3>Who We Are</h3>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-4 ml-auto">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.</p>
                        </div>
                        <div class="col-md-4">
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                                is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-4 text-left border-primary">
                            <h2 class="font-weight-light text-primary">Our Team</h2>
                            <p class="color-black-opacity-5">Separated they live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-6 mb-4 mb-lg-5">
                            <img src="images/xperson_1.jpg.pagespeed.ic.D085tlybeS.jpg" alt="Image" class="img-fluid mb-3" />
                            <h3 class="h4">Susan Horton</h3>
                            <p class="caption text-primary">Founder</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.</p>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4 mb-lg-5 mt-md-5">
                            <img src="images/xperson_2.jpg.pagespeed.ic.ebJxwWQsTk.jpg" alt="Image" class="img-fluid mb-3" />
                            <h3 class="h4">Jonathan Kennedy</h3>
                            <p class="caption text-primary">Founder</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.It
                                is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4 mb-lg-5">
                            <img src="images/xperson_3.jpg.pagespeed.ic.0sX6QBgNxU.jpg" alt="Image" class="img-fluid mb-3" />
                            <h3 class="h4">Gordon Meyer</h3>
                            <p class="caption text-primary">Lead Developer</p>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4 mb-lg-5 mt-md-5">
                            <img src="images/xperson_4.jpg.pagespeed.ic.3ZfbYjwcXQ.jpg" alt="Image" class="img-fluid mb-3" />
                            <h3 class="h4">Doug Hale Kennedy</h3>
                            <p class="caption text-primary">ProjectManager</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-7 text-center border-primary">
                            <h2 class="font-weight-light text-primary">Frequently Ask Question</h2>
                            <p class="color-black-opacity-5">Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <div class="border p-3 rounded mb-2">
                                <a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false"
                                    aria-controls="collapse-1" class="accordion-item h5 d-block mb-0">How to list my item?</a>
                                <div class="collapse" id="collapse-1">
                                    <div class="pt-2">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse
                                            voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum
                                            velit excepturi possimus odio dolore molestiae officiis aspernatur provident
                                            praesentium.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="border p-3 rounded mb-2">
                                <a data-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false"
                                    aria-controls="collapse-4" class="accordion-item h5 d-block mb-0">Is this available in my
                                    country?</a>
                                <div class="collapse" id="collapse-4">
                                    <div class="pt-2">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse
                                            voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum
                                            velit excepturi possimus odio dolore molestiae officiis aspernatur provident
                                            praesentium.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="border p-3 rounded mb-2">
                                <a data-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false"
                                    aria-controls="collapse-2" class="accordion-item h5 d-block mb-0">Is it free?</a>
                                <div class="collapse" id="collapse-2">
                                    <div class="pt-2">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse
                                            voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum
                                            velit excepturi possimus odio dolore molestiae officiis aspernatur provident
                                            praesentium.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="border p-3 rounded mb-2">
                                <a data-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false"
                                    aria-controls="collapse-3" class="accordion-item h5 d-block mb-0">How the system works?</a>
                                <div class="collapse" id="collapse-3">
                                    <div class="pt-2">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse
                                            voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum
                                            velit excepturi possimus odio dolore molestiae officiis aspernatur provident
                                            praesentium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;