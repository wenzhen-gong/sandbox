import { configureStore } from '@reduxjs/toolkit'
import catchReducer from './catchSlice'

export const store = configureStore({
  reducer: {
    myReducers: catchReducer,
  },
})