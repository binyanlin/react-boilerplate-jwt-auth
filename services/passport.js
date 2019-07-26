const passport = require("passport");
const User = require("./../models/User.js");
const config = require("./../config.js");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

//Create local strategy
//By default LocalStrategy takes username and password
//must override to check with email instead
const localOptions = {usernameField: "email"};

const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    const user = await User.findOne({ email })
    if(!user) {
      return done(null, false);
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    })
  } catch (e) {
    return done(e, false);
  }
});

//Setup options for Jwt Strategy
//Tell strategy where to look for token for persistence to work 
const jwtOptions = {
  //tells jwt strategy that whenever a request comes in
  //and we want to use passport, look in header for property "authorization"
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  //secret tels jwt strategy which secret to use 
  //used to decode token 
  secretOrKey: config.secret
}

passport.use(localLogin);