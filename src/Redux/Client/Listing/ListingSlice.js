import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../SnackBar/SnackbarSlice';
import axios from 'axios';

export const searchAPI = createAsyncThunk('Search API CALL', async ({ freeText, pincode, category }, { dispatch, rejectWithValue }) => {
    console.log("searchAPI :-", { freeText, pincode, category });

    try {
        const response = await axios.post("customer/search",
            {
                params: {
                    freeText: freeText,
                    pincode: pincode,
                    category: category,
                }
            });

        const responseData = response.data;

        if (responseData.status == "success") {
            dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            dispatch(ErrorAlert(responseData.msg));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        console.log("Error :- ", e)
    }
});

export const categoryAPI = createAsyncThunk('Category API CALL', async ({ type }, { dispatch, rejectWithValue }) => {
    console.log("categoryAPI :-", { type });
    try {
        const response = await axios.post("customer/category",
            {
                params: {
                    type: type,
                }
            });
        const responseData = response.data;

        if (responseData.status == "success") {
            dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            dispatch(ErrorAlert(responseData.msg));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        console.log("Error :- ", e)
    }
});

export const detailAPI = createAsyncThunk('Details API CALL', async ({ shopId }, { dispatch, rejectWithValue }) => {
    console.log("DetailAPI :-", { shopId });
    try {
        const response = await axios.post("customer/details",
            {
                params: {
                    shopId: shopId,
                }
            });
        const responseData = response.data;

        if (responseData.status == "success") {
            dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            dispatch(ErrorAlert(responseData.msg));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        console.log("Error :- ", e)
    }
});


export const slice = createSlice({
    name: 'Listing Slice',
    initialState: {
        searchResult: [],
        isSearchStatus: false,
        categoryResult: [],
        isCategoryStatus: false,
        detailResult : [],
        isDetailStatus:false,
    },
    reducers: {
        searchStatus: (state, action) => {
            state.isSearchStatus = action.payload;
        },
        categoryStatus: (state, action) => {
            state.isCategoryStatus = action.payload;
        },
        detailsStatus: (state, action) => {
            state.isDetailStatus = action.payload;
        },
    },
    extraReducers: {
        [searchAPI.fulfilled]: (state, action) => {
            state.isSearchStatus = true;
        },
        [searchAPI.rejected]: (state, action) => {
            state.isSearchStatus = false;
        },
        [categoryAPI.fulfilled]: (state, action) => {
            state.isCategoryStatus = true;
        },
        [categoryAPI.rejected]: (state, action) => {
            state.isCategoryStatus = false;
        },
        [detailAPI.fulfilled]: (state, action) => {
            state.isDetailStatus = true;
        },
        [detailAPI.rejected]: (state, action) => {
            state.isDetailStatus = false;
        },
    }
});

export const { searchStatus, categoryStatus, detailStatus } = slice.actions;

export default slice.reducer;
