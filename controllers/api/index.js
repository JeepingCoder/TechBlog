const router =require('express').Router();

// will need user post comment routes 
const userRoutes = require('./userRoutes');


//router.use for each
router.use('/users', userRoutes);


module.exports= router;