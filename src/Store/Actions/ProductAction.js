import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "../ActionTypes";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (products) => ({
  type: SELECTED_PRODUCT,
  payload: products,
});

export const removeSelectedProduct = () => ({
  type: REMOVE_SELECTED_PRODUCT,
});