import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';


//google login 
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";

const gauth = getAuth();
const provider = new GoogleAuthProvider();
// const user = {};
export const GoogleLoginAPi = createAsyncThunk('Google Login API CALL', async ({token, user_name, email, contact_number, user_role }, { dispatch, rejectWithValue }) => {
	try {
		const response = await axios.post("/user/glogin",
			{
				user_name: user_name,
				user_email: email,
				contact_number: contact_number,
				user_role: user_role,
				token: token
			});
		const responseData = response.data;
		console.log("after backend callinf==>", responseData)
		if (responseData.status === "success") {
			let authToken = responseData.payload.data.userInfo.token;

			let userInfo = responseData.payload.data.userInfo.data[0];

			// console.log("userInfo:- ", userInfo);

			localStorage.setItem('Near_By_You_Client', JSON.stringify(userInfo));

			// axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
			axios.defaults.headers.common['g-auth-token'] = authToken;
			localStorage.setItem('Near_By_You_google', authToken)
			dispatch(SuccessAlert(responseData.msg));
			return responseData;
		} else {
			dispatch(ErrorAlert(responseData.message));
			return rejectWithValue({ message: 'No Data Found' });
		}
	}
	catch (e) {
		dispatch(ErrorAlert('Something Want Wrong!!'));
	}
});


export const registerAPI = createAsyncThunk('Register API CALL', async ({ user_name, user_role, email, contact_number, door_number, street, area, pincode, city, state, password, vendor_category, shop_name }, { dispatch, rejectWithValue }) => {
	try {
		let response;
		if (user_role === "customer") {
			response = await axios.post("customer/register", {
				user_name: user_name,
				user_role: user_role,
				email: email,
				contact_number: contact_number,
				door_number: door_number,
				street: street,
				area: area,
				pincode: pincode,
				city: city,
				state: state,
				password: password
			});
		}
		else {
			response = await axios.post("vendor/signup", {
				user_name: user_name,
				role: user_role,
				email: email,
				contact_number: contact_number,
				password: password,
				vendor_category: vendor_category,
				shop_name: shop_name
			});
		}
		const responseData = response.data;
		console.log(responseData);


		if (responseData.status === "success") {
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

		if (responseData.status === "success") {

			let authToken = responseData.payload.data.token;

			let userInfo = responseData.payload.data.userInfo.data[0];

			// console.log("userInfo:- ", userInfo);

			localStorage.setItem('Near_By_You_Client', JSON.stringify(userInfo));

			// axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
			axios.defaults.headers.common['x-auth-token'] = authToken;
			localStorage.setItem('Near_By_You', authToken)

			dispatch(SuccessAlert(responseData.msg));
			const userType = { user_type: userInfo.user_role }
			return userType;
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
		isGoogleLoginStatus: false,
		loginResults: '',
		googleloginResults: ""
	},
	reducers: {
		registerStatus: (state, action) => {
			state.isUpdatedSuccessfully = action.payload;
		},
		loginStatus: (state, action) => {
			state.isLoginStatus = action.payload;
		},
		googleLoginStatus: (state, action) => {
			state.isGoogleLoginStatus = action.payload;
		}
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
			state.loginResults = action.payload.user_type;
		},
		[LoginAPI.rejected]: (state, action) => {
			state.isLoginStatus = false;
		},
		[GoogleLoginAPi.fulfilled]: (state, action) => {
			state.isGoogleLoginStatus = true;
			state.googleloginResults = action.payload.payload.data.userInfo.data[0].user_role;
		},
		[GoogleLoginAPi.rejected]: (state, action) => {
			state.isGoogleLoginStatus = false;
		}
	}
});

export const { registerStatus, loginStatus, googleLoginStatus } = slice.actions;

export default slice.reducer;