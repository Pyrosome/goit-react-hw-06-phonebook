import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const initialState = {
  value: 0,
}

const clicksSlice = createSlice({
  name: 'clicks',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { update } = clicksSlice.actions

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['value'] 
}
export const ClicksReducer = persistReducer(persistConfig, clicksSlice.reducer)


// Selectors
export const getClicksValue = (state) => state.clicks.value;

