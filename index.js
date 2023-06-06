const express = require('express');
require('dotenv').config()

const port = process.env.PORT || 3000;
const app = express();
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocals = require('./config/passport_locals_strategy');
const passportJWT = require('./config/passport_jwt_strategy');
const webtoken = require('jsonwebtoken');

app.use(express.urlencoded({extended:true}));


app.use(passport.initialize())
app.use(passport.setAuthenticatedUser)

app.use('/', require('./routes/index'));

app.listen(port, (err)=>{
    if(err){
        return console.log("error in listening port: ", port);
    }
    console.log("server is running on port :", port);
})