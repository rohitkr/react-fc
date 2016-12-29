/* global FusionCharts, it, describe */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import FC from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from '../lib/react_fc';

charts(FC);

class FCDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'React is cool',
            id: props.id,
            type: 'Column2D',
            dataFormat: 'JSON',
            dataSource: {
                chart: {
                    caption: 'FusionCharts React plugin'
                },
                data: [{value: 78}, {value: 45}]
            }
        };

        this.updateSize  = (e) => {
            var newWidth = e.target.value,
                size = {};

            size[e.target.name] = newWidth;

            this.setState(() => {
                return size;  
            });            
        };

        this.updateCaption  = (e) => {
            var newName = e.target.value;

            this.setState((prevProp) => {
                return {
                    dataSource: {
                        chart: {
                            caption: newName
                        },
                        data: prevProp.dataSource.data
                    }
                };
            });
        };
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>
                	Chart Caption:
                    <input ref="caption" onChange={this.updateCaption} value={this.state.dataSource.chart.caption} />
	            	<p></p>
                    Width:
                    <input ref="width" name="width" onChange={this.updateSize} value={this.state.width} />
                    
                    Height:
                    <input ref="height" name="height" onChange={this.updateSize} value={this.state.height} />                	
             	</p>
            	<ReactFC.FusionCharts ref="fusioncharts" {...this.state} />
            	<p></p>
            </div>
        );
    }
}

describe('root', function () {

  	it('FusionCharts renders without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard id="chart-1" />);
    	expect(root).toExist();
  	});

  	it('Caption changes without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard id="chart-2" />);

    	const caption = ReactDOM.findDOMNode(root.refs.caption),
  			  chartObj = FusionCharts.items['chart-2'],
  			  newValue = 'New Caption Text';

    	caption.value = newValue;
    	TestUtils.Simulate.change(caption);

    	expect(chartObj.getChartAttribute('caption')).toEqual(newValue);
  	});

  	it('Chart resize without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard id="chart-3" />);

    	const width = ReactDOM.findDOMNode(root.refs.width),
    		  height = ReactDOM.findDOMNode(root.refs.height),
			  chartObj = FusionCharts.items['chart-3'],
    	      nWidth = '800',
    	      nHeight = '400';

    	width.value = nWidth;
    	height.value = nHeight;
    	TestUtils.Simulate.change(width);
    	TestUtils.Simulate.change(height);
    	
    	expect(chartObj.width).toEqual(nWidth);
    	expect(chartObj.height).toEqual(nHeight);
  	});

});
