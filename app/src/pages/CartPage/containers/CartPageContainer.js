import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART_REQUEST, REMOVE_FROM_CART, SUM_CART } from "../actions";
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
  return (
    <div>
      <CartPageLayout
        allPokemon={cartPokemon}
        handleRemoveFromCart={handleRemoveFromCart}
        onHandleItemChange={onHandleItemChange}
      />
    </div>
  );
};

export default CartPageContainer;
