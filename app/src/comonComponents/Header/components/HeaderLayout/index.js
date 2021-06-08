import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import SignUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";

import { withStyles, Box, Button, Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import styles from "./styles";

const HeaderLyaout = ({
  classes,
  loginValues,
  handleModalOpen,
  isLoadingOpen,
  handleChange,
  handleSubmit,
  handleModalClose,
  handleLogout,
  handleGoToCart,
  username,
  isAuth,
  handleChangeSignUp,
  handleSubmitSignUp,
  handleModalCloseSignUp,
  handleModalOpenSignUp,
  isLoadingOpenSignUp,
  formValues,
}) => {
  const { cartPokemon } = useSelector((state) => state.cart);
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.form}>
        <Box className={classes.user}>Hello, {isAuth ? username : "USER"}!</Box>
        <Button
          className={classes.button}
          onClick={isAuth ? handleLogout : handleModalOpen}
          variant="contained"
          color="secondary"
        >
          {isAuth ? "Logaut" : "SIGN IN"}
        </Button>
        {isAuth ? (
          ""
        ) : (
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleModalOpenSignUp}
          >
            Sign UP
          </Button>
        )}
        <LoginModal
          isOpen={isLoadingOpen}
          handleClose={handleModalClose}
          loginValues={loginValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <SignUpModal
          isOpen={isLoadingOpenSignUp}
          handleChange={handleChangeSignUp}
          formValues={formValues}
          handleSubmit={handleSubmitSignUp}
          handleClose={handleModalCloseSignUp}
        />
        <Box className={classes.cart}>
          {isAuth ? (
            <Button onClick={handleGoToCart}>
              <Badge badgeContent={cartPokemon.length} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Box>
  );
};

HeaderLyaout.propTypes = {};

export default withStyles(styles)(HeaderLyaout);
