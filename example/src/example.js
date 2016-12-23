import React from 'react';
import ReactDOM from 'react-dom';
import ReactFc from 'react-fc';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FC from 'fusioncharts/fusioncharts.powercharts';
import jQuery from 'jquery';

const React_fc = ReactFc.FusionCharts;

// Chart(FusionCharts);

var config = {
	type: "Spline",
	width:600,
    height: 400,
  	dataFormat: "json",
  	dataSource: {data: [{value: 500}, {value: 400}, {value: 600}]}
};

console.log(jQuery);

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
