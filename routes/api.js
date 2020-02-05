const express = require('express');
const router = express.Router();
const Participant = require('../models/participant')

//post api
router.post('/newParticipant', function(req,res,next){
    Participant.find({mobileNumber : req.body.mobileNumber}).exec()
    .then()
});

module.exports = router;