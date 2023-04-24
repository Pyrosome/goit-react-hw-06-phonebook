import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = clicksSlice.actions
