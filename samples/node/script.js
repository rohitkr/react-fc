const React = require('react');
const ReactDOM = require('react-dom');
const FusionCharts = require('fusioncharts');
require('fusioncharts/fusioncharts.charts')(FusionCharts);
const react_fc = require('react-fusioncharts');

// App = require('./components/app');


var config = {
	id: "revenue-chart",
    renderAt: "revenue-chart-container",
	type: "column2d",
	width:600,
    height: 400,
  	dataFormat: "json",
  	dataSource: {data: [{value: 500}, {value: 400}, {value: 600}]}
};

ReactDOM.render(
	React.createElement('h2', null, 'Hello React!'),
	document.getElementById('chartContainer')
);

ReactDOM.render(
	React.createElement(react_fc.FusionCharts, config, 'Hello React!'),
	document.getElementById('chartContainer')
);

