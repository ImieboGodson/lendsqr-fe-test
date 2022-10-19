import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    isAuth: boolean;
    isSession: boolean;
}


const initialState: InitialState ={
    isAuth: false,
    isSession: JSON.parse(localStorage.getItem('isAuth')!),
}


export const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {
        signIn: (state) => {
            state.isAuth = true
            console.log('setAuth actions: ', state.isAuth);
            console.log('setAuth action session: ', state.isSession);
        },
        signOut: (state) => {
            state.isAuth = false
            console.log('setAuth action: ', state.isAuth);
            console.log('setAuth action session: ', state.isSession);
        }
    }
})

export const  { signIn, signOut } = authSlice.actions;

export const authReducer = authSlice.reducer;