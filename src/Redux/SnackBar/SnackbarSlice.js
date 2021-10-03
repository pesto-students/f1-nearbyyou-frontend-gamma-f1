import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'Snack Bar',
    initialState: {
        status : false,
        msg : '',
        type : ''
    },
    reducers: {
        SuccessAlert: (state, action) => {
            state.type = 'success';
            state.msg = action.payload;
            state.status = true;
        },
        ErrorAlert: (state, action) => {
            state.type = 'error';
            state.msg = action.payload;
            state.status = true;
        },
        CloseAlert: (state, action) => {
            state.msg = '';
            state.type = '';
            state.status = false;
        },
    },
    extraReducers: {}
});

export const { SuccessAlert, ErrorAlert, CloseAlert} = slice.actions;

export default slice.reducer;
