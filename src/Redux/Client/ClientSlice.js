import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk('Counter Slice API CALL', async ({ price }, { dispatch, rejectWithValue }) => {
    console.log("price:-", price);
    try {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/users`);
        const responseData = {
            status: true
        };
        if (responseData.status) {
            return response;
        } else {
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        console.log("Error :- ", e)
    }
});

export const slice = createSlice({
    name: 'Client Slice',
    initialState: {
        value: 10,
        userData: []
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
    },
    extraReducers: {
          [getData.fulfilled] : (state,action) => {
              state.userData = action.payload.data;
          },
          [getData.rejected] : (state,action) => {
              state.userData = [];
          }
    }
});

export const { increment, decrement } = slice.actions;

export default slice.reducer;
