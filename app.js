var express = require('express');
var mongoose = require('./config/mongoose.config');
var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');


const app = express();
// app.use(cookieParser());
// //To parse json data
app.use(bodyParser.json())

// //To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))


// var route = require('./routes/user.route');
app.use(require('./routes/user.route'));
var port = process.env.PORT || 3001;

app.get('/', (req,res)=>{
    return res.send({message: 'abhishek'})
})

app.listen(port,()=>{
    console.log('server is running on http://127.0.0.1:3001');
})