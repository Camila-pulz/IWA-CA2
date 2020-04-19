const express = require('express');
const mongoose = require('mongoose');
const app = express();

//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://camilaf:sn2017162@clusterca2-0oks7.mongodb.net/test?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });



//Routes
app.get('/', (req,res) =>{
    res.send('We are on the home');

});

app.get('/posts', (req, res) =>{
    res.send("We are on post");
});

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