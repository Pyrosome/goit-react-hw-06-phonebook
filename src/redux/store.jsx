import { configureStore } from '@reduxjs/toolkit'
import { persistedClicksReducer } from './clicksSlice'
import { persistStore } from 'redux-persist'

export const store = configureStore({
    reducer: {
        clicks: persistedClicksReducer
  },
})

export const persistor = persistStore(store)
