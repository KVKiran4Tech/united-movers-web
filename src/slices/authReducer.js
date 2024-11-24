import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post('/api/login', credentials);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.user = null
                state.token = null
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.loading = false
                state.error = null;
                localStorage.setItem('token', action.payload.token)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = true
                state.user = null
                state.token = null
                state.error = action.payload.error
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;

