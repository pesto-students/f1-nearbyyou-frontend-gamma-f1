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
                    pincode: parseInt(pincode),
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

export const categoryAPI = createAsyncThunk('Category API CALL', async ({ type, selectCategory }, { dispatch, rejectWithValue }) => {
    console.log("categoryAPI :-", { type });
    try {
        const response = await axios.post("customer/category",
            {
                type: type,
                selectCategory: selectCategory
            });
        const responseData = response.data;

        if (responseData.status == "success") {
            // dispatch(SuccessAlert(responseData.msg));
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

export const detailAPI = createAsyncThunk('Details API CALL', async ({ shopID }, { dispatch, rejectWithValue }) => {
    console.log("DetailAPI :-", { shopID });
    try {
        const response = await axios.post("customer/detail",{shopId: shopID});
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

export const ticketAPI = createAsyncThunk('Ticket API CALL', async ({ firstName, lastName }, { dispatch, rejectWithValue }) => {
    console.log("ticketAPi :-", { firstName, lastName });
    try {
        const response = await axios.post("customer/ticket",
            {
                firstName : firstName,
                lastName : lastName
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

export const viewTicketAPI = createAsyncThunk('Ciew Ticket API CALL', async ({ custId }, { dispatch, rejectWithValue }) => {
    console.log("userId :-", { custId });
    try {
        const response = await axios.post("customer/viewTicket",
            {
                custId : custId
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
        avaliableCategory: [],
        isCategoryStatus: false,
        detailResult: [],
        isDetailStatus: false,
        isTicketStatus : false,
        isViewTicketStatus : false,
        viewTicketData : []
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
        ticketStatus: (state, action) => {
            state.isTicketStatus = action.payload;
        },
        viewTicketStatus: (state, action) => {
            state.isViewTicketStatus = action.payload;
        }
    },
    extraReducers: {
        [searchAPI.fulfilled]: (state, action) => {
            state.isSearchStatus = true;
            state.searchResult = action.payload.data.payload.data.data;
        },
        [searchAPI.rejected]: (state, action) => {
            state.isSearchStatus = false;
            state.searchResult = [];
        },
        [categoryAPI.fulfilled]: (state, action) => {
            state.isCategoryStatus = true;
            state.categoryResult = action.payload.data.payload.data.data;
            state.avaliableCategory = action.payload.data.payload.data.avaliableCategory
        },
        [categoryAPI.rejected]: (state, action) => {
            state.isCategoryStatus = false;
            state.categoryResult = [];
            state.avaliableCategory = [];
        },
        [detailAPI.fulfilled]: (state, action) => {
            state.isDetailStatus = true;
            state.detailResult = action.payload.data.payload.data.data;
        },
        [detailAPI.rejected]: (state, action) => {
            state.isDetailStatus = false;
            state.detailResult = []
        },
        [ticketAPI.fulfilled]: (state, action) => {
            state.isTicketStatus = true;
        },
        [ticketAPI.rejected]: (state, action) => {
            state.isTicketStatus = false;
        },
        [viewTicketAPI.fulfilled]: (state, action) => {
            state.isViewTicketStatus = true;
            state.viewTicketData = []
        },
        [viewTicketAPI.rejected]: (state, action) => {
            state.isViewTicketStatus = false;
            state.viewTicketData = []
        },
    }
});

export const { searchStatus, categoryStatus, detailStatus, ticketStatus, viewTicketStatus } = slice.actions;

export default slice.reducer;
