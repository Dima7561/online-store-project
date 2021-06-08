import React from "react";

import HeaderContainer from "../Header/containers/HeaderContainer";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderContainer />

      {children}
    </div>
  );
};

export default withStyles(styles)(MainLayout);
