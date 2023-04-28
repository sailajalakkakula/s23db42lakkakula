var express = require('express');
const Ball_controlers= require('../controllers/Ball');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET Balls */
router.get('/', Ball_controlers.Ball_view_all_Page );


/* GET detail Ball page */
router.get('/detail', Ball_controlers.Ball_view_one_Page);

/* GET create Ball page */
router.get('/create',secured, Ball_controlers.Ball_create_Page);

/* GET create update page */
router.get('/update',secured, Ball_controlers.Ball_update_Page);

/* GET delete Ball page */
router.get('/delete',secured, Ball_controlers.Ball_delete_Page);

module.exports = router;