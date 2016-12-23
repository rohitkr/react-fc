'use strict';
var React = require('react');

;(function (env, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = env.document ? factory(env) : function (win) {
            if (!win.document) {
                throw new Error('Window with document not present');
            }
            return factory(win, true);
        };
    } else {
        env.react_fc = factory(env, true);
    }
})(typeof window !== 'undefined' ? window : this, function (_window, windowExists) {

    var FusionCharts = _window.FusionCharts;
    
    class fusioncharts extends React.Component {
        displayName () {
            return ('FusionCharts');
        }
        constructor (props) {
            super(props);

            var global = this;
            // Store the chart configuration in fc_configs
            global.fc_configs = props;
            global.state = props;
        }
        componentWillMount () {
            
            var global = this;

            global.chartObj = new FusionCharts(this.state);
            global.setState(function (prevState, props) {
              return {
                renderAt: (prevState.renderAt || props.renderAt) || global.chartObj.id + '-container'
              }
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
            var global = this;
            var arr_impacted_by;

            if (global.fc_configs.type !== global.state.type) {
              global.chartObj.chartType(global.state.type);
            }

            if (global.fc_configs.dataSource !== global.state.dataSource) {
              global.chartObj.setChartData(global.state.dataSource, global.state.dataFormat);
            }
            
            arr_impacted_by = global.fc_configs.impactedBy;
            if (arr_impacted_by && arr_impacted_by.length > 0 && 
                    arr_impacted_by.indexOf(global.props.eventSource) > -1) {
                global.chartObj.setChartAttribute(global.fc_configs);
                global.chartObj.setChartData(global.fc_configs.dataSource);
            }
        }

        render (props) {
            var global = this;
            
            return (
                React.createElement("div", {className: global.state.className, id: global.state.renderAt})
            );
        }
    }

    _window.react_fc = {
        FusionCharts: fusioncharts
    };

    return _window.react_fc;

});

