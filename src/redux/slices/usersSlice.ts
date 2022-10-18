import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../model'


type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
}

const initialState: InitialState = {
  loading: false,
  users: [],
  error: ''
}

// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//   return axios
//     .get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
//     .then(response => response.data)
// })


export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
                .then(res => res.json())
                .then(data => {
                  console.log(data)
                  return data
                })
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export const usersReducer = userSlice.reducer;