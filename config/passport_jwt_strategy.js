const passport = require('passport');
const Doctor = require('../models/doctor');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

var opts={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.JWT_SECRET,
}

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    try{

        Doctor.findOne({id: jwt_payload.id})
        .then((doctor) => {
            if (doctor) {
                return done(null, doctor);
            }
            else {
                return done(null, false);
            }
        })
        
        .catch((err) => {
            console.log('**** err infinding user from jwt: ', err);
            return done(err, false);
        })
        
    }catch(err){
        console.log("err in jwt..", err)
    }
}));


module.exports = passport;