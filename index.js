const express = require('express'),
	app = express(),
	session = require('express-session'),
	passport = require('passport'),
	User = require('./db').User;

app.listen(1337, () => console.log('lovingly listenting at port 1337'))

app.use('/login', require('./auth.js'));

app.use(express.static('public'));