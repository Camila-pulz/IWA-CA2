const express = require('express');
const path = require('path');
const http = require('http');//this module is important to open the html on the browser
const fs = require('fs');//this module is important to open the html on the browser
const mongoose = require('mongoose');//this mdoule is important for the connection with mongoDb
const routes = require('./routes');
const bodyParser = require("body-parser");//to convert the json files
const cors = require('cors');//this module allows the communication between domains in different ports
const autosanitizer = require('express-autosanitizer');//to sanitise the code


const app = express();//function to create the server
const server = http.createServer(app);//function to create the web server

app.use(express.static(path.resolve(__dirname,'views')));
app.use(express.urlencoded({extended: true}));
app.use(cors());//allow the communication between domains in different ports
app.use(bodyParser.json());
app.use(routes);
app.use(autosanitizer.allUnsafe);

app.get('/',function(req,res){
    res.render('index');
})

app.get('/get/html',function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
});

fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            res.write(data);
        }
        //res.end();
    });



//connect to the database 
mongoose.connect(
    'mongodb+srv://camilaf:sn2017162@clusterca2-0oks7.mongodb.net/test?retryWrites=true&w=majority',
   { useNewUrlParser: true },
    () => console.log('Connected to the database')
);


//listening to the server
app.listen(3000);