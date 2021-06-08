import React from "react";
import PropTypes from "prop-types";

import { TextField, Box, Button, Dialog, withStyles } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import styles from "./styles";

const SignUpPageLayout = ({
  handleChange,
  handleSubmit,
  classes,
  formValues,
  handleClose,
  isOpen,
}) => {
  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          REGISTRASTION
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <form noValidate autoComplete="on" onSubmit={handleSubmit}>
            <Box>
              <TextField
                className={classes.input}
                required
                value={formValues.firstName}
                name="firstName"
                label="First Name"
                variant="filled"
                onChange={handleChange}
              />
              <TextField
                className={classes.input}
                required
                value={formValues.lastName}
                name="lastName"
                label="Last Name"
                variant="filled"
                onChange={handleChange}
              />
              <TextField
                className={classes.input}
                required
                name="email"
                value={formValues.email}
                label="E-mail"
                variant="filled"
                type="email"
                onChange={handleChange}
              />
              <TextField
                className={classes.input}
                required
                value={formValues.gender}
                name="gender"
                label="Gender"
                variant="filled"
                onChange={handleChange}
              />

              <TextField
                className={classes.input}
                required
                value={formValues.password}
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={handleChange}
              />
              {/* <TextField
                className={classes.input}
                required
                label="Repeat password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              /> */}
              <TextField
                className={classes.input}
                required
                value={formValues.phone}
                name="phone"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                onChange={handleChange}
              />
            </Box>
          </form>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button onClick={handleSubmit} color="primary">
            SING UP
          </Button>
        </MuiDialogActions>
      </Dialog>
    </Box>
  );
};
SignUpPageLayout.propTypes = {};

export default React.memo(withStyles(styles)(SignUpPageLayout));
