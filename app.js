const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use(routes);



//connect to the database 
mongoose.connect(
    'mongodb+srv://camilaf:sn2017162@clusterca2-0oks7.mongodb.net/test?retryWrites=true&w=majority',
   { useNewUrlParser: true },
    () => console.log('Connected to the database')
);


//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
 // client.close();
//});



//listening to the server
app.listen(3000);