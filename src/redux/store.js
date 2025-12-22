import {configureStore} from "@reduxjs/toolkit"
import cartReaducer from'./slice'
import productsReducer from './productSlice'

const store = configureStore({
  reducer:{ 
    cart:cartReaducer,
    products:productsReducer
  }
})

export default store