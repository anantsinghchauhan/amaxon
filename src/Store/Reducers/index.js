import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./ProductReducer";

export default combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
