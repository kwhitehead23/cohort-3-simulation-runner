import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './store/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer
  },
})