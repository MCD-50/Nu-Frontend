import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise";
import reducer from "./reducer";

let middleware = [thunk, promise];
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
	const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default();
	middleware = [...middleware, reduxImmutableStateInvariant, logger];
}

const configureStore = ()=> (createStore(reducer, applyMiddleware(...middleware)));
export default configureStore;
