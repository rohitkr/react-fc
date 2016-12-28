import React from 'react';

var ReactFC = {},
    FusionCharts = (typeof window !== "undefined" ? window['FusionCharts'] : 
		typeof global !== "undefined" ? global['FusionCharts'] : null);

if (typeof FusionCharts === "undefined") {
	FusionCharts = require('fusioncharts');
}

class R_FC extends React.Component {
    displayName () {
        return ('FusionCharts');
    }
    constructor (props) {
        super(props);

        var global = this;
        // Store the chart configuration in fcConfigs
        global.fcConfigs = props;
        global.state = props;
    }
    componentWillMount () {
        
        var global = this;

        global.chartObj = new FusionCharts(this.state);
        global.setState(function (prevState, props) {
          return {
            renderAt: (prevState.renderAt || props.renderAt) || global.chartObj.id + '-container'
          };
        });
    }
    componentDidMount () {
        var global = this;
        global.chartObj.render(global.state.renderAt);
    }
    componentWillUnmount () {
        var global = this;
        global.chartObj && global.chartObj.dispose();
    }
    componentDidUpdate () {
        var global = this,
            arrImpactedBy;

        if (global.fcConfigs.type !== global.state.type) {
          global.chartObj.chartType(global.state.type);
        }

        if (global.fcConfigs.dataSource !== global.state.dataSource) {
          global.chartObj.setChartData(global.state.dataSource, global.state.dataFormat);
        }
        
        arrImpactedBy = global.fcConfigs.impactedBy;
        if (arrImpactedBy && arrImpactedBy.length > 0 && 
        		arrImpactedBy.indexOf(global.props.eventSource) > -1) {
            global.chartObj.setChartAttribute(global.fcConfigs);
            global.chartObj.setChartData(global.fcConfigs.dataSource);
        }
    }

    render () {
        var global = this;
        
        return (
        	<div className={global.state.className} id={global.state.renderAt} />
        );
    }
}

ReactFC.FusionCharts = R_FC;

export default ReactFC;

