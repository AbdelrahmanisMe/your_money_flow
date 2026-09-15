import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getErrorMessage } from "../api/error.api";
import { register, login, getMe } from '../api/auth.api';

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password, rememberMe }, { rejectWithValue }) => {
        try {
            const res = await login(email, password, rememberMe);
            if (res.data.token) {
                localStorage.setItem(res.data.token)
            }
            return res.data.data;

        } catch (error) {
            // نبعث رسالة الخطأ النصية التي ترجعها الدالة getErrorMessage
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const res = await register(name, email, password);
            if (res.data.token) {
                localStorage.setItem(res.data.token)
            }
            return res.data.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const featchMe = createAsyncThunk(
    "auth/me",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getMe();
            return res.data.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

const initialState = {
    user: null,
    initializing: Boolean(localStorage.getItem("token")),
    status: "idle", // 'idle' | 'loading' | 'success' | 'failed'
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        cleareError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // --- Register ---
            .addCase(registerUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload.user || null;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload; // يحتوي على رسالة الخطأ النصية
            })

            // --- Login ---
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload.user || null;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload; // يحتوي على رسالة الخطأ النصية
            })

            // --- Fetch Me ---
            .addCase(featchMe.pending, (state) => {
                state.initializing = true;
            })
            .addCase(featchMe.fulfilled, (state, action) => {
                state.initializing = false;
                state.user = action.payload;
            })
            .addCase(featchMe.rejected, (state) => {
                state.initializing = false;
                state.user = null;
                localStorage.removeItem("token");
            });
    }
});

export const { cleareError } = authSlice.actions;
export default authSlice.reducer;