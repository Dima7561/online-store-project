import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { GET_PRODUCTS_REQUEST } from "../actions";
import ProductsLayout from "../components/ProductsLayout";

import { ROUTES } from "../../../routes/routesNames";
import { GET_CART_SUCCESS } from "../../CartPage/actions";

const ProductsContainer = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { allPokemon, isLoading, errors, page } = useSelector(
    (state) => state.products
  );

  const handleGoToDetalis = useCallback((id) => {
    history.push(`${ROUTES.PRODUCTS_PAGE}/${id}`);
  }, []);

  const handleClickPagination = useCallback(
    (event, value) => {
      dispatch(GET_PRODUCTS_REQUEST(value));
    },
    [dispatch]
  );
  useEffect(() => {
    dispatch(GET_PRODUCTS_REQUEST(page));
  }, [page]);

  const handleAddToCart = useCallback((id) => {
    dispatch(GET_CART_SUCCESS({ ...id, quantity: 1 }));
  }, []);

  return (
    <div>
      <ProductsLayout
        allPokemon={allPokemon}
        handleGoToDetalis={handleGoToDetalis}
        handleClickPagination={handleClickPagination}
        handleAddToCart={handleAddToCart}
        page={page}
      />
    </div>
  );
};

export default ProductsContainer;
