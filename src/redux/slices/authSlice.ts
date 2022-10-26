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
            state.isAuth = true;
            localStorage.setItem('isAuth', JSON.stringify(true));
            state.isSession = true;
        },
        signOut: (state) => {
            state.isAuth = false;
            localStorage.setItem('isAuth', JSON.stringify(false));
            state.isSession = false;
        }
    }
})

export const  { signIn, signOut } = authSlice.actions;

export const authReducer = authSlice.reducer;