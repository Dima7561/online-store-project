import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Box,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import styles from "./styles";
import { ROUTES } from "../../routes/routesNames";

const PokemonCard = ({
  classes,
  image,
  id,
  name,
  price,
  pokemonInfo,
  handleAddToCart,
}) => {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBackClick = useCallback(() => {
    history.push(`${ROUTES.PRODUCTS_PAGE}`);
  }, []);

  return (
    <Box className={classes.wrapper}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={image}></img>
            </Avatar>
          }
          action={
            <CardContent className={classes.icon}>
              {id}. {name}
            </CardContent>
          }
        />
        <CardMedia />

        <CardContent>
          <Typography variant="h5" component="p" className={classes.media}>
            {pokemonInfo.abilities ? pokemonInfo?.abilities[0]?.title : null}
          </Typography>
          <Typography variant="body2" component="p" className={classes.media}>
            {pokemonInfo.abilities
              ? pokemonInfo?.abilities[0]?.description
              : null}
          </Typography>
          <br></br>
          <Typography variant="h5" component="p" className={classes.media}>
            {pokemonInfo.abilities ? pokemonInfo?.abilities[1]?.title : null}
          </Typography>
          <Typography variant="body2" component="p" className={classes.media}>
            {pokemonInfo.abilities
              ? pokemonInfo?.abilities[1]?.description
              : null}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" component="p" className={classes.price}>
            {price}$
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography aria-label="add to favorites">
            Add to Shopping Cart :
          </Typography>

          <IconButton
            aria-label="share"
            onClick={() =>
              handleAddToCart({
                id,
                name,
                price,
                image,
              })
            }
          >
            <ShoppingCartIcon />
          </IconButton>

          <Typography aria-label="add to favorites" className={classes.back}>
            Back :
          </Typography>
          <IconButton aria-label="share" onClick={handleBackClick}>
            <ExitToAppIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h3" paragraph>
              Stats:
            </Typography>

            <Typography paragraph className={classes.Stats_5}>
              {pokemonInfo.stats ? pokemonInfo?.stats[4]?.title : null}:{" "}
              {pokemonInfo.stats ? pokemonInfo?.stats[4]?.value : null}
            </Typography>
            <Typography paragraph className={classes.Stats_2}>
              {pokemonInfo.stats ? pokemonInfo?.stats[1]?.title : null}:{" "}
              {pokemonInfo.stats ? pokemonInfo?.stats[1]?.value : null}
            </Typography>
            <Typography paragraph className={classes.Stats_3}>
              {pokemonInfo.stats ? pokemonInfo?.stats[2]?.title : null}:{" "}
              {pokemonInfo.stats ? pokemonInfo?.stats[2]?.value : null}
            </Typography>
            <Typography paragraph className={classes.Stats_4}>
              {pokemonInfo.stats ? pokemonInfo?.stats[3]?.title : null}:{" "}
              {pokemonInfo.stats ? pokemonInfo?.stats[3]?.value : null}
            </Typography>
            <Typography paragraph className={classes.Stats_1}>
              {pokemonInfo.stats ? pokemonInfo?.stats[0]?.title : null}:{" "}
              {pokemonInfo.stats ? pokemonInfo?.stats[0]?.value : null}
            </Typography>
            <Typography paragraph className={classes.Stats_6}>
              {pokemonInfo.stats ? pokemonInfo?.stats[5]?.title : null}:{" "}
              {pokemonInfo.stats ? pokemonInfo?.stats[5]?.value : null}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};
PokemonCard.propTypes = {};

export default React.memo(withStyles(styles)(PokemonCard));
