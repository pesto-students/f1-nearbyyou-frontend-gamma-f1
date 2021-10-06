import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerAPI = createAsyncThunk('Register API CALL', async ({ user_name, user_role, email, contact_number }, { dispatch, rejectWithValue }) => {
    console.log("registerAPI :-", { user_name, user_role, email, contact_number });
    try {
        const response = await axios.post("http://localhost:3003/register",
            {
                params: {
                    user_name: user_name,
                    user_role: user_role,
                    email: email,
                    contact_number: contact_number
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


export const LoginAPI = createAsyncThunk('Login API CALL', async ({ username, password }, { dispatch, rejectWithValue }) => {
    console.log("loginAPI :-", { username, password });
    try {
        const response = await axios.post("http://localhost:3003/login",
            {
                params: {
                    username: username,
                    password: password,
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
    name: 'Register Login Slice',
    initialState: {
        value: 10,
        isUpdatedSuccessfully: false,
        isLoginStatus: false,
        msg: ''
    },
    reducers: {
        registerStatus: (state, action) => {
            state.isUpdatedSuccessfully = action.payload;
            state.msg = '';
        },
        loginStatus: (state, action) => {
            state.isLoginStatus = action.payload;
            state.msg = '';
        },
    },
    extraReducers: {
        [registerAPI.fulfilled]: (state, action) => {
            state.isUpdatedSuccessfully = true;
            state.msg = action.payload.data.msg
        },
        [registerAPI.rejected]: (state, action) => {
            state.isUpdatedSuccessfully = false;
            state.msg = action.payload.data.msg
        },
        [LoginAPI.fulfilled]: (state, action) => {
            state.isLoginStatus = true;
            state.msg = action.payload.data.msg
        },
        [LoginAPI.rejected]: (state, action) => {
            state.isLoginStatus = false;
            state.msg = action.payload.data.msg
        }
    }
});

export const { registerStatus, loginStatus } = slice.actions;

export default slice.reducer;
