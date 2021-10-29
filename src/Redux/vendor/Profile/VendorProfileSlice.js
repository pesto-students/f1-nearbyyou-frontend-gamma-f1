import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../../../Redux/SnackBar/SnackbarSlice';
import axios from 'axios';

export const GetAllShopsAPI = createAsyncThunk('Get All Shops API based for user', async ({ user_id }, { dispatch, rejectWithValue }) => {
    console.log('GetAllShopsAPI--> ', user_id)
    try {
        const response = await axios.get('/vendor/shop',
            {
                user_id: user_id
            });

        const responseData = response.data;
        console.log("Response : ", responseData);

        if (responseData.status === "success") {
            return response;
        } else {
            return rejectWithValue({ message: 'No Data Found' });
        }

    }
    catch (error) {
        console.log(error)
    }
});

export const GetShopAPI = createAsyncThunk('Get Shops details', async ({ shop_id }, { dispatch, rejectWithValue }) => {
    console.log('GetShopAPI--> ', shop_id)
    try {
        const response = await axios.get('/vendor/shop/:id',
            {
                params: {
                    id: shop_id
                }
            });

        const responseData = response.data;
        console.log("response data-> ", responseData)
        // console.log("Response : ", response);

        if (responseData.status === "success") {
            return response;
        } else {
            return rejectWithValue({ message: 'No Data Found' });
        }

    }
    catch (error) {
        console.log(error)
    }
});

export const AddShopAPI = createAsyncThunk('Add new shop', async ({
    shop_email,
    shop_contact_number,
    shop_door_number,
    shop_street,
    shop_area,
    shop_city_town,
    shop_state,
    shop_pincode,
    shop_timings,
    shop_category,
    shop_owner,
    shop_description
}, { dispatch, rejectWithValue }) => {
    console.log('AddShopAPI--> ', shop_email, shop_contact_number, shop_door_number, shop_street, shop_area, shop_city_town, shop_state, shop_pincode, shop_timings, shop_category,shop_owner,shop_description)
    try {
        const response = await axios.post('/vendor/createShop',
            {
                shop_email,
                shop_contact_number,
                shop_door_number,
                shop_street,
                shop_area,
                shop_city_town,
                shop_state,
                shop_pincode,
                shop_category,
                shop_timings,
                shop_owner,
                shop_description
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
    catch (error) {
        console.log(error)
    }
});

export const EditShopAPI = createAsyncThunk('Edit shop details', async ({
    shop_email,
    shop_contact_number,
    shop_door_number,
    shop_street,
    shop_area,
    shop_city_town,
    shop_state,
    shop_pincode,
    shop_id,
    shop_status,
    shop_description,
    shop_timings
}, { dispatch, rejectWithValue }) => {
    console.log('EditShopAPI--> ',shop_timings,shop_description, shop_status, shop_id, shop_email, shop_contact_number, shop_door_number, shop_street, shop_area, shop_city_town, shop_state, shop_pincode)
    try {
        const response = await axios.put(`vendor/shop/${shop_id}`,
            {
                shop_email,
                shop_contact_number,
                shop_door_number,
                shop_street,
                shop_area,
                shop_city_town,
                shop_state,
                shop_pincode,
                shop_status,
                shop_description,
                shop_timings
            });
        const responseData = response.data;
        console.log("response data-> ", responseData)
        // console.log("Response : ", response);

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

export const AddServiceAPI = createAsyncThunk('Add new service', async ({
    shop_id,
    service_name,
    service_description,
}, { dispatch, rejectWithValue }) => {
    console.log('AddServiceAPI--> ', shop_id, service_name, service_description)
    try {
        const response = await axios.post('/vendor/shop/createService',
            {
                shop_id,
                service_name,
                service_description,
            });
        const responseData = response.data;
        console.log("response data-> ", responseData)
        // console.log("Response : ", response);

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

export const GetAllServiceAPI = createAsyncThunk('Get All Service API for a shop', async ({ shop_id }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get(`/vendor/service/${shop_id}`);

        const responseData = response.data;
        console.log("Response : ", responseData);

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

export const DeleteServiceAPI = createAsyncThunk('Get All Service API for a shop', async ({ service_id }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.delete(`/vendor/service/${service_id}`);

        const responseData = response.data;
        console.log("Response : ", responseData);

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


export const EditServiceAPI = createAsyncThunk('Edit shop details', async ({
    service_id,
    name,
    service_description,
}, { dispatch, rejectWithValue }) => {
    console.log('EditServiceAPI--> ', service_id, name, service_description);
    try {
        const response = await axios.put(`vendor/service/${service_id}`,
            {
                name,
                service_description
            });
        const responseData = response.data;
        console.log("response data-> ", responseData)

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


export const GetAllPlans = createAsyncThunk('Get All PLANS', async ({ }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get('/vendor/plans');

        const responseData = response.data;
        console.log("Response : ", responseData);

        if (responseData.status === "success") {
            return response;
        } else {
            return rejectWithValue({ message: 'No Data Found' });
        }

    }
    catch (error) {
        console.log(error)
    }
});

export const EditVendorProfileAPI = createAsyncThunk('Edit vendor profile details', async ({
    shop_name,
    email,
    contact_number,
    vendor_id
}, { dispatch, rejectWithValue }) => {
    console.log('EditVendorProfileAPI--> ', shop_name, email, contact_number, vendor_id);
    try {
        const response = await axios.put(`vendor/${vendor_id}`,
            {
                shop_name,
                email,
                contact_number,
            });
        const responseData = response.data;
        console.log("response for editing profile data-> ", responseData)

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


export const GetAllCategories = createAsyncThunk('Get All Categories', async ({ }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get('/vendor/categories');

        const responseData = response.data;
        console.log("Response : ", responseData);
        if (responseData.status === "success") {
            return response;
        } else {
            return rejectWithValue({ message: 'No Data Found' });
        }

    }
    catch (error) {
        console.log(error)
    }
});






export const slice = createSlice({
    name: 'vendor profile page slice',
    initialState: {
        shopResults: [],
        oneShopResults: [],
        newShopResults: [],
        updateShopResults: [],
        newServiceResults: [],
        allServicesResults: [],
        editServiceResults: [],
        allPlansResults: [],
        allCategoriesResult: [],
        isshopstatus: false,
        isoneshopstatus: false,
        isnewShopStatus: false,
        iseditshopstatus: false,
        isnewservicestatus: false,
        isAllServices: false,
        isEditService: false,
        isAllPlans: false,
        isVendorProfileUpdate: false,
        isallCategory: false
    },
    reducers: {
        shopStatus: (state, action) => {
            state.isshopstatus = action.payload;
        },
        oneShopStatus: (state, action) => {
            state.isoneshopstatus = action.payload;
        },
        newShopStatus: (state, action) => {
            state.isnewShopStatus = action.payload;
        },
        editShopStatus: (state, action) => {
            state.iseditshopstatus = action.payload;
        },
        newServiceStatus: (state, action) => {
            state.isnewservicestatus = action.payload;
        },
        allServicesStatus: (state, action) => {
            state.isAllServices = action.payload;
        },
        editServicesStatus: (state, action) => {
            state.isEditService = action.payload;
        },
        allPlansStatus: (state, action) => {
            state.isAllPlans = action.payload;
        },
        vendorProfileUpdateStatus: (state, action) => {
            state.isVendorProfileUpdate = action.payload;
        },
        allCategoriesStatus: (state, action) => {
            state.isallCategory = action.payload;
        },

    },
    extraReducers: {
        [GetAllShopsAPI.fulfilled]: (state, action) => {
            state.isshopstatus = true;
            state.shopResults = action.payload.data.payload.data;
        },
        [GetAllShopsAPI.rejected]: (state, action) => {
            state.isshopstatus = false;
            state.shopResults = [];
        },
        [GetShopAPI.fulfilled]: (state, action) => {
            state.isoneshopstatus = true;
            state.oneShopResults = action.payload.data.payload.data;
        },
        [GetShopAPI.rejected]: (state, action) => {
            state.isoneshopstatus = false;
            state.oneShopResults = [];
        },
        [AddShopAPI.fulfilled]: (state, action) => {
            state.isnewShopStatus = true;
            state.newShopResults = action.payload.data.payload.data;
        },
        [AddShopAPI.rejected]: (state, action) => {
            state.isnewShopStatus = false;
            state.newShopResults = [];
        },
        [EditShopAPI.fulfilled]: (state, action) => {
            state.iseditshopstatus = true;
            state.updateShopResults = action.payload.data.payload.data;
        },
        [EditShopAPI.rejected]: (state, action) => {
            state.iseditshopstatus = false;
            state.updateShopResults = [];
        },
        [AddServiceAPI.fulfilled]: (state, action) => {
            state.isnewservicestatus = true;
            state.newServiceResults = action.payload.data.payload.data;
        },
        [AddServiceAPI.rejected]: (state, action) => {
            state.isnewservicestatus = false;
            state.newServiceResults = [];
        },
        [GetAllServiceAPI.fulfilled]: (state, action) => {
            state.isAllServices = true;
            state.allServicesResults = action.payload.data.payload.data;
        },
        [GetAllServiceAPI.rejected]: (state, action) => {
            state.isAllServices = false;
            state.allServicesResults = [];
        },
        [EditServiceAPI.fulfilled]: (state, action) => {
            state.isEditService = true;
            state.editServiceResults = action.payload.data.payload.data;
        },
        [EditServiceAPI.rejected]: (state, action) => {
            state.isEditService = false;
            state.editServiceResults = [];
        },
        [GetAllPlans.fulfilled]: (state, action) => {
            state.isAllPlans = true;
            state.allPlansResults = action.payload.data.payload.data;
        },
        [GetAllPlans.rejected]: (state, action) => {
            state.isAllPlans = false;
            state.allPlansResults = [];
        },
        [EditVendorProfileAPI.fulfilled]: (state, action) => {
            state.isVendorProfileUpdate = true;
        },
        [EditVendorProfileAPI.rejected]: (state, action) => {
            state.isAllPlans = false;
            state.isVendorProfileUpdate = [];
        },
        [GetAllCategories.fulfilled]: (state, action) => {
            state.isallCategory = true;
            state.allCategoriesResult = action.payload.data.payload.data;
        },
        [GetAllCategories.rejected]: (state, action) => {
            state.isallCategory = false;
            state.allCategoriesResult = [];
        },



    }
});

export const { vendorProfileUpdateStatus, allPlansStatus, shopStatus, oneShopStatus, newShopStatus, editShopStatus, newServiceStatus, allServicesStatus, editServicesStatus, allCategoriesStatus } = slice.actions;

export default slice.reducer;