import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import incomeSlice from "./incomeSlice";


export const store = configureStore({

  reducer: {
    auth:authSlice,
    income:incomeSlice,
  },
})