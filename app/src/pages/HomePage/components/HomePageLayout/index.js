import PropTypes from "prop-types";

import { withStyles, Box, Button } from "@material-ui/core";
import styles from "./styles";

const HomePageLayout = ({ classes }) => {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        Welcome <br></br> to the <br></br>Pokemon Store!
      </Box>
    </Box>
  );
};

HomePageLayout.defaultProps = {};

export default withStyles(styles)(HomePageLayout);
