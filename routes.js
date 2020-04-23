//this file hold all the operations for the media records
const express = require('express');
const router = express.Router();
const Media = require("./model/media"); //to use the schema from the media file

router.get('/', (req, res) => {//function to present the index page once the request is sent
    res.render("records/addOrEdit", {
        viewTitle: "@MediaBucketList: include your record!"
    });
});

//To save a new media to the database 
router.post('/', (req, res) => {
    var newmedia = new Media();
    newmedia.category = req.body.category;
    newmedia.title = req.body.title;
    newmedia.genre = req.body.genre; 
    newmedia.year = req.body.year;
    newmedia.duration = req.body.duration;
    newmedia.comments = req.body.comments;
    newmedia.save((err, media) => {//function that saves the data into MongoDB
        if (err) { //throws an error if there is any issue
            res.status(400).json(err);
        }
        res.redirect('/displayRecords'); 
    });
});

//to get all the records on the database 
router.get('/displayRecords', (req, res) => {
    Media
    .find({}, (err,media) => {
        
        if (!err) {
            res.render("records/displayRecords",{
                display: media
            });
           
        }else{
            console.log("Error retrieving the data" + err);
        }
       
        })
        .lean();

       
         
    });

//to get a specific media from the database 
router.get('/users/:id', (req, res) => {
    Media.findOne({ _id: req.params.id }, function (err, media) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(media);
    });
});



//to delete a record from the database
router.delete('/:id', (req, res) => {
    Media.findByIdAndRemove(req.params.id, function (err, media) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(media);
    });
});

//to update a record in the database 
router.patch('/users/:id', (req, res) => {
    Media.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, media) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(media);
    });
});



module.exports = router;