import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';


//google login 
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const gauth = getAuth();
const provider = new GoogleAuthProvider();
// const user = {};
export const GoogleLoginAPi = createAsyncThunk('Google Login API CALL', async ({ user_role }, { dispatch, rejectWithValue }) => {
	try {
		signInWithPopup(gauth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// console.log("user in slice=>", user.accessToken);
				const user_details = {
					user_name: user.auth.currentUser.displayName,
					email: user.auth.currentUser.email,
					contact_number: user.auth.currentUser.phoneNumber,
					user_role: user_role
				}
				console.log("user deatils-->", user_details)
				// console.log("user email in slice=>", user.auth.currentUser.email)
				axios.post("/user/glogin",
					{
						user_name: user.auth.currentUser.displayName,
						user_email: user.auth.currentUser.email,
						contact_number: user.auth.currentUser.phoneNumber,
						user_role: user_role
					})
					.then((response) => {
						const responseData = response.data
						// console.log("responseData of glogin ==>", responseData);
						if (responseData.status === "success") {
							let authToken = user.accessToken;
							console.log(responseData.payload.data)
							let userInfo = responseData.payload.data.userInfo.data[0];
							localStorage.setItem('Near_By_You_Client', JSON.stringify(userInfo));
							axios.defaults.headers.common['g-auth-token'] = authToken;
							localStorage.setItem('Near_By_You_google', authToken);
							dispatch(SuccessAlert(responseData.msg));
							return response;
						} else {
							dispatch(ErrorAlert(responseData.message));
							return rejectWithValue({ message: 'No Data Found' });
						}

					})

			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});

		// if (responseData.status === "success") {

		//     let authToken = responseData.payload.data.token;

		//     let userInfo = responseData.payload.data.userInfo.data[0];

		//     console.log("userInfo:- ", userInfo);

		//     localStorage.setItem('Near_By_You_Client', JSON.stringify(userInfo));

		//     // axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
		//     axios.defaults.headers.common['x-auth-token'] = authToken;
		//     localStorage.setItem('Near_By_You', authToken)

		//     dispatch(SuccessAlert(responseData.msg));
		//     return response;
		// } else {
		//     dispatch(ErrorAlert(responseData.message));
		//     return rejectWithValue({ message: 'No Data Found' });
		// }
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

			console.log("userInfo:- ", userInfo);

			localStorage.setItem('Near_By_You_Client', JSON.stringify(userInfo));

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