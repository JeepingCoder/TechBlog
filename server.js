const path = require('path');
const express = require('express')
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils.helpers');
const sequalize = require('./config/connections');
const exphbs = require ('express-handlebars');

const SequalizeStore = require('connect-session-sequalize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

// this is where custom helpers is set up with HB.js



