import cartReducer from "./cartRedux/CartReducer";
import productReducer from "./productRedux/ProductReducer";
import wishlistReducer from "./wishlistRedux/WishlistReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  cart:cartReducer, 
  product:productReducer,
  wishlist:wishlistReducer
})

export default rootReducer