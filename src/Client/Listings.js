import React, { useEffect, useState } from 'react';
import ShopList from '../Common_Pages/ShopList';
import CategoryList from '../Common_Pages/CategoryList';
import {useParams } from 'react-router-dom';

const Listings = () => {

	//object
    const {categoryId} = useParams();

	//Useeffect
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [categoryId])

	return (
		<>
			<div class="site-blocks-cover inner-page-cover overlay"
				style={{ backgroundImage: 'url(/images/xhero_1.jpg.pagespeed.ic.7aSeOjD_oW.jpg)' }}
				data-aos="fade"
				data-stellar-background-ratio="0.5">
				<div class="container">
					<div class="row align-items-center justify-content-center text-center">
						<div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
							<div class="row justify-content-center">
								<div class="col-md-8 text-center">
									<h1>Listings</h1>
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
						<ShopList filter={true} />
					</div>
				</div>
			</div>

			<CategoryList type='popular' />

		</>
	)
}
export default Listings;