import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import react_fc from './components/react-fusioncharts';

// import FusionCharts from 'fusioncharts';
// import react_fc from '../react-fusioncharts/react-fusioncharts';


// React = require('react');
// ReactDOM = require('react-dom');
// FusionCharts = require('fusioncharts');

// App = require('./components/app');
// react_fc = require('../react-fusioncharts/react-fusioncharts');


// const val = Math.random();
// const color = val > 0.5 ? 'green' : 'red';
// const txt = "Hello React with JSX!! -- " + val;


// ReactDOM.render(
// 	React.createElement('h2', null, 'Hello React!'),
// 	document.getElementById('root')
// );

var config = {
	id: "revenue-chart",
    renderAt: "revenue-chart-container",
	type: "column2d",
	width:600,
    height: 400,
  	dataFormat: "json",
  	dataSource: {data: [{value: 500}, {value: 400}, {value: 600}]}
};

// ReactDOM.render(
// 	<App msg='Sample for FusionCharts npm module' />,
// 	document.getElementById('root')
// );


ReactDOM.render(
	<react_fc.FusionCharts {...config} />,
	document.getElementById('root')
);

