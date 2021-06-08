import React from "react";

import { withStyles, Button, Dialog, Box, TextField } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import styles from "./styles";

const LoginModal = ({
  isOpen,
  handleClose,
  handleSubmit,
  handleChange,
  loginValues,
}) => {
  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          LOGIN
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Box>
            <TextField
              value={loginValues.email}
              name="email"
              label="email"
              type="email"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <TextField
              value={loginValues.password}
              name="password"
              label="password"
              type="password"
              onChange={handleChange}
            />
          </Box>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button onClick={handleSubmit} color="primary">
            LOGIN
          </Button>
        </MuiDialogActions>
      </Dialog>
    </Box>
  );
};
export default React.memo(withStyles(styles)(LoginModal));
