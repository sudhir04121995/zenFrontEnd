import {createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name : "loginInfo",
    initialState : {
        data :{
            username :"",
            password :""
        }
    }, 
    reducers :{
        loginUser :(state , action)=>{
            state.data = action.payload
        },
        logoutUsers : (state , action )=>{
            state.data ={username:" ",password:" "}
            localStorage.removeItem("username");
        }
    } 
})
export  const {loginUser,logoutUsers} = loginSlice.actions;
export default loginSlice.reducer 