import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';

export const GetAllTicketsAPI = createAsyncThunk('Get All Ticket API based on status', async ({ ticket_status, shop_id }, { dispatch, rejectWithValue }) => {
    console.log('GetAllTicketsAPI--> ', ticket_status, shop_id)
    try {
        const response = await axios.get('/ticket',
            {
                params: {
                    status: ticket_status,
                    shop_id: shop_id
                }
            });

        const responseData = response.data;

        if (responseData.status === "success") {
            return response;
        } else {
            dispatch(ErrorAlert(responseData.message));
            return rejectWithValue({ message: 'No Data Found' });
        }

    }
    catch (error) {
        console.log(error)
    }
});


export const GetTicketsAPI = createAsyncThunk('Get Ticket Deatils Based On ID', async ({ ticket_id }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get('/ticket/:id',
            {
                params: {
                    id: ticket_id
                }
            });
        const responseData = response.data;
        if (responseData.status === "success") {
            return response;
        } else {
            dispatch(ErrorAlert(responseData.message));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (error) {
        console.log(error);
    }
})



export const UpdateTicketStatusAPI = createAsyncThunk('update ticket status based', async ({ ticket_status, ticket_id, hold_date, hold_time, hold_description }, { dispatch, rejectWithValue }) => {
    console.log('update ticket status in slice --> ', ticket_status, ticket_id, hold_date, hold_time, hold_description)
    try {
        const response = await axios.put('/ticket',
            {   
                status: ticket_status,
                hold_date: hold_date,
                hold_time: hold_time,
                hold_description: hold_description,
                id: ticket_id
            });

        const responseData = response.data;
        // console.log("response data-> ", responseData)

        if (responseData.status === "success") {
            dispatch(SuccessAlert(responseData.message));
            return response;
        } else {
            dispatch(ErrorAlert(responseData.message));
            return rejectWithValue({ message: 'No Data Found' });
        }

    }
    catch (error) {
        console.log(error)
    }
})

export const slice = createSlice({
    name: 'vendor home page tickets slice',
    initialState: {
        ticketResults: [],
        oneticketResults: [],
        updateTicketResults: [],
        isticketStatus: false,
        isoneticketStatus: false,
        isupdatestatus: false
    },
    reducers: {
        ticketStatus: (state, action) => {
            state.isticketStatus = action.payload;
        },
        oneticketStatus: (state, action) => {
            state.isoneticketStatus = action.payload;
        },
        updateticketstatus:(state,action)=>{
            state.isupdatestatus = action.payload;
        }
    },
    extraReducers: {
        [GetAllTicketsAPI.fulfilled]: (state, action) => {
            state.isticketStatus = true;
            state.ticketResults = action.payload.data.payload.data;
        },
        [GetAllTicketsAPI.rejected]: (state, action) => {
            state.isticketStatus = false;
            state.ticketResults = [];
        },
        [GetTicketsAPI.fulfilled]: (state, action) => {
            state.isoneticketStatus = true;
            state.oneticketResults = action.payload.data.payload.data;
        },
        [GetTicketsAPI.rejected]: (state, action) => {
            state.isoneticketStatus = false;
            state.oneticketResults = [];
        },
        [UpdateTicketStatusAPI.fulfilled]: (state, action) => {
            state.isupdatestatus = true;
            state.updateTicketResults = action.payload.data.payload.data;
        },
        [UpdateTicketStatusAPI.rejected]: (state, action) => {
            state.isupdatestatus = false;
            state.updateTicketResults = [];
        },

    }
});

export const { ticketStatus, oneticketStatus,updateticketstatus } = slice.actions;

export default slice.reducer;