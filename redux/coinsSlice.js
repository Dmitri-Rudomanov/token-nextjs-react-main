import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    coins:[]
  },
  reducers: {
    updateList: (state,action) => {
      state.coins =[...action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateList } = counterSlice.actions

export default counterSlice.reducer