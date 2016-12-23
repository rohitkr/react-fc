var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

/**
 * Tasks are added by the react-component-gulp-tasks package
 *
 * See https://github.com/JedWatson/react-component-gulp-tasks
 * for documentation.
 *
 * You can also add your own additional gulp tasks if you like.
 */

var taskConfig = {

	component: {
		name: 'react_fc',
		dependencies: [
			'classnames',
			'react',
			'react-dom',
			'fusioncharts'
		],
		lib: 'lib'
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'url-sample.html',
			'./images/*.png',
			'./src/js/*.js',
			'./fonts/*',
			'.gitignore'
		],
		scripts: [
			'script.js'
		],
		less: [
			'style.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
