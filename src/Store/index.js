import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MainReducer from './Reducers';

const store = createStore(MainReducer, composeWithDevTools());

export default store;
