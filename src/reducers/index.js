import { combineReducers } from "redux";

import staff from "./staff"
import orders from "./orders"
import products from "./products"
import additions from "./additions"
import categories from "./categories"

export default combineReducers({
	staff,
	orders,
	products,
	additions,
	categories
});