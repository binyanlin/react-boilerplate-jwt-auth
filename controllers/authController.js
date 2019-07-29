const db = require("./../models");
const jwt = require("jwt-simple");
const config = require("./../config.js");

const tokenForUser = (user) => {
  const timeStamp = new Date().getTime();
  // sub === subject (what is unique for each token)
  // iat === issued at time, we use both of these properties + our secret to encode a token
  return jwt.encode({sub: user.id, iat: timeStamp}, config.secret)
}

module.exports = {

  signUp: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({error: "You must provide an email and password"});
    }
  
    try {
      const existingUser = await db.User.findOne({ email })
      
      if(existingUser) {
        return res.status(422).json({ error: "Email is in use" });
      }
      const user = new db.User({ email : email, password: password });
      await user.save();
      res.json({token: tokenForUser(user)});

    } catch (e) {
      res.status(404).json({e});
    }
  },

  signIn: (req, res) => {
    res.send({token: tokenForUser(req.user)});
  }
};