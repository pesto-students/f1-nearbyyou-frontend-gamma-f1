import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';

export const GetAllTicketsAPI = createAsyncThunk('Get All Ticket API based on status', async ({ ticket_status, shop_pincode }, { dispatch, rejectWithValue }) => {
    console.log('GetAllTicketsAPI--> ', ticket_status, shop_pincode)
    try {
        const response = await axios.get('/ticket',
            {
                params: {
                    status: ticket_status,
                    shop_pincode: shop_pincode
                }
            });

        const responseData = response.data;
        console.log("response data-> ", responseData)
        console.log("Response : ", response);

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
});


export const GetTicketsAPI = createAsyncThunk('Get Ticket Deatils Based On ID',async({ticket_id}, {dispatch, rejectWithValue})=>{
    try{
        const response = await axios.get('/ticket/:id',
        {
            params:{
                id: ticket_id
            }
        });
        const responseData = response.data;
        if (responseData.status === "success") {
            dispatch(SuccessAlert(responseData.message));
            return response;
        } else {
            dispatch(ErrorAlert(responseData.message));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch(error){
        console.log(error);
    }
})



export const UpdateTicketStatusAPI = createAsyncThunk('update ticket status based', async ({ ticket_status, ticket_number }, { dispatch, rejectWithValue }) => {
    console.log('update ticket status --> ', ticket_status, ticket_number)
    try {
        const response = await axios.put('/ticket/ticketdetails',
            {
                params: {
                    status: ticket_status,
                    ticket_number: ticket_number
                }
            });

        const responseData = response.data;
        console.log("response data-> ", responseData)

        if (response.status === "success") {
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
        oneticketResults:[],
        isticketStatus: false,
        isoneticketStatus:false
    },
    reducers: {
        ticketStatus: (state, action) => {
            state.isticketStatus = action.payload;
        },
        oneticketStatus:(state,action)=>{
            state.isoneticketStatus = action.payload;
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

    }
});

export const { ticketStatus,oneticketStatus } = slice.actions;

export default slice.reducer;