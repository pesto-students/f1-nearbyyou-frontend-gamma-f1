import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchAPI = createAsyncThunk('Search API CALL', async ({ freeText, pincode, category }, { dispatch, rejectWithValue }) => {
    console.log("searchAPI :-", { freeText, pincode, category });
    try {
        const response = await axios.post("http://localhost:3003/search",
            {
                params: {
                    freeText: freeText,
                    pincode: pincode,
                    category: category,
                }
            });
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

export const categoryAPI = createAsyncThunk('Category API CALL', async ({ type }, { dispatch, rejectWithValue }) => {
    console.log("categoryAPI :-", { type });
    try {
        const response = await axios.post("http://localhost:3003/category",
            {
                params: {
                    type: type,
                }
            });
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
    name: 'Listing Slice',
    initialState: {
        searchResult: [],
        isSearchStatus: false,
        categoryResult : [],
        isCategoryStatus: false,
        msg: ''
    },
    reducers: {
        searchStatus: (state, action) => {
            state.isSearchStatus = action.payload;
            state.msg = ''
        },
        categoryStatus: (state, action) => {
            state.isCategoryStatus = action.payload;
            state.msg = ''
        },
    },
    extraReducers: {
        [searchAPI.fulfilled]: (state, action) => {
            state.isSearchStatus = true;
            state.msg = action.payload.data.msg
        },
        [searchAPI.rejected]: (state, action) => {
            state.isSearchStatus = false;
            state.msg = action.payload.data.msg
        },
        [categoryAPI.fulfilled]: (state, action) => {
            state.isCategoryStatus = true;
            state.msg = action.payload.data.msg
        },
        [categoryAPI.rejected]: (state, action) => {
            state.isCategoryStatus = false;
            state.msg = action.payload.data.msg
        },
    }
});

export const { searchStatus, categoryStatus } = slice.actions;

export default slice.reducer;
