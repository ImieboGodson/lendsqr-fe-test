// import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../model'


type InitialState = {
  loading: boolean;
  user: User;
  error: string;
}

const initialState: InitialState = {
  loading: false,
  user: JSON.parse(localStorage.getItem('user')!),
  error: ''
}


export const fetchUser = createAsyncThunk('user/fetchUser', async (id: string | undefined) => {
    const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
    const data: User = await res.json();
    console.log('Returned user data:', data);
    return data;
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      console.log('fetchUser', state.loading);
      state.loading = true
    })
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        console.log('fetchUser', action.payload);
        state.loading = false
        state.user = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log('fetchUser', action.error.message);
      state.loading = false
      state.user = JSON.parse(localStorage.getItem('user')!)
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export const userReducer = userSlice.reducer;