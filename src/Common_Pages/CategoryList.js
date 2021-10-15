import Rect, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryAPI, categoryStatus } from '../Redux/Client/Listing/ListingSlice';

const CategoryList = ({ type, searchDrop }) => {


    //Objects
    const dispatch = useDispatch();

    //get data from store
    const { avaliableCategory, categoryResult } = useSelector(state => state.listing);

    //State Manage
    const [avaCategory, setAvaCategory] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [categoryDrop, setCategoryDrop] = useState('');

    //Useeffects
    useEffect(() => {
        dispatch(categoryAPI({ type: type, selectCategory: categoryDrop }));
    }, [categoryDrop])

    useEffect(() => {
        setCategoryList(categoryResult);
    }, [categoryResult])

    useEffect(() => {
        setAvaCategory(avaliableCategory);
    }, [avaliableCategory])

    //Functions
    const onCategorySearch = (e) => {
        const { name, value } = e.target;
        console.log("value");
        setCategoryDrop(value);
    }

    return (
        <>
            {
                searchDrop && (
                    <div class="row form-group justify-content-end">
                        <div className="col-md-3">
                            <select class="form-control" value={categoryDrop} name="register_type" onChange={onCategorySearch}>
                                <option value="">All Category</option>
                                {
                                    avaCategory.length > 0 && avaCategory.map((item, index) => (
                                        <option value={item._id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                )
            }

            <div class="site-section" style={{ paddingTop: '20px' }}>
                <div class="container">
                    {
                        type == 'popular' && (
                            <div class="row justify-content-center mb-5">
                                <div class="col-md-7 text-center border-primary">
                                    {/* <h2 class="font-weight-light text-primary">Popular Categories</h2> */}
                                    <h2 class="font-weight-light text-primary">Categories</h2>
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
                                    <NavLink
                                        to={{
                                            pathname: `/category/${item.name}`,
                                            categoryProps: {
                                                categoryId: item._id
                                            }
                                        }}
                                        class="popular-category h-100">
                                        <span class="icon mb-3"><span class='flaticon-flower'></span></span>
                                        <span class="caption mb-2 d-block">{item.name}</span>
                                        <span class="number">10</span>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>


                    {
                        type == 'popular' && (
                            <div class="row mt-5 justify-content-center tex-center">
                                <div class="col-md-4">
                                    <NavLink to='/category' class="btn btn-block btn-outline-primary btn-md px-5">View AllCategories</NavLink>
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