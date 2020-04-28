'use strict';

// ================================================================
// get all the tools we need
// ================================================================
const express = require('express');
const chalk = require("chalk");
const debug = require("debug")("app");
const routes = require('./routes/index.js');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

// ================================================================
// setup our express application
// ================================================================
// app.use('/public', express.static(process.cwd() + '/public'));
// Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


// ================================================================
// setup routes
// ================================================================
routes(app);

// ================================================================
// start our server
// ================================================================
app.listen(port, () => {
    debug(`Listening on port ${chalk.blue(`${port}`)}`);
});