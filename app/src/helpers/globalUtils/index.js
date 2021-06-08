export const calculateCartItemPrice = (quantity, price) => {
  return price * quantity;
};

export const calculateTotalPrice = (cartPokemon) =>
  cartPokemon.reduce((accumulator, area) => accumulator + area.price, 0);
