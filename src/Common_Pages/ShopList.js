import Rect, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

const ShopList = ({ data }) => {

    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        if (data?.length > 0) {
            setShopList(data);
        }
    }, [data])

    return (
        <>
            {
                shopList?.length > 0 && shopList.map((item, index) => (
                    <div class="d-block d-md-flex listing-horizontal">
                        <NavLink to="/app/details" class="img d-block"
                            style={{ backgroundImage: item.image }}>
                            <span class="category">{item.category}</span>
                        </NavLink>
                        <div class="lh-content">
                            <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                            <h3><a href="#">{item.shopName}</a></h3>
                            <p>{item.address}</p>
                            <p>
                                <span class="icon-star text-warning"></span>
                                <span class="icon-star text-warning"></span>
                                <span class="icon-star text-warning"></span>
                                <span class="icon-star text-warning"></span>
                                <span class="icon-star text-secondary"></span>
                                <span>({item.reviews} Reviews)</span>
                            </p>
                        </div>
                    </div>
                ))
            }
            <div class="col-12 mt-5 text-center">
                <div class="custom-pagination">
                    <span>1</span>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <span class="more-page">...</span>
                    <a href="#">10</a>
                </div>
            </div>
        </>
    )
}

export default ShopList;