import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import useForm from "../../../helpers/hooks/useForm";
import HeaderLyaout from "../components/HeaderLayout";
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routesNames";

const HeaderContainer = () => {
  const [isLoadingOpen, setOpen] = useState(false);
  const [loginValues, handleChange] = useForm({ email: "", password: "" });
  const [isLoadingOpenSignUp, setOpenSignUp] = useState(false);
  const [formValues, handleChangeSignUp] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    phone: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { username, isAuth } = useSelector((state) => state.auth);

  const handleModalOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleModalClose = useCallback(() => {
    setOpen(false);
  }, []);
  const handleSubmit = useCallback(() => {
    dispatch(SIGN_IN_REQUEST(loginValues));
    setOpen(false);
  }, [loginValues, dispatch]);
  const handleLogout = useCallback(() => {
    history.push(`${ROUTES.HOME_PAGE}`);
    localStorage.clear();
    document.location.reload();
  }, []);
  useEffect(() => {
    if (isAuth) {
      history.push(`${ROUTES.PRODUCTS_PAGE}`);
    }
  }, [isAuth]);

  const handleGoToCart = useCallback(() => {
    history.push(`${ROUTES.CART_PAGE}`);
  }, []);

  const handleModalOpenSignUp = useCallback(() => {
    setOpenSignUp(true);
  }, []);
  const handleModalCloseSignUp = useCallback(() => {
    setOpenSignUp(false);
  }, []);

  const handleSubmitSignUp = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGN_UP_REQUEST(formValues));
      setOpenSignUp(false);
      setOpen(true);
    },

    [dispatch, formValues]
  );

  return (
    <HeaderLyaout
      isLoadingOpen={isLoadingOpen}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
      loginValues={loginValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      username={username}
      isAuth={isAuth}
      formValues={formValues}
      handleLogout={handleLogout}
      handleGoToCart={handleGoToCart}
      handleSubmitSignUp={handleSubmitSignUp}
      handleChangeSignUp={handleChangeSignUp}
      handleModalOpenSignUp={handleModalOpenSignUp}
      handleModalCloseSignUp={handleModalCloseSignUp}
      isLoadingOpenSignUp={isLoadingOpenSignUp}
    />
  );
};

export default HeaderContainer;
