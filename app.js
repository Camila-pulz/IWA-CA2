/*Code references: 
Front-end (Express Handlebars): CodAffection: Complete Node.js Express MongoDb CRUD(2018) 
Available on: https://www.youtube.com/watch?v=voDummz1gO0&feature=youtu.be(Last Accessed on 25/04/2020)
Back-end (Node.js and MonngoDB): Dev Ed. Rest API Tutorial: Build a Restful Api with Node.js Express & MongoDB. 
Available on:https://www.youtube.com/watch?v=vjf774RKrLc&t=976s (Last accessed on 22/04/2020)
Caleb Curry. Node.js and MongoDB Express- Rest API Tutorial 
Available on https://www.youtube.com/watch?v=1VA0MPwFcyU (Last accessed on 20/04/2020)
Mikhail Timoneef gitpod that were used in his lectures. 
Available on https://github.com/mikhail-cct/mongodb-test.git
*/

const express = require('express');
const handlebars = require('express-handlebars');//this package handles a form to be filled by the user
const expressHandlebars = require('express-handlebars');
const path = require('path');
const http = require('http');//this module is important to open the html on the browser
const fs = require('fs');//this module is important to open the html on the browser
const mongoose = require('mongoose');//this mdoule is important for the connection with mongoDb
const routes = require('./routes');
const bodyParser = require("body-parser");//to convert the json files
const cors = require('cors');//this module allows the communication between domains in different ports
const autosanitizer = require('express-autosanitizer');//to sanitise the code
require('dotenv/config');//this package allow the credentials to be stored in other file and not be shown on the code


const app = express();//function to create the server
const server = http.createServer(app);//function to create the web server
var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/views/')));//line that allows the sytlesheet file to be applied to the handlebars
app.use(bodyParser.urlencoded({extended: true}));
//app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', handlebars({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');//set the handlebars engine 

app.use(cors());//allow the communication between domains in different ports
app.use(bodyParser.json());//allow the request of the body element in json
app.use(routes);
app.use(autosanitizer.allUnsafe);




//connect to the database 
mongoose.connect(
    process.env.MONGODB_CONNECTION,//this line has the credentials that are needed to connect to the database 
   { useNewUrlParser: true },
    () => console.log('Connected to the database')
);


//listening to the server
app.listen(port);