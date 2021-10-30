import Rect, { useEffect, useState, useCallback } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchAPI, searchStatus, getCategoryIDAPI } from '../Redux/Client/Listing/ListingSlice';
import { debounce } from "lodash";
import NoDataFound from './NoDataFound';
import ReactStars from "react-rating-stars-component";
import Pegination from '../Common_Pages/Pegination';

const ShopList = ({ filter }) => {

    //object
    const dispatch = useDispatch();
    const history = useHistory();
    const { categoryName, pincode } = useParams();

    //get data from store
    const { avaliableCategory, searchResult, categoryID } = useSelector(state => state.listing);

    console.log("searchResult: -", searchResult);

    //State Manage
    const [activePage, setActivePage] = useState(1);
    const [tempState, setTempState] = useState(false);
    const [avaCategory, setAvaCategory] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [shopList, setShopList] = useState([
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        },
        {
            image: 'url(/images/ximg_2.jpg.pagespeed.ic.DvTe2qQitC.jpg)',
            category: 'Restaurants',
            shopName: 'Jones Grill & Restaurants',
            address: 'Don St, Brooklyn, New York',
            start: '4',
            reviews: '492',
        }
    ]);
    const [searchForm, setSearchForm] = useState({
        freeText: '',
        pincode: '',
        category: '',
        catID: '',
        catName: '',
    });

    //Useeffect

    useEffect(() => {
        dispatch(getCategoryIDAPI({ cname: categoryName }))
    }, [categoryName])

    useEffect(() => {
        if (categoryID) {
            setSearchForm({
                ...searchForm,
                category: `${categoryID}||${categoryName}`,
                pincode: pincode,
                catID: categoryID,
                catName: categoryName
            })
            dispatch(searchAPI({ freeText: '', pincode: pincode, category: categoryID }))
        }
        // else {
        //     history.push('/')
        // }
    }, [categoryID])

    useEffect(() => {
        setAvaCategory(avaliableCategory);
    }, [avaliableCategory])

    useEffect(() => {
        setAPIData(searchResult);
    }, [searchResult])

    useEffect(() => {
        debounceSearch(searchForm);
    }, [searchForm])

    useEffect(() => {
        let data = APIData;
        let endLength = 0;
        let startLength = (activePage - 1) * 10;
        if (activePage * 10 > data.length) {
            endLength = data.length;
        } else {
            endLength = activePage * 10;
        }

        let viewArray = [];
        for (let i = startLength; i < endLength; i++) {
            viewArray.push(data[i]);
        }

        console.log("viewArray ;- ", viewArray);
        setShopList(viewArray);
    }, [activePage, APIData])

    //Functions
    const searchHandleChange = (e) => {
        const { name, value } = e.target;

        // let tempSearch = { ...searchForm };

        if (name == "category") {

            const cat = value.split('||');

            // tempSearch = {
            //     ...tempSearch,
            //     category: value,
            //     catID: cat[0],
            //     catName: cat[1]
            // }


            setSearchForm({
                ...searchForm,
                category: value,
                catID: cat[0],
                catName: cat[1]
            })
        } else {
            // tempSearch = {
            //     ...tempSearch,
            //     [name]: value
            // }
            setSearchForm({
                ...searchForm,
                [name]: value
            })
        }

        // setSearchForm(tempSearch);

        // debounceSearch(tempSearch);

        console.log("searchForm", searchForm);
    }

    //Debounce Search
    const debounceSearch = useCallback(
        debounce((searchData) => {
            dispatch(searchAPI({ freeText: searchData?.freeText, pincode: searchData?.pincode, category: searchData?.catID }));
        }, 500), []
    );

    //Pegination Changr Function
    const handlePageChange = (data) => {
        console.log("Data :- ", data);
        // getDestinationData(data);
        setActivePage(data);
    }

    console.log("searchForm :- ", searchForm);

    return (
        <>

            {
                filter && (
                    <div class="col-lg-3 mr-auto">
                        <div class="mb-5">
                            <h3 class="h5 text-black mb-3">Filters</h3>
                            <form>
                                <div class="form-group">
                                    <input type="text" name="freeText" class="form-control" placeholder="What are you looking for?" value={searchForm.freeText} onChange={searchHandleChange} />
                                </div>
                                <div class="form-group">
                                    <div class="select-wrap">
                                        <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                                        <select class="form-control" name="category" value={searchForm.category} onChange={searchHandleChange}>
                                            {/* <option value="">All Category</option> */}
                                            {
                                                avaCategory.length > 0 && avaCategory.map((item, index) => (
                                                    <option value={`${item._id}||${item.name}`}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">

                                    <div class="wrap-icon">
                                        <span class="icon icon-room"></span>
                                        <input type="number" name="pincode" class="form-control" value={searchForm.pincode} placeholder="Pincode" onChange={searchHandleChange} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }

            <div class="col-lg-8">

                {
                    !filter && (
                        <h2 class="mb-5 text-primary">More Listings</h2>
                    )
                }

                {
                    shopList?.length > 0 ?
                        <>
                            {shopList?.length > 0 && shopList.map((item, index) => (
                                <>
                                    <div class="d-block d-md-flex listing-horizontal">
                                        <NavLink to={`/category/${searchForm.catName}/shop/${item._id}`} class="img d-block"
                                            style={{ backgroundImage: `url(${item?.shop_image})` }}>
                                            <span class="category">{searchForm.catName}</span>
                                        </NavLink>
                                        <div class="lh-content">
                                            <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                                            <h3><a href="#">{item?.vendorDetail && item?.vendorDetail[0]?.shop_name ? item?.vendorDetail[0]?.shop_name : ''}</a></h3>
                                            <p>{item.shop_city_town} {item.shop_state}</p>
                                            <p className="flex">
                                                <ReactStars
                                                    value={3}
                                                    count={5}
                                                    size={30}
                                                    activeColor="#ffd700"
                                                    isHalf={true}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    classNames='pointerEventNone'
                                                />
                                                <span style={{ marginTop: '15px', marginLeft: '10px' }}>(10 Reviews)</span>
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))}
                            <Pegination onChange={handlePageChange} totalItemsCount={APIData.length} activePage={activePage} />
                        </>
                        :
                        <NoDataFound msg="No Shop Found !!" />
                }
            </div>
        </>
    )
}

export default ShopList;