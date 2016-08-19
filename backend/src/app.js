import express from 'express';

import routes from './routes/index';

import cors from 'cors'; // cross port commuication
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash'; // for flash messages

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');

// Cross-origin resource sharing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve a static directory for the webpack-compiled Javascript and CSS. Only in production since the webpack dev server handles this otherwise.
if (process.env.NODE_ENV === "production") {app.use('/build', express.static(path.join(__dirname, '/build')));}

app.use('/', routes);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// development hot load for live editing
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        var hotLoadPort = process.env.HOT_LOAD_PORT || 8888;
        res.write('<script src="http://localhost:' + hotLoadPort + '/build/bundle.js" defer></script>');
    });
}

if (app.get('env') === 'production') {
    app.use(function(err, req, res, next) {
        res.write('<script src="/build/main.js" defer></script>');
    });
}

// Connect flash for flash messages
app.use(flash());

module.exports = app;