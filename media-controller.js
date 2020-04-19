const Media = require('./model/media');

exports.createMedia = function(req, res) { 
    const record = new Media(req.body);
    record.save(function (err, media) { 
        if (err) { 
            res.status(400).json(err);
        }
        res.json(media); 
});
};