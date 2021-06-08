import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";

import storage from "redux-persist/lib/storage";
import signUp from "../comonComponents/Header/reducers/index2";
import auth from "../comonComponents/Header/reducers";
import products from "../pages/ProductsPage/reducers";
import ProductsDetalis from "../pages/ProductsDetalisPage/reducers";
import cart from "../pages/CartPage/reducers";
const authBlackListedFields = createBlacklistFilter("auth", [
  "isLoading",
  "errors",
]);
const productsBlackListedFields = createBlacklistFilter("products", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "products"],
  transforms: [authBlackListedFields, productsBlackListedFields],
};

const rootReducer = combineReducers({
  signUp,
  auth,
  products,
  ProductsDetalis,
  cart,
});

export default persistReducer(persistConfig, rootReducer);
