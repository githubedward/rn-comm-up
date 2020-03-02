import { PRODUCTS } from "../../data"

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
};

export const productsReducer = (state = initialState, action) => {
  return state;
}