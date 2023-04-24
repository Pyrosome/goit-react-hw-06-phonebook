import { configureStore } from '@reduxjs/toolkit'
import { clicksSlice } from './clicksSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}
const persistedClicksReducer = persistReducer(persistConfig, clicksSlice.reducer)


export const store = configureStore({
    reducer: {
        clicks: persistedClicksReducer
  },
})