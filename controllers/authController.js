const db = require("./../models");

module.exports = {

  signUp: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({error: "You must provide an email and password"});
    }
  
    try {
      const existingUser = await db.User.findOne({ email : email })
      
      if(existingUser) {
        return res.status(422).json({ error: "Email is in use" });
      }
      const user = new db.User({ email : email, password: password });
      await user.save();
      res.json(user)

    } catch (e) {
      res.status(404).json({e});
    }
  },

  signIn: (req, res) => {
    res.send("signIn route authController hit");
  }
};