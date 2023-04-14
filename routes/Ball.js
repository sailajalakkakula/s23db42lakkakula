var express = require('express');
const Ball_controlers= require('../controllers/Ball');
var router = express.Router();
/* GET Balls */
router.get('/', Ball_controlers.Ball_view_all_Page );
module.exports = router;