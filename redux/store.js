
import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from './coinsSlice'
export default configureStore({
    reducer: {
       coins: coinsReducer
  }
})