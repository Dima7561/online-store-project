import React from "react";
import PropTypes from "prop-types";
import { Box, withStyles } from "@material-ui/core";
import styles from "./styles";
import PokemonCard from "../../../../comonComponents/PokemonCard";

const ProductsDetalisLayout = ({ classes, pokemonInfo, handleAddToCart }) => {
  return (
    <Box className={classes.wrapper}>
      <PokemonCard
        name={pokemonInfo.name}
        image={pokemonInfo.image}
        id={pokemonInfo.id}
        price={pokemonInfo.price}
        pokemonInfo={pokemonInfo}
        handleAddToCart={handleAddToCart}
      />
    </Box>
  );
};

ProductsDetalisLayout.propTypes = {};

export default withStyles(styles)(ProductsDetalisLayout);
