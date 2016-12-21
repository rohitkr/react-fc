import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
Charts(FusionCharts);

let react_fc = {
}

class fusioncharts extends React.Component {
    constructor (props) {
        console.log('constructor called...');

        super(props);

        global = this;
        // Store the chart configuration in fc_configs
        global.fc_configs = props;
        global.state = props;
  	}
    componentWillMount () {
        console.log('will Mount');
        
        global = this;
        // global.fc_configs = global.props;

        console.log(global);
        console.log('state is: ', this.state);

        global.chartObj = new FusionCharts(this.state);
        global.setState(function (prevState, props) {
        	return {
	        	renderAt: (prevState.renderAt || props.renderAt) || global.chartObj.id + '-container'
	        }
        });
        // global.fc_configs.renderAt = global.state.renderAt || global.chartObj + '-container';
    }
    componentDidMount () {
        console.log('Did Mount');
        
        global = this;
        global.chartObj.render(global.state.renderAt);
    }
    componentWillUnmount () {
        console.log('will UnMount');

        global = this;
        global.chartObj && global.chartObj.dispose();
    }
    render (props) {
        global = this;
        
        console.log('element render...');
        return (
            React.createElement("div", {className: global.state.className, id: global.state.renderAt})
        );
    }
    componentDidUpdate () {
        global = this;

        console.log('componentDidUpdate called...');
        console.log('state: ', global.state);
        console.log('fc_configs: ', global.fc_configs);
        console.log('props: ', global.props);

        if (global.fc_configs.type !== global.state.type) {
        	global.chartObj.chartType(global.state.type);
        }

        if (global.fc_configs.dataSource !== global.state.dataSource) {
        	global.chartObj.setChartData(global.state.dataSource, global.state.dataFormat);
        }
        
        // var arr_impacted_by = global.fc_configs.impactedBy;
        // if (arr_impacted_by && arr_impacted_by.length > 0 && arr_impacted_by.indexOf(global.props.eventSource) > -1) {
        //     global.chartObj.setChartAttribute(global.fc_configs);
        //     global.chartObj.setChartData(global.fc_configs.dataSource);
        // }
    }
}

react_fc.FusionCharts = fusioncharts;

export default react_fc;
