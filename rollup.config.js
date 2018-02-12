// import eslint from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
// import progress from 'rollup-plugin-progress';
// import inject from 'rollup-plugin-inject';
// import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
// rollup.config.js 
// import livereload from 'rollup-plugin-livereload'
 
export default {
	entry: 'src/main.js',
	// dest: 'build/food-redux.js',
	dest: '../foodMe/public/src/' + (process.env.BUILD_MODE === 'production'?'food-redux.min.js':'food-redux.js'),

	format: 'umd',
	moduleName: 'FoodMeRedux',

	plugins: [
	    // livereload(),
  
		//cleanup(),
		// json({
		// 	//include: 'node_modules/**',  // Default: undefined
		// 	//exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
		// 	//preferConst: true, // Default: false
		// }),
		// resolve({
		// 	//module: false,
		// 	jsnext: true,
		// 	// preferBuiltins: false, 
		// 	//  modulesOnly: true, 
		// 	// main: true,
		// 	browser: true
		// }),
		nodeResolve({
			module: true, // Default: true

			// use "jsnext:main" if possible
			// – see https://github.com/rollup/rollup/wiki/jsnext:main
			jsnext: true,  // Default: false

			// use "main" field or index.js, even if it's not an ES6 module
			// (needs to be converted from CommonJS to ES6
			// – see https://github.com/rollup/rollup-plugin-commonjs
			main: true,  // Default: true

			// some package.json files have a `browser` field which
			// specifies alternative files to load for people bundling
			// for the browser. If that's you, use this option, otherwise
			// pkg.browser will be ignored
			browser: true,  // Default: false
			// If true, inspect resolved files to check that they are
			// ES2015 modules
			// modulesOnly: true, // Default: false
		}),
		commonjs({
			include: 'node_modules/**'
		}),

		// commonjs({
		// 	ignore: [ 'redux', 'redux-thunk' ],
		// 	// ignoreGlobal: true,
		// 	// include: [ 'node_modules/redux-devtools-extension/**' ],
		// 	 //exclude: [ 'node_modules/redux/**', 'node_modules/redux-thunk/**' ]
		// 	//exclude: [ 'node_modules/redux-thunk/**' ]
		// }),
		babel({
			// exclude: 'node_modules/**',
			// babelrc: false,
			// plugins: ['external-helpers', 'transform-object-rest-spread'],
			// externalHelpers: true
		}),
		(process.env.BUILD_MODE === 'eslint' && eslint({
			exclude: [
				'src/styles/**',
			]
		})),
		replace({
			'process.env.NODE_ENV': JSON.stringify( 'production' )
		}),
		replace({
			// exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		(process.env.BUILD_MODE === 'production' && uglify({}, minify)),
		// progress({
		// 	//clearLine: false // default: true
		// }),
		// inject({
		// 	// control which files this plugin applies to
		// 	// with include/exclude
		// 	//include: 'src/**/*.js',
		// 	//exclude: 'node_modules/**',

		// 	// /* all other options are treated as modules...*/

		// 	// // use the default – i.e. insert
		// 	// // import $ from 'jquery'
		// 	// $: 'jquery',

		// 	// // use a named export – i.e. insert
		// 	// // import { Promise } from 'es6-promise'
		// 	//Promise: [ 'es6-promise', 'Promise' ],

		// 	// // use a namespace import – i.e. insert
		// 	// // import * as fs from 'fs'
		// 	// fs: [ 'fs', '*' ],
		// 	//reduxDevtoolsExtension: ['redux-devtools-extension', '*'],

		// 	// // use a local module instead of a third-party one
		// 	// 'Object.assign': path.resolve( 'src/helpers/object-assign.js' ),

		// 	/* ...but if you want to be careful about separating modules
		// 		 from other options, supply `options.modules` instead */

		// 	modules: {
		// 		//composeWithDevTools: ['redux-devtools-extension', 'composeWithDevTools']
		// 		//Redux: ["redux", "*"]
		// 		//CONSTS: path.resolve('src/other/consts.js'),
		// 		//utils: path.resolve('src/other/utils.js'),
		// 	}
		// })
	]
};