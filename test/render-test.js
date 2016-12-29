import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import FC from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import react_fc from '../lib/react_fc';

Charts(FC);

class FCDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'React is cool',
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

            this.setState((prevProp, prop) => {
                return size;  
            });            
        }

        this.updateCaption  = (e) => {
            var newName = e.target.value;

            this.setState((prevProp, props) => {
                var data = prevProp;

                return {
                    dataSource: {
                        chart: {
                            caption: newName
                        },
                        data: prevProp.dataSource.data
                    }
                };
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p> Chart Caption:
                    <input ref="input" onChange={this.updateCaption} value={this.state.dataSource.chart.caption} />
                    <p/>
                    Width:
                    <input ref="input" name="width" onChange={this.updateSize} value={this.state.width} />
                    Height:
                    <input ref="height" name="height" onChange={this.updateSize} value={this.state.height} />
                </p>
                <ReactFC.FusionCharts {...this.state} />
                <p></p>
            </div>
        );
    }
}

describe('root', function () {
  	it('\n\nFusionCharts renders without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard/>);
    	expect(root).toExist();
  	});

  	it('changes without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard/>);

    	const inputNode = ReactDOM.findDOMNode(root.refs.input);

    	const newValue = 'some text';
    	inputNode.value = newValue;
    	TestUtils.Simulate.change(inputNode);

    	const nameNode = ReactDOM.findDOMNode(root.refs.name);
    	expect(nameNode.textContent).toEqual(newValue);
  	});
});
