const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose');
const serveStatic = require('serve-static');

const config = require('./config/secret');
const history = require('connect-history-api-fallback')
var app = express();

const staticFileMiddleware = serveStatic(__dirname + '../../dist');
app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);


// mongoose.connect(config.database, function(err){
//   if(err) console.log(err);
//   console.log('Connected to DB');
// })

app.use(cors())


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

const uploadroutes = require('./routes/uploadS3/upload');

app.use(uploadroutes);

const port = process.env.PORT || 5050;


app.listen(port, () => {

    console.log( `Express server listening on port ${port}`);
})
