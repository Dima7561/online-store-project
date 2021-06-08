import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./routesNames";
import PrivateRoute from "./PrivateRoute";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import ProductsContainer from "../pages/ProductsPage/containers/ProductsContainer";
import ProductsDetalisContainer from "../pages/ProductsDetalisPage/containers/ProductsDetalisContainer";
import CartPageContainer from "../pages/CartPage/containers/CartPageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />

      <PrivateRoute
        exact
        path={ROUTES.PRODUCTS_PAGE}
        component={ProductsContainer}
      />
      <Route
        exact
        path={ROUTES.PRODUCTS_DETALIS_PAGE}
        component={ProductsDetalisContainer}
      />
      <Route exact path={ROUTES.CART_PAGE} component={CartPageContainer} />
    </Switch>
  );
};
export default Routes;
