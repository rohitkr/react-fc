import React from 'react';
import Header from './header';
import react_fc from './react-fusioncharts';


const config = {
	id: "revenue-chart",
    // renderAt: "revenue-chart-container",
	type: "column2d",
	width:600,
    height: 400,
  	dataFormat: "json",
  	dataSource: {data: [{value: 500}, {value: 400}, {value: 600}]}
};

class App extends React.Component {
	// constructor (props) {
	// 	super(props);
	// 	this.state = {test: 42};
	// }
	state = {
		pageHeader: 'FusionCharts plugin for ReactJS',
		test: 37
	}
	componentDidMount () {
		console.log('Will mount...');
	}
	componentWillUnmount () {
		console.log('will unmount');
	}
	render (props) {
		return (
			<div className='App'>
				<Header message={this.state.pageHeader} name='ReactJS'/>
				<div>
					{this.state.test}
					...
				</div>
				<div>
					<react_fc.FusionCharts {...config} />
				</div>
			</div>
		);
	}
}


// Using function
// const App = (props) => {
// 	console.log('props', props);
// 	return (
// 		<div className='App'>
// 			<Header message={props.msg} name='ReactJS'/>
// 			<div>
// 				...
// 			</div>
// 		</div>
// 	); 
// }

export default App;