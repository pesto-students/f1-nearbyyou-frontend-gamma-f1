import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'Snack Bar',
    initialState: {
        status : false,
        msg : '',
        type : '',
        tempState : false
    },
    reducers: {
        SuccessAlert: (state, action) => {
            state.type = 'success';
            state.msg = action.payload;
            state.status = true;
            state.tempState = !state.tempState
        },
        ErrorAlert: (state, action) => {
            state.type = 'error';
            state.msg = action.payload;
            state.status = true;
            state.tempState = !state.tempState
        },
        CloseAlert: (state, action) => {
            state.msg = '';
            state.type = '';
            state.status = false;
            state.tempState = !state.tempState
        },
    },
    extraReducers: {}
});

export const { SuccessAlert, ErrorAlert, CloseAlert} = slice.actions;

export default slice.reducer;
