const router = require('express').Router();

router.route('/signup')
  .post((req,res)=> {
    console.log("authRoutes JS post route hit")
  })


module.exports = router;