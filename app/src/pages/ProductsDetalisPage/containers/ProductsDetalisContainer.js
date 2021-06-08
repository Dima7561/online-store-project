import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GET_CART_SUCCESS } from "../../CartPage/actions";
import { GET_PRODUCTS_DETALIS_REQUEST } from "../actions";
import ProductsDetalisLayout from "../components/ProductsDetalisLayout";

const ProductsDetalisContainer = ({}) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { pokemonInfo, isLoading, errors } = useSelector(
    (state) => state.ProductsDetalis
  );

  useEffect(() => {
    dispatch(GET_PRODUCTS_DETALIS_REQUEST(id));
  }, [pokemonInfo.id]);

  const handleAddToCart = useCallback((id) => {
    dispatch(GET_CART_SUCCESS({ ...id, quantity: 1 }));
  }, []);
  return (
    <div>
      <ProductsDetalisLayout
        pokemonInfo={pokemonInfo}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductsDetalisContainer;
