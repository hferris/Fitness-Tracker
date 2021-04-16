const router = require('express').Router();
const apiRoutes = require('./api-Routes');
const homeRoutes = require('./htmlhome-Routes');

router.use('/', apiRoutes);
router.use('/', homeRoutes);



module.exports = router;