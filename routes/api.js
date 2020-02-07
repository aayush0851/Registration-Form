const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

//get api
router.get('/register', function(req,res,next){
    res.render('index');
});

//post api
router.post('/register', urlencodedParser, function(req,res,next){
    Participant.find({mobileNumber : req.body.mobileNumber}).exec().then((participant) => {
        if(participant >= 1){
            return res.status(409).json({
                message: 'This participant already exists'
            });
        }
        else{
            Participant.create(req.body);
            participant.save().then((result) => {
                return res.status(201).json({
                    message: result
                });
            }).catch((err) => {
                res.status(500).json({
                    error: err
                });
            });
        }
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    });
    
});


module.exports = router;