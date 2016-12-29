var webpack = require('webpack');

module.exports = function (config) {

  config.set({
	    "browsers": [ "PhantomJS" ],
	    "singleRun": true,
	    "frameworks": [ "mocha" ],
	    "plugins": [
	        "karma-babel-preprocessor",
	        "karma-mocha",
	        "karma-webpack",
	        "karma-coverage",
	        "karma-phantomjs-launcher"
	    ],
	    "files": [ "tests.webpack.js" ],
	    "preprocessors": {
	        "tests.webpack.js": [ "webpack" ]
	    },
	    "webpack": {
	        "devtool": "inline-source-map",
	        "module": {
	            "loaders": [{
	            	"test": /\.js$/,
                    "loader": "babel-loader",
                    "query": {
                        "presets": [ "react", "es2015" ]
                    }
                }]
	        }
	    },
	    "reporters": [ "dots" ],
	    "webpackServer": {
	        "noInfo": true
	    }
	});
};
