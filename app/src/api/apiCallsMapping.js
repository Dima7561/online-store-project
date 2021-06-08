import * as singUpActions from "../comonComponents/Header/actions";
import * as signUpAPI from "../comonComponents/Header/api";

import * as singInActions from "../comonComponents/Header/actions";
import * as signInAPI from "../comonComponents/Header/api";

import * as productsActions from "../pages/ProductsPage/actions";
import * as productsAPI from "../pages/ProductsPage/api";

import * as productsDetalisActions from "../pages/ProductsDetalisPage/actions";
import * as productsDetalisAPI from "../pages/ProductsDetalisPage/api";

import * as cartActions from "../pages/CartPage/actions";
import * as cartAPI from "../pages/CartPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [singUpActions.SIGN_UP_REQUEST]: signUpAPI.signUp,
    [singInActions.SIGN_IN_REQUEST]: signInAPI.signIn,
    [productsActions.GET_PRODUCTS_REQUEST]: productsAPI.products,
    [productsDetalisActions.GET_PRODUCTS_DETALIS_REQUEST]:
      productsDetalisAPI.productsDetalis,
    [cartActions.GET_CART_REQUEST]: cartAPI.cart,
  };
  if (!mapping.hasOwnProperty(action.type)) {
    throw Error("Not mapped action");
  }
  return mapping[action.type];
};
export default apiCallsMapping;
