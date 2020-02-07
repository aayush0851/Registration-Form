//integrating npm modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

//setting up express app
const app = express();

//setting up mongoose
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/register', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;


//inittialising middlewares
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use('/', routes);


app.listen(process.env.port||4000, function(){
    console.log('Now listening to the port');
});