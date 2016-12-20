import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
Charts(FusionCharts);

class react_fc extends React.Component {
    componentWillMount () {
		console.log('will Mount');
        global = this;
        global.fc_configs = {};
        console.log(global)
        // global.fc_configs = global.props;
        global.chartObj = new FusionCharts(global.props);
        global.fc_configs.renderAt = global.props.renderAt || global.chartObj + '-container';
	}
	componentDidMount () {
		console.log('Did Mount');
        global = this;

        global.chartObj.render(global.fc_configs.renderAt);
	}
	componentWillUnmount () {
		console.log('will UnMount');
	}
	render (props) {
		console.log('element created...');
		return (
            React.createElement("div", {className: global.fc_configs.className, id: global.fc_configs.renderAt})
		);
	}
    componentDidUpdate () {
        global = this;
        var arr_impacted_by = global.fc_configs.impactedBy;
        if (arr_impacted_by && arr_impacted_by.length > 0 && arr_impacted_by.indexOf(global.props.eventSource) > -1) {
            global.chartObj.setChartAttribute(global.fc_configs);
            global.chartObj.setChartData(global.fc_configs.dataSource);
        }
    }
}


export default react_fc;
