import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "./routesNames";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Redirect to={ROUTES.HOME_PAGE} /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  //   component: PropsType.node.isRequired,
};

export default PrivateRoute;
