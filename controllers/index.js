const express = require ('express');
let router = express.Router();

router.use('/brand', require('./brand'));
router.use('/type', require('./type'));

module.exports = router;