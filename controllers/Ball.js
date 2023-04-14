var Ball = require('../models/Ball');
// List of all Balls
exports.Ball_list = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Ball list');
 // List of all Ball
{
    try{
    theBall = await Ball.find();
    res.send(theBall);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
};
// for a specific Ball.
exports.Ball_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Ball detail: ' + req.params.id);
};
// Handle Ball create on POST.
exports.Ball_create_post = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Ball create POST');
 console.log(req.body)
 let document = new Ball();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"Ball_type":"goat", "cost":12, "size":"large"}
 document.Ball_Type = req.body.Ball_Type;
 document.Ball_Weight = req.body.Ball_Weight;
 document.Ball_Cost = req.body.Ball_Cost;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};
// Handle Ball delete form on DELETE.
exports.Ball_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Ball delete DELETE ' + req.params.id);
};
// Handle Ball update form on PUT.
exports.Ball_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Ball update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Ball_view_all_Page = async function(req, res) {
    try{
    theBalls = await Ball.find();
    res.render('Ball', { title: 'Ball Search Results', results: theBalls });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };