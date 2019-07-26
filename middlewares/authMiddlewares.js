const passport = require("passport");

//by default passport wants to use cookie based auth
//we want to use tokens instead, so set {session:false}
const requireAuth = passport.authenticate("jwt", {session: false});
const requireSignIn = passport.authenticate("local", {session: false});

module.exports = {requireAuth, requireSignIn};