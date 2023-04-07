const router =require('express').Router();

// change these when establish what i am using
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

// change these when establish what i am uning
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports= router;