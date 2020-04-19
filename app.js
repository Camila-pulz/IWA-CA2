const express = require('express');

const app = express();

//Routes
app.get('/', (req,res) =>{
    res.send('We are on the home');

});


//listening to the server
app.listen(3000);