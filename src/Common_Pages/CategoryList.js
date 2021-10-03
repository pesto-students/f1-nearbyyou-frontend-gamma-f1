import Rect, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CategoryList = ({ data, type }) => {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        if (data?.length > 0) {
            setCategoryList(data);
        }
    }, [data])

    return (
        <>
            <div class="site-section">
                <div class="container">
                    {
                        type == 'popular' && (
                            <div class="row justify-content-center mb-5">
                                <div class="col-md-7 text-center border-primary">
                                    <h2 class="font-weight-light text-primary">Popular Categories</h2>
                                    <p class="color-black-opacity-5">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        )
                    }
                    <div class="row align-items-stretch">
                        {
                            categoryList?.length > 0 && categoryList.map((item, index) => (
                                <div class="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2" key={index} style={{ marginTop: '25px' }}>
                                    <NavLink to='/app/listings' class="popular-category h-100">
                                        <span class="icon mb-3"><span class={item.image}></span></span>
                                        <span class="caption mb-2 d-block">{item.name}</span>
                                        <span class="number">{item.count}</span>
                                    </NavLink>
                                </div>
                            ))
                        }
                        {
                            categoryList?.length > 0 && categoryList.map((item, index) => (
                                <div class="col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2" key={index} style={{ marginTop: '25px' }}>
                                    <NavLink to='/app/listings' class="popular-category h-100">
                                        <span class="icon mb-3"><span class={item.image}></span></span>
                                        <span class="caption mb-2 d-block">{item.name}</span>
                                        <span class="number">{item.count}</span>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>


                    {
                        type == 'popular' && (
                            <div class="row mt-5 justify-content-center tex-center">
                                <div class="col-md-4">
                                    <NavLink to='/viewCategory' class="btn btn-block btn-outline-primary btn-md px-5">View AllCategories</NavLink>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </>
    )
}

export default CategoryList;