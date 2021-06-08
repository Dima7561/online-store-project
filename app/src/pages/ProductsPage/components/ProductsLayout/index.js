import { Box, withStyles, makeStyles } from "@material-ui/core";
import React from "react";
import ProductsCard from "../../../../comonComponents/productsCard/index";
import Pagination from "@material-ui/lab/Pagination";

import styles from "./styles";

const ProductsLayout = ({
  classes,
  allPokemon,
  handleGoToDetalis,
  handleAddToCart,
  handleClickPagination,
  page,
}) => {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.cardWrapper}>
        {allPokemon.map((area) => {
          return (
            <Box className={classes.cardMenu} key={area.id}>
              <ProductsCard
                name={area.name}
                price={area.price}
                image={area.image}
                id={area.id}
                handleClick={() => handleGoToDetalis(area.id)}
                handleAddToCart={handleAddToCart}
              />
            </Box>
          );
        })}
      </Box>
      <Pagination
        count={45}
        color="primary"
        className={classes.root}
        onChange={handleClickPagination}
        page={page}
      />
    </Box>
  );
};

export default withStyles(styles)(ProductsLayout);
