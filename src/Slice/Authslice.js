import { createSlice } from "@reduxjs/toolkit";

/**
 * Create a slice for auth application 
 * to handles our registartion page,
 * 
 * This slice holds the @email @fullname  @password and other 
 * info needed to handle registration query. 
 */
const initialState = {
    email: "",
    password: "",
    fullname: "",
    phone: "",
    currentLocal: null,
    favorite_food: ""
}

export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setfullname : (state,action) =>{
            state.fullname = action.payload
        },
        setemail: (state,action) => {
            state.email = action.payload
        },
        setpassword: (state,action) => {
            state.password = action.payload
        },
        setphone: (state,action) => {
            state.phone = action.payload
        },
        setlocation: (state,action) => {
            state.currentLocal = action.payload
        },
        setfood: (state,action) => {
            state.favorite_food = action.payload
        },
    }
})

export const {setfullname,setpassword,setemail,setphone,setlocation,setfood} = AuthSlice.actions

//export selectors

export const selectFullname = (state) => state.auth.fullname
export const selectEmail = (state) => state.auth.email
export const selectPassword = (state) => state.auth.password 
export const selectPhone = (state) => state.auth.phone 
export const selectLocation = (state) => state.auth.currentLocal 
export const selectFood = (state) => state.auth.favorite_food 

export default AuthSlice.reducer