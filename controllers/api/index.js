const router =require('express').Router();


// this is our main set up for paths
const userRoutes = require('./userRoutes');
const homeRoutes = require('./ homeRoutes');


router.use('/users', userRoutes);
router.use('./api', apiRoutes);


module.exports= router;