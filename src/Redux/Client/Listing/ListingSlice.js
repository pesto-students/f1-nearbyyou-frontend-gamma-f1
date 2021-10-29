import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../SnackBar/SnackbarSlice';
import axios from 'axios';

//Search Shop API
export const searchAPI = createAsyncThunk('Search API CALL', async ({ freeText, pincode, category }, { dispatch, rejectWithValue }) => {
    console.log("searchAPI :-", { freeText, pincode, category });

    try {
        const response = await axios.post("customer/search",
            {
                freeText: freeText,
                pincode: parseInt(pincode),
                category: category,
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

//Listing Category API
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

//View Shop Details
export const detailAPI = createAsyncThunk('Details API CALL', async ({ shopID }, { dispatch, rejectWithValue }) => {
    console.log("DetailAPI :-", { shopID });
    try {
        const response = await axios.post("customer/detail", { shopId: shopID });
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

//Generate Ticket API
export const ticketAPI = createAsyncThunk('Ticket API CALL', async ({ description, date, time, customerId, ticket_status, shop_ticket }, { dispatch, rejectWithValue }) => {
    console.log("ticketAPi :-", { description, date, time });
    try {
        const response = await axios.post("customer/ticket",
            {
                description: description,
                date: date,
                time: time,
                customerId: customerId,
                ticket_status: ticket_status,
                shop_ticket: shop_ticket
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

//View Ticket API
export const viewTicketAPI = createAsyncThunk('Ciew Ticket API CALL', async ({ custID, status }, { dispatch, rejectWithValue }) => {
    console.log("userId :-", { custID });
    try {
        const response = await axios.post("customer/viewTicket",
            {
                custID: custID,
                status: status
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

//Customer Details API
export const customerDetailsAPI = createAsyncThunk('Customer Details API CALL', async ({ userID }, { dispatch, rejectWithValue }) => {
    console.log("userID :-", { userID });
    try {
        const response = await axios.post("customer/userDetails",
            {
                userID: userID
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

//Edit Profile API
export const editProfile = createAsyncThunk('Edit Profile API CALL', async ({ id, user_name, contact_number, door_number, street, area, pincode, city, state }, { dispatch, rejectWithValue }) => {
    console.log("userId :-", { user_name, contact_number, door_number, street, area, pincode, city, state });
    try {
        const response = await axios.post("customer/profileEdit",
            {
                id: id,
                user_name: user_name,
                contact_number: contact_number,
                door_number: door_number,
                street: street,
                area: area,
                pincode: pincode,
                city: city,
                state: state
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

//Get Category ID API Based on Name
export const getCategoryIDAPI = createAsyncThunk('Get Category ID API CALL', async ({ cname }, { dispatch, rejectWithValue }) => {
    console.log("categoryAPI :-", { cname });
    try {
        const response = await axios.post("customer/getCategoryId",
            {
                cname: cname,
            });
        const responseData = response.data;

        console.log("response ;-", response);
        console.log("data.payload.data.data[0]._id:-", response.data.payload.data.data);

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

//Accept Reject Holding Request
export const holdingRequestStausAPI = createAsyncThunk('Accept Reject Holding API CALL', async ({ id, type }, { dispatch, rejectWithValue }) => {
    console.log("holdingRequestStausAPI :-", { id, type });
    try {
        const response = await axios.post("customer/acceptRejectHoldingReq",
            {
                id: id,
                type: type
            });
        const responseData = response.data;

        console.log("response ;-", response);
        console.log("data.payload.data.data[0]._id:-", response.data.payload.data.data);

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

//Send Feed Back
export const sendFeedBackAPI = createAsyncThunk('Send FeedBack API', async ({ shopID, userId, feedBack, rating }, { dispatch, rejectWithValue }) => {
    console.log("Rating ,", rating);
    try {
        const response = await axios.post("customer/sendDeedback",
            {
                shopID: shopID,
                userId: userId,
                feedBack: feedBack,
                rating: rating
            });
        const responseData = response.data;

        console.log("response ;-", response);
        console.log("data.payload.data.data[0]._id:-", response.data.payload.data.data);

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
        isTicketStatus: false,
        isViewTicketStatus: false,
        viewTicketData: [],
        customerDetails: [],
        isProfileStatus: false,
        categoryID: '',
        isHoldingReqStatus: false,
        isFeedBackSendStatus: false
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
        },
        profileStatus: (state, action) => {
            state.isProfileStatus = action.payload;
        },
        holdingReqStatus: (state, action) => {
            state.isHoldingReqStatus = action.payload;
        },
        feedBackSendStatus: (state, action) => {
            state.isFeedBackSendStatus = action.payload;
        },
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
            state.viewTicketData = action.payload.data.payload.data.data;
        },
        [viewTicketAPI.rejected]: (state, action) => {
            state.isViewTicketStatus = false;
            state.viewTicketData = []
        },
        [customerDetailsAPI.fulfilled]: (state, action) => {
            state.customerDetails = action.payload.data.payload.data.data;
        },
        [customerDetailsAPI.rejected]: (state, action) => {
            state.customerDetails = []
        },
        [editProfile.fulfilled]: (state, action) => {
            state.isProfileStatus = true;
        },
        [editProfile.rejected]: (state, action) => {
            state.isProfileStatus = false;
        },
        [getCategoryIDAPI.fulfilled]: (state, action) => {
            state.categoryID = action.payload.data.payload.data.data[0]._id;
        },
        [getCategoryIDAPI.rejected]: (state, action) => {
            state.categoryID = '';
        },

        [holdingRequestStausAPI.fulfilled]: (state, action) => {
            state.isHoldingReqStatus = true;
        },
        [holdingRequestStausAPI.rejected]: (state, action) => {
            state.isHoldingReqStatus = false;
        },


        [sendFeedBackAPI.fulfilled]: (state, action) => {
            state.isFeedBackSendStatus = true;
        },
        [sendFeedBackAPI.rejected]: (state, action) => {
            state.isFeedBackSendStatus = false;
        },
    }
});

export const { feedBackSendStatus, searchStatus, categoryStatus, detailStatus, ticketStatus, viewTicketStatus, profileStatus, holdingReqStatus } = slice.actions;

export default slice.reducer;
