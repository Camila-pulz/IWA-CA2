const express = require('express');
const router = express.Router();
const Media = require("./model/media"); //to use the schema from the media file

router.get('/', (req,res) =>{
    res.send('We are on the home');

});

router.post('/', (req,res) => {
    const newmedia = new Media(req.body);
    newmedia.save(function (err, media) { //save the media to the MongoDB
        if (err) { 
            res.status(400).json(err);
        }

        res.json(media); 
});
});

   

module.exports = router;