
/*

import config, { nodeEnv, logStarts } from './config';
console.log(config, nodeEnv, logStarts('Hello'));
*/


/*

import https from 'https';
https.get('https://www.lynda.com', res => {
	console.log('Responce status code: ', res.statusCode);

	res.on('data', chunk => {
		console.log(chunk.toString());
	});
});
*/


/*

import http from 'http';
const server = http.createServer();
server.listen(8080);
server.on('request', (req, res) => {
	res.write('Hello World!\n');

	setTimeout(() => {
		res.write('I m streaming!\n');
		res.end();

	}, 3000)
})
*/

import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.get('/about.html', (req, res) => {
	res.send('This is an about page.\n');
})

server.use(express.static('public'))
server.use('/api', apiRouter);

// Set the ejs template
server.set('view engine', 'ejs')

// Render the ejs template
server.get('/ejs', (req, res) => {
	res.render('index', {
		content: 'express js content for server.js'
	});
})

server.listen(config.port, () => {
	console.log('Express listening on port ', config.port);
})