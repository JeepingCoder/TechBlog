const router = require ('express').Router();

const apiRoutes = require('./api');
// this will change when i establish what I need 
const homeRoutes = require('./homeRoutes');

router.use('/', apiRoutes);
// this will change when i establish what I need
router.use('/', homeRoutes);

module.export = router;