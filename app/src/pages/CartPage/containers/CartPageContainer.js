import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalPrice } from "../../../helpers/globalUtils";
import {
  GET_CART_REQUEST,
  INCR_CART,
  REMOVE_FROM_CART,
  sendOrderStart,
  SUM_CART,
} from "../actions";
import CartPageLayout from "../components/CartPageLayout";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { cartPokemon } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, []);
  const handleRemoveFromCart = useCallback(
    (id) => {
      dispatch(REMOVE_FROM_CART(id));
    },
    [cartPokemon]
  );
  // const onHandleItemChange = useCallback(
  //   (payloud) => {
  //     dispatch(SUM_CART(payloud));
  //   },
  //   [dispatch]
  // );

  const onHandleItemChange = useCallback(
    (payload) => {
      if (payload.fieldToEdit === "quantity") {
        if (+payload.value <= 1) {
          dispatch(
            SUM_CART({
              id: payload.id,
              value: 1,
              fieldToEdit: "quantity",
            })
          );
        } else {
          dispatch(SUM_CART(payload));
        }
      } else {
        dispatch(SUM_CART(payload));
      }
    },
    [cartPokemon]
  );
  // const onHandleSubmit = useCallback(
  //   (data) => {
  //     const totalPrice = calculateTotalPrice(cartPokemon);

  //     dispatch(sendOrderStart({ ...data, totalPrice }));
  //   },
  //   [cartPokemon]
  // );
  return (
    <div>
      <CartPageLayout
        allPokemon={cartPokemon}
        handleRemoveFromCart={handleRemoveFromCart}
        onHandleItemChange={onHandleItemChange}
        // onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default CartPageContainer;
