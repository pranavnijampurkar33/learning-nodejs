const express = require("express");
const path = require('path');
const Router = express.Router();

Router.get('/add-user',(req,res,next)=>{
    console.log('/add-users');
    res.sendFile(path.join(__dirname,'../views','add-user.htm'));
});

Router.get('/user',(req,res,next)=>{
    console.log('/users');
    res.redirect('/');
    res.sendFile(path.join(__dirname,'../views','add-user.htm'));
});

module.exports = Router;