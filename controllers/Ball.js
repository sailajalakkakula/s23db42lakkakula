var Ball = require('../models/Ball');
// List of all Balls
exports.Ball_list = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Ball list');
    // List of all Ball
    {
        try {
            theBall = await Ball.find();
            res.send(theBall);
        }
        catch (err) {
            res.status(500);
            res.send(`{"error": ${err}}`);
        }
    };
};
// for a specific Ball.
// exports.Ball_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: Ball detail: ' + req.params.id);
// };


// for a specific Ball.
exports.Ball_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Ball.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Ball create on POST.
exports.Ball_create_post = async function (req, res) {
    
    console.log(req.body)
    let document = new Ball();
  
    document.Ball_Type = req.body.Ball_Type;
    document.Ball_Weight = req.body.Ball_Weight;
    document.Ball_Cost = req.body.Ball_Cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// Handle Ball delete on DELETE.
exports.Ball_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Ball.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Ball update form on PUT.
// exports.Ball_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: Ball update PUT' + req.params.id);
// };

// Handle Ball update form on PUT.
exports.Ball_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Ball.findById(req.params.id)
        // Do updates of properties
        if (req.body.Ball_Type)
            toUpdate.Ball_Type = req.body.Ball_Type;
        if (req.body.Ball_Weight) toUpdate.Ball_Weight = req.body.Ball_Weight;
        if (req.body.Ball_Cost) toUpdate.Ball_Cost = req.body.Ball_Cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// VIEWS
// Handle a show all view
exports.Ball_view_all_Page = async function (req, res) {
    try {
        theBalls = await Ball.find();
        res.render('Ball', { title: 'Ball Search Results', results: theBalls });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle a show one view with id specified by query
exports.Ball_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Ball.findById( req.query.id)
    res.render('Balldetail',
   { title: 'Ball Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle building the view for creating a Ball.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Ball_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Ballcreate', { title: 'Ball Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


// Handle building the view for updating a Ball.
// query provides the id
exports.Ball_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Ball.findById(req.query.id)
    res.render('Ballupdate', { title: 'Ball Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


// Handle a delete one view with id from query
exports.Ball_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Ball.findById(req.query.id)
    res.render('Balldelete', { title: 'Ball Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };