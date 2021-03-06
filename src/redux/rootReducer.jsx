import { combineReducers } from "redux";
import productsReducer from "./Products/products.reducer";
import userReducer from "./User/user.reducer";
import cartReducer from "./Cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ordersReducer from './Orders/orders.reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cartData"],
};

export default persistReducer(configStorage, rootReducer);
