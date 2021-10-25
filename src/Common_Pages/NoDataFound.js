import React from 'react';

const NoDataFound = ({msg}) => {
    return(
        <>
            <div className="noDataFound">
                <div>{msg}</div>
            </div>
        </>
    )
}

export default NoDataFound;