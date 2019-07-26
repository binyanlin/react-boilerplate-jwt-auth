const router = require('express').Router();
const authRoutes = require('./authRoutes');

// /api is prepended to these routes

router.use('/auth', authRoutes);

module.exports = router;