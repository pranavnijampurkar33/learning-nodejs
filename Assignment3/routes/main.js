const express = require('express');
const path = require('path');
const Router = express.Router();

Router.get('/',(req,res,next)=>{
    console.log('/');
    console.log('Visited main.js');
    console.log('Sending file: '+path.join(__dirname,'../views','index.htm'));
    res.sendFile(path.join(__dirname,'../views','index.htm'));
});

module.exports = Router;