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
//this file hold all the operations for the media records
const express = require('express');
const router = express.Router();
const Media = require("./model/media"); //to use the schema from the media file

router.get('/', (req, res) => {//function to present the index page once the request is sent
    res.render("records/addOrEdit", {
        viewTitle: "Insert your record"
    });
});

//To save a new media to the database 
router.post('/', (req, res) => {
    var newmedia = new Media(req.body);
    newmedia.save((err, media) => {
        if (err) {
            console.log("There was an error");
        }
        else {
            res.redirect('./displayRecords');
        }
    });
});

//to get all the records on the database 
router.get('/displayRecords', (req, res) => {
    Media
        .find({}, (err, media) => {

            if (!err) {
                res.render("records/displayRecords", {
                    display: media
                });

            } else {
                console.log("Error retrieving the data" + err);
            }

        })
        .lean();
});
//to get a specific media from the database 
router.get('/get/:id', (req, res) => {
    Media.findOne({ _id: req.params.id }, function (err, media) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(media);
    });
});
//to delete a record from the database
router.get('/displayRecords/:id', (req, res) => {
    Media.findByIdAndRemove(req.params.id, (err, media) => {
        if (!err) {
            res.redirect('/displayRecords');
        }
    });
});
//to update a record in the database 
router.patch('/update/:id', (req, res) => {
    Media.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, media) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(media);
    });
});


module.exports = router;