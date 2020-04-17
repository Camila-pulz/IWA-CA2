var express = require('express'),
router = express.Router(),
userCtrl = require('./user-controller');


router.get('/hello', userCtrl.getWorld);





module.exports = router;