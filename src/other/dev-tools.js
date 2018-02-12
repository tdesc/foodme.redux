let composeWithDevTools = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
	function() {
		if (arguments.length === 0) return undefined;
		if (typeof arguments[0] === 'object') return compose;
		return compose.apply(null, arguments);
	};

export default composeWithDevTools;