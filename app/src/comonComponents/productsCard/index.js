import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  withStyles,
  CardMedia,
} from "@material-ui/core";

const ProductsCard = ({
  classes,
  name,
  image,
  price,
  id,
  handleClick,
  handleAddToCart,
}) => {
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.button}>
          <Typography gutterBottom variant="h4">
            {id}.{name}
          </Typography>

          <CardMedia className={classes.media} />
          <img src={image}></img>

          <CardActions className={classes.button}>
            <Typography variant="body2" component="p" className={classes.price}>
              {price}$
            </Typography>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                handleAddToCart({
                  id,
                  name,
                  price,
                  image,
                })
              }
            >
              Buy
            </Button>
            <Button size="small" color="primary" onClick={handleClick}>
              Open
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductsCard.defaultProps = {
  name: "some user",
};
ProductsCard.propTypes = {
  name: PropTypes.string,
};
export default React.memo(withStyles(styles)(ProductsCard));
