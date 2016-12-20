import React from 'react';
import ReactDOM from 'react-dom';
// import FusionCharts from 'fusioncharts';

const val = Math.random();
const color = val > 0.5 ? 'green' : 'red';
const txt = "Hello React with JSX!! -- " + val;

import App from './components/app';
// import react_fc from './react-fusioncharts/react-fusioncharts';

ReactDOM.render(
	// React.createElement('h2', null, 'Hello React!'),
	
	<App />,

	document.getElementById('root')
);

