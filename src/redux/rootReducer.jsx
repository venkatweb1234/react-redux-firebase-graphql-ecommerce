import { combineReducers } from "redux";
import productsReducer from "./Products/products.reducer";
import userReducer from "./User/user.reducer";
import cartReducer from "./Cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
});
