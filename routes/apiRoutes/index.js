const router = require("express").Router();
const authRoutes = require("./authRoutes");
const authMiddleware = require("./../../middlewares/authMiddlewares.js")
const passportService = require("./../../services/passport.js")

// /api is prepended to these routes
router.route("/test")
  .get(authMiddleware.requireAuth, (req, res) => {
    //passport sets user = req.user
    res.send(req.user);
  });

router.use('/auth', authRoutes);

module.exports = router;