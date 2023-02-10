import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userServices from './userServices';

const initialState = {
    user: {},
    favorys: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {

            return await userServices.register(user)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (thunkAPI) => {
        try {

            await userServices.logout()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getFavory = createAsyncThunk(
    'auth/getFavory',
    async (thunkAPI) => {
        try {

            return await userServices.getFavory()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const favory = createAsyncThunk(
    'auth/favory',
    async (name, thunkAPI) => {
        try {
            console.log(name);
            await userServices.favory(name)
            return await userServices.getFavory()

        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const unfavory = createAsyncThunk(
    'auth/unfavory',
    async (name, thunkAPI) => {
        try {
            console.log(name);
            await userServices.unfavory(name)
            return await userServices.getFavory()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)



export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {

            return await userServices.login(user)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        rest: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getFavory.fulfilled, (state, action) => {
                state.favorys = action.payload
            })
            .addCase(favory.fulfilled, (state, action) => {
                state.favorys = action.payload

            })
            .addCase(unfavory.fulfilled, (state, action) => {
                state.favorys = action.payload

            })
    }
})




export const { rest } = userSlice.actions
export default userSlice.reducer