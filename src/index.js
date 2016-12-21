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

// var config = {
// 	id: "revenue-chart",
//     renderAt: "revenue-chart-container",
// 	type: "column2d",
// 	width:600,
//     height: 400,
//   	dataFormat: "json",
//   	dataSource: {data: [{value: 500}, {value: 400}, {value: 600}]}
// };

// // ReactDOM.render(
// // 	<App msg='Sample for FusionCharts npm module' />,
// // 	document.getElementById('root')
// // );


// ReactDOM.render(
// 	<react_fc.FusionCharts {...config} />,
// 	document.getElementById('root')
// );






var myDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
    },
    data:[{
        label: "Bakersfield Central",
        value: "880000"
    },
    {
        label: "Garden Groove harbour",
        value: "730000"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000"
    },
    {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};

var MyApp = React.createClass({
    getInitialState: function () {
        return {
            filterSource: ""
        };
    },
    changeBackgroundColor: function () {
    	console.log('change color: ', this.state);
        this.setState({
            filterSource: "btn-change-bg-color"
        });
    },
    changeCaptionTextAlignment: function () {
        this.setState({
            filterSource: "btn-change-text-align"
        });
    },
    render: function () {
        var revenueChartConfigs = {
            // id: "column_chart",
            // renderAt: "column_chart_container",
            type: "column2d",
            width:600,
            height: 400,
            dataFormat: "json",
            dataSource: myDataSource,
            eventSource: this.state.filterSource,
            impactedBy: ["btn-change-bg-color","btn-change-text-align"]
        };

        // Change the column chart's attribute values
        if (this.state.filterSource && this.state.filterSource.length > 0) {
            switch (this.state.filterSource) {
                case "btn-change-bg-color":     revenueChartConfigs.dataSource.chart.bgColor = "#ff0000";
                                                break;
                case "btn-change-text-align":   revenueChartConfigs.dataSource.chart.captionAlignment = "left";
                                                break;
            }
        }


        return (
            <div>
                <react_fc.FusionCharts {...revenueChartConfigs} />
                <a  id="btn-change-bg-color"
                    onClick={this.changeBackgroundColor}
                    className="btn btn-default"
                    href="#">{"Change chart background color"}</a>
                <a  id="btn-change-text-align"
                    onClick={this.changeCaptionTextAlignment}
                    className="btn btn-default"
                    href="#">{"Make Caption text left-aligned"}</a>
            </div>
        );
    }
});

ReactDOM.render( 
    <MyApp />,
    document.getElementById("root")
);






