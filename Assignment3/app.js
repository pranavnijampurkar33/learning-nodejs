const express = require('express');
const app = express();
const path = require('path');
const usersRouter = require('./routes/users');
const mainRouter = require('./routes/main');

app.use(express.static(path.join(__dirname,'public')));
app.use(usersRouter);
app.use(mainRouter);
app.use('/',(req,res,next) => {
    res.send("Hi");
});
const listener = app.listen(3000);
console.log("Port used: 3000");
console.log("Use below links: ");
console.log("localhost:3000/");
console.log("localhost:3000/add-user");
console.log("localhost:3000/user");