const router = require('express').Router();

const userRouters = require('./user-routes.js');

router.use('/user', userRouters);

module.exports = router;