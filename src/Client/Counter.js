import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, getData } from '../Redux/Client/ClientSlice';
import { ErrorAlert, SuccessAlert } from '../Redux/SnackBar/SnackbarSlice';

const Counter = () => {

    //object
    const dispatch = useDispatch();

    //get data from store
    const { value, userData } = useSelector(state => state.counter);

    //manage State
    const [state, setState] = useState([]);

    //useffects
    useEffect(() => {
        setState(userData);
    }, [userData])

    //function
    const callApi = () => {
        dispatch(getData({ price: 10 }));
        dispatch(SuccessAlert('Insert Successfully'));
        // dispatch(ErrorAlert('Insert Successfully'));
    }

    return (
        <div>
            <div className="flex">
                <div>
                    <input type="button" value="+" onClick={() => dispatch(increment())} />
                </div>
                <div>
                    <input type="number" name="amount" value={value} readOnly />
                </div>
                <div>
                    <input type="button" value="-" onClick={() => dispatch(decrement())} />
                </div>
            </div>
            <div>
                <div className="mt-20">
                    <input type="button" value="Call API" onClick={callApi} />
                </div>
                <div className="mt-20">
                    {
                        state?.length > 0 && state.map((item, index) => (
                            <div>
                                {index+1} {item.name} {item.username}
                            </div>
                        ))
                    }
                    </div>
            </div>
        </div>
    )
}

export default Counter