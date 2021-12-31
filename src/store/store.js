import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../Slice/Authslice'
import VerificationReducer from '../Slice/verification'

export const Store = configureStore({
    reducer:{
        auth: AuthReducer,
        verify: VerificationReducer
    }
})