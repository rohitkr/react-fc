var React = require('react'),
	ReactDOM = require('react-dom'),
    FusionCharts = require("fusioncharts");
	charts = require("fusioncharts/fusioncharts.charts");
	react_fc = require("../../react-fusioncharts/react-fusioncharts");



var element = React.createElement('div', { id: 'chart' });

ReactDOM.render(element, document.getElementById('react-app'), function () {
	charts(FusionCharts);
    // Construct the chart
    ch = FusionCharts.render({
		id: "revenue-chart",
	    renderAt: "chart",
		type: "column2d",
		width:600,
        height: 400,
	  	dataFormat: "xml",
    	dataSource: '<chart><set value="50"/> <set value="70"/> <set value="60"/> </chart>'
    });
});




