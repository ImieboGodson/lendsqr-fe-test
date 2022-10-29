// import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../utils/model'


type InitialState = {
  loading: boolean;
  users: User[] | null;
  error: string;
}

const initialState: InitialState = {
  loading: false,
  users: JSON.parse(localStorage.getItem('users')!),
  error: ''
}


export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
                .then(res => res.json())
                .then(data => { return data })
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: state => {
      localStorage.setItem('users', JSON.stringify(null));
      state.users = null;
      state.error = '';
      state.loading = false;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      // console.log('fetchUser', state.loading);
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        // console.log('fetchUser', action.payload);
        state.loading = false
        state.users = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // console.log('fetchUser', action.error.message);
      state.loading = false
      state.users = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export const usersReducer = usersSlice.reducer;
export const { resetUsers } = usersSlice.actions;