import React, { useState, useEffect } from 'react';
import CategoryList from '../Common_Pages/CategoryList';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {

	//Object 
	let history = useHistory();

	//get data from store
	const { categoryResult } = useSelector(state => state.listing);

	//State Manage
	const [categoryList, setCategoryList] = useState([]);
	const [searchForm, setSearchForm] = useState({
		freeText: '',
		pincode: '',
		category: '',
		categoryId: '',
		categoryName: ''
	})

	//Useeffect
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [])

	useEffect(() => {
		if (categoryResult.length > 0) {
			setCategoryList(categoryResult)
		}
	}, [categoryResult])

	//Function

	//Search Handle Chnage
	const searchHandleChange = (e) => {
		const { name, value } = e.target;

		if (name == "category") {

			const cat = value.split('||');

			setSearchForm({
				...searchForm,
				category: value,
				categoryId: cat[0],
				categoryName: cat[1]
			})
		} else {
			setSearchForm({
				...searchForm,
				[name]: value
			})
		}
	}

	//Click On Search
	const searchEvent = async () => {
		history.push(`/app/${searchForm.categoryName}/${searchForm.categoryId}/pincode/${searchForm.pincode}`)
	}

	return (
		<>
			<div class="site-blocks-cover overlay" style={{ backgroundImage: 'url(images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }}
				data-aos="fade" data-stellar-background-ratio="0.5">
				<div class="container">
					<div class="row align-items-center justify-content-center text-center">
						<div class="col-md-10">
							<div class="row justify-content-center mb-4">
								<div class="col-md-10 text-center">
									<h1 data-aos="fade-up">Find Nearby <span class="typed-words"></span></h1>
									<p data-aos="fade-up" class=" w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Porro provident corporis consequuntur et totam.</p>
								</div>
							</div>
							<div class="form-search-wrap p-2" data-aos="fade-up" data-aos-delay="200">
								<form>
									<div class="row align-items-center">
										<div class="col-lg-12 col-xl-4 no-sm-border border-right">
											<input type="text" name="freeText" class="form-control" placeholder="What are you looking for?" value={searchForm.freeText} onChange={searchHandleChange} />
										</div>
										<div class="col-lg-12 col-xl-3 no-sm-border border-right">
											<div class="wrap-icon">
												<span class="icon icon-room"></span>
												<input type="number" name="pincode" class="form-control" value={searchForm.pincode} placeholder="Pincode" onChange={searchHandleChange} />
											</div>
										</div>
										<div class="col-lg-12 col-xl-3">
											<div class="select-wrap">
												<span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
												<select class="form-control" name="category" value={searchForm.category} onChange={searchHandleChange}>
													<option>All Category</option>
													{
														categoryList?.length > 0 && categoryList.map((item, index) => (
															<option value={`${item._id}||${item.name}`} >{item.name}</option>
														))
													}
												</select>
											</div>
										</div>
										<div class="col-lg-12 col-xl-2 ml-auto text-right">
											<input type="button" class="btn text-white btn-primary" value="Search" onClick={searchEvent} />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<CategoryList type='popular' />

			<div class="site-section">
				<div class="container">
					<div class="row">
						<div class="col-md-6 mb-5">
							<img src="images/ximg_1.jpg.pagespeed.ic.1JqK4ln2vg.jpg"
								alt="Free Website Template by Free-Template.co" class="img-fluid rounded" />
						</div>
						<div class="col-md-5 ml-auto">
							<h2 class="text-primary mb-3">Why Us</h2>
							<div class="row mt-4">
								<div class="col-12">
									<div class="border p-3 rounded mb-2">
										<a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false"
											aria-controls="collapse-1" class="accordion-item h5 d-block mb-0">How to list my
											item?</a>
										<div class="collapse" id="collapse-1">
											<div class="pt-2">
												<p class="mb-0">Far far away, behind the word mountains, far from the countries
													Vokalia and Consonantia, there live the blind texts. Separated they live in
													Bookmarksgrove right at the coast of the Semantics, a large language ocean.
												</p>
											</div>
										</div>
									</div>
									<div class="border p-3 rounded mb-2">
										<a data-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false"
											aria-controls="collapse-4" class="accordion-item h5 d-block mb-0">Is this available
											in my country?</a>
										<div class="collapse" id="collapse-4">
											<div class="pt-2">
												<p class="mb-0">A small river named Duden flows by their place and supplies it
													with the necessary regelialia. It is a paradisematic country, in which
													roasted parts of sentences fly into your mouth.</p>
											</div>
										</div>
									</div>
									<div class="border p-3 rounded mb-2">
										<a data-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false"
											aria-controls="collapse-2" class="accordion-item h5 d-block mb-0">Is it free?</a>
										<div class="collapse" id="collapse-2">
											<div class="pt-2">
												<p class="mb-0">Even the all-powerful Pointing has no control about the blind
													texts it is an almost unorthographic life One day however a small line of
													blind text by the name of Lorem Ipsum decided to leave for the far World of
													Grammar.</p>
											</div>
										</div>
									</div>
									<div class="border p-3 rounded mb-2">
										<a data-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false"
											aria-controls="collapse-3" class="accordion-item h5 d-block mb-0">How the system
											works?</a>
										<div class="collapse" id="collapse-3">
											<div class="pt-2">
												<p class="mb-0">The Big Oxmox advised her not to do so, because there were
													thousands of bad Commas, wild Question Marks and devious Semikoli, but the
													Little Blind Text didn’t listen. She packed her seven versalia, put her
													initial into the belt and made herself on the way.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="site-section">
				<div class="container">
					<div class="row justify-content-center mb-5">
						<div class="col-md-7 text-center border-primary">
							<h2 class="font-weight-light text-primary">How It Works</h2>
							<p class="color-black-opacity-5">Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
							<div class="how-it-work-step">
								<div class="img-wrap">
									<img src="images/step-1.svg" alt="Free website template by Free-Template.co"
										class="img-fluid" />
								</div>
								<span class="number">1</span>
								<h3>Decide What To Do</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
									there live the blind texts.</p>
							</div>
						</div>
						<div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
							<div class="how-it-work-step">
								<div class="img-wrap">
									<img src="images/step-2.svg" alt="Free website template by Free-Template.co"
										class="img-fluid" />
								</div>
								<span class="number">2</span>
								<h3>Find What You Want</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
									there live the blind texts.</p>
							</div>
						</div>
						<div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
							<div class="how-it-work-step">
								<div class="img-wrap">
									<img src="images/step-3.svg" alt="Free website template by Free-Template.co"
										class="img-fluid" />
								</div>
								<span class="number">3</span>
								<h3>Explore Amazing Places</h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
									there live the blind texts.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)

}
export default Home;