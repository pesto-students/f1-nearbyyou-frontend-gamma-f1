import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Client/ClientSlice';
import SnackBarReducer from '../SnackBar/SnackbarSlice';
import registerReducer from '../Client/Register-Login/Register-LoginSlice';
import ListingSlice from '../Client/Listing/ListingSlice'
import ticketSlice from '../vendor/Home/HomeSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        Alert : SnackBarReducer,
        register : registerReducer,
        listing : ListingSlice,
        ticket: ticketSlice,
    },
});
