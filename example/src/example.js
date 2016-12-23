import React from 'react';
import ReactDOM from 'react-dom';
import ReactFc from 'react-fc';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';

const React_fc = ReactFc.FusionCharts;

Chart(FusionCharts);

var config = {
	type: "column2d",
	width:600,
    height: 400,
  	dataFormat: "json",
  	dataSource: {data: [{value: 500}, {value: 400}, {value: 600}]}
};


var App = React.createClass({
	render () {
		return (
			<div>
				<React_fc {...config} />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
