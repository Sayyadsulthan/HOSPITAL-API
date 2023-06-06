const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const Doctor = require('../models/doctor');

passport.use(new passportLocal({
    usernameField: 'name',
    passReqToCallback:false
},
async function(name, password, done){
    try{

        let user = await Doctor.findOne({name: name});
        
        if(user & user.password == password){
            return done(null, user);
        }
        
        return done(null, false)
    }catch(err){
        done(err)
    }
}));

passport.serializeUser(function(doctor, done){
    done(null,user.id)
})

passport.deserializeUser(function(id, done){
    Doctor.findById(id)
    .then((user)=>{
        return done(null, user);
    })

    .catch((err)=>{
        console.log("Error in finding user ---> passport");
        return done(err);
    })
})


// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    // if the user not signed in 
    return res.status(405).json({message:"Not authenticated..."});
}


passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // req.uer contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }

    next();
}
module.exports = passport;

