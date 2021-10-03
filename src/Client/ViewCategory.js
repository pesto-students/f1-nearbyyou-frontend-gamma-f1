import React, { useEffect, useState } from 'react'
import CategoryList from '../Common_Pages/CategoryList'

const ViewCategory = () => {

    const [categoryList, setCategoryList] = useState([
        {
            image: 'flaticon-hotel',
            name: 'Hotels',
            count: '489'
        },
        {
            image: 'flaticon-microphone',
            name: 'Events',
            count: '482'
        },
        {
            image: 'flaticon-flower',
            name: 'Spa',
            count: '194'
        },
        {
            image: 'flaticon-restaurant',
            name: 'Stores',
            count: '1472'
        },
        {
            image: 'flaticon-cutlery',
            name: 'Restaurants',
            count: '439'
        },
        {
            image: 'flaticon-bike',
            name: 'Others',
            count: '692'
        },
    ])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

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
                                    <h1>View All Categorys</h1>
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
                    <CategoryList data={categoryList} />
                </div>
            </div>
        </>
    )
}

export default ViewCategory;