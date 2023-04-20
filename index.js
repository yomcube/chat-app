#!/usr/bin/env node
/*************************************/
const path         = require('path');
const fs           = require('fs');
/*************************************/
const express      = require('express');
const app          = express();
/*************************************/
const mainpage     = require('./mainpage');
const send         = require('./send');
const config       = require('./config');

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
	mainpage(req, res, config.defaultTheme);
});
app.get('/send', (req, res) => {
	if (send(req.query.name, req.query.message, req.query.color)) {
		if (req.query.theme) {
			res.redirect('/theme/' + req.query.theme;
		}
		else {
			res.redirect('/');
		}
	}
});

app.get('/theme/light', (req, res) => {
	mainpage(req, res, 'light');
});

app.get('/theme/dark', (req, res) => {
	mainpage(req, res, 'dark');
});

app.use((req, res) => {
	res.status(404).end("404 not found");
});

app.listen(config.port);