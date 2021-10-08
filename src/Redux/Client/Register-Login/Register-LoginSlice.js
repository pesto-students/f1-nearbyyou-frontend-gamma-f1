import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';

export const registerAPI = createAsyncThunk('Register API CALL', async ({ user_name, user_role, email, contact_number, password }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.post("customer/register", {
            user_name: user_name,
            user_role: user_role,
            email: email,
            contact_number: contact_number,
            password: password
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
        dispatch(ErrorAlert('Something Want Wrong!!'));
    }
});


export const LoginAPI = createAsyncThunk('Login API CALL', async ({ username, password }, { dispatch, rejectWithValue }) => {
    console.log("loginAPI :-", { username, password });
    try {
        const response = await axios.post("customer/login",
            {
                username: username,
                password: password,
            });
        const responseData = response.data;

        if (responseData.status == "success") {

            let authToken = responseData.payload.data.token;

            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
            axios.defaults.headers.common['x-auth-token'] = authToken;
            localStorage.setItem('Near_By_You', authToken)

            dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            dispatch(ErrorAlert(responseData.msg));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        dispatch(ErrorAlert('Something Want Wrong!!'));
    }
});

export const slice = createSlice({
    name: 'Register Login Slice',
    initialState: {
        value: 10,
        isUpdatedSuccessfully: false,
        isLoginStatus: false,
    },
    reducers: {
        registerStatus: (state, action) => {
            state.isUpdatedSuccessfully = action.payload;
        },
        loginStatus: (state, action) => {
            state.isLoginStatus = action.payload;
        },
    },
    extraReducers: {
        [registerAPI.fulfilled]: (state, action) => {
            state.isUpdatedSuccessfully = true;
        },
        [registerAPI.rejected]: (state, action) => {
            state.isUpdatedSuccessfully = false;
        },
        [LoginAPI.fulfilled]: (state, action) => {
            state.isLoginStatus = true;
        },
        [LoginAPI.rejected]: (state, action) => {
            state.isLoginStatus = false;
        }
    }
});

export const { registerStatus, loginStatus } = slice.actions;

export default slice.reducer;