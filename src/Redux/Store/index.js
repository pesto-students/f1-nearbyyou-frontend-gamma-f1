import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Client/ClientSlice';
import SnackBarReducer from '../SnackBar/SnackbarSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        Alert : SnackBarReducer,
    },
});
