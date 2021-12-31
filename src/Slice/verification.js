import { createSlice } from "@reduxjs/toolkit";

/**
 * Create a slice for auth application 
 * to handles our registartion page,
 * 
 * This slice holds the @email @fullname  @password and other 
 * info needed to handle registration query. 
 */
const initialState = {
    verification_code: "",}

export const VerificationSlice = createSlice({
    name:'verify',
    initialState,
    reducers:{
        setverification : (state,action) =>{
            state.verification_code = action.payload
        },
    }
})

export const {setverification} = VerificationSlice.actions

//export selectors

export const selectVerification = (state) => state.verify.verification_code

export default VerificationSlice.reducer