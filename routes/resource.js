var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Ball_controller = require('../controllers/Ball');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Ball ROUTES ///
// POST request for creating a Ball.
router.post('/Ball', Ball_controller.Ball_create_post);
// DELETE request to delete Ball.
router.delete('/Balls/:id', Ball_controller.Ball_delete);
// PUT request to update Ball.
router.put('/Balls/:id', Ball_controller.Ball_update_put);
// GET request for one Ball.
router.get('/Balls/:id', Ball_controller.Ball_detail);
// GET request for list of all Ball items.
router.get('/Balls', Ball_controller.Ball_list);
module.exports = router;