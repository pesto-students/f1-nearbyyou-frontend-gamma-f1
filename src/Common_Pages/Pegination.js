import React from 'react';
import Pagination from "react-js-pagination";

const Pegination = ({totalItemsCount, onChange, activePage}) => {

    return (
        <div class="col-12 mt-5 text-center">
            <div class="custom-pagination">
                <Pagination
                    firstPageText={<i className='fa fa-angle-double-left text-success' />}
                    lastPageText={<i className='fa fa-angle-double-right text-success' />}
                    nextPageText={<i className='fa fa-angle-right text-success' />}
                    prevPageText={<i className='fa fa-angle-left text-success' />}
                    activePage={activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={5}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Pegination