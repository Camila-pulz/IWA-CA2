const express = require('express');
const router = express.Router();
const Media = require("./model/media"); //to use the schema from the media file

//to get all the records on the database 
router.get('/', (req,res) =>{
    Media.find({}, function (err, media) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(media);
  }); 
});

//to get a specific media from the database 
router.get('/:id', (req,res) =>{
    Media.findOne({_id: req.params.id}, function (err, media) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(media);
  }); 
});


//To save a new media to the database 
router.post('/', (req,res) => {
    const newmedia = new Media(req.body);//creation of a new media based on the data which was inserted in postman
    newmedia.save(function (err, media) { //function that saves the data into MongoDB
        if (err) { //throws an error if there is any issue
            res.status(400).json(err);
        }
        res.json(media); //send the new created media
});
});

//to delete a record from the database
router.delete('/:id', (req,res) => {
    Media.findByIdAndRemove(req.params.id, function (err, media) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(media);
  });
});

//to update a record in the database 
router.patch('/:id', (req,res) => {
    Media.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, media) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(media);
  }); 
});

module.exports = router;