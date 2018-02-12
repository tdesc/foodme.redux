import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
// import createLogger from 'redux-logger'
// import { createLogger } from 'redux-logger'

import composeWithDevTools from "./other/dev-tools";

import reducer from "./reducers/index";
import * as actionsTypes from "./actions/types";

// const logger = createLogger({
	// ...options
	// {
	// 	predicate, // if specified this function will be called before each action is processed with this middleware.
	// 	collapsed, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
	// 	duration = false: Boolean, // print the duration of each action?
	// 	timestamp = true: Boolean, // print the timestamp with each action?

	// 	level = 'log': 'log' | 'console' | 'warn' | 'error' | 'info', // console's level
	// 	colors: ColorsObject, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18
	// 	titleFormatter, // Format the title used when logging actions.

	// 	stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
	// 	actionTransformer, // Transform action before print. Eg. convert Immutable object to plain JSON.
	// 	errorTransformer, // Transform error before print. Eg. convert Immutable object to plain JSON.

	// 	logger = console: LoggerObject, // implementation of the `console` API.
	// 	logErrors = true: Boolean, // should the logger catch, log, and re-throw errors?

	// 	diff = false: Boolean, // (alpha) show diff between states?
	// 	diffPredicate // (alpha) filter function for showing states diff, similar to `predicate`
	// }
// });
let middleware;

if (composeWithDevTools) {
	middleware = composeWithDevTools(applyMiddleware( thunk));
} else {
	middleware = applyMiddleware( thunk);
};
 
export let store = createStore(reducer, middleware);

// let enhancer;
// if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//   enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//     applyMiddleware(...middleware)
//   );
// } else {
//   enhancer = compose(
//     applyMiddleware(...middleware),
//     DevTools.instrument(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   );
// }

// export let store = createStore(
//   reducer,
//   initialState,
//   enhancer
// );

// export let store = createStore(reducer, middleware);

export { actionsTypes };
