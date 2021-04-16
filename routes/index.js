const router = require('express').Router();
const apiRoutes = require('./api-Routes');
const htmlhomeRoutes = require('./htmlhome-Routes');

router.use('/', apiRoutes);
router.use('/', htmlhomeRoutes);



module.exports = router;