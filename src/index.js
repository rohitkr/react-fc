import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import react_fc from 'react-fusioncharts';

charts(FusionCharts);

// import App from './components/app';
// import react_fc from './components/react-fusioncharts';


// const React = require('react');
// const ReactDOM = require('react-dom');
// const FusionCharts = require('fusioncharts');
// require('fusioncharts/fusioncharts.charts')(FusionCharts);
// const react_fc = require('react-fusioncharts');


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
    document.getElementById('root')
);

ReactDOM.render(
	<react_fc.FusionCharts {...config} />,
	document.getElementById('root')
);








