// import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../model'


type InitialState = {
  loading: boolean;
  user: User | null;
  error: string;
}

const initialState: InitialState = {
  loading: false,
  user: JSON.parse(localStorage.getItem('user')!),
  error: ''
}


export const fetchUser = createAsyncThunk('user/fetchUser', async (id: string) => {
    const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
    const data: User = await res.json();
    return data;
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: state => {
      localStorage.setItem('user', JSON.stringify(null));
      state.user = null;
      state.error = '';
      state.loading = false;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true;
    })
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.error = '';
      }
    )
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message || 'Something went wrong';
    })
  }
})

export const userReducer = userSlice.reducer;
export const { resetUser } = userSlice.actions;