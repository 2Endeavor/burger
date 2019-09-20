// TODO: create router.delete("/api/burgers/:id")

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Read the burger data
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);
  });
});
//create the burger data
router.post("/api/burgers", function(req, res) {

  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    console.log("line 25 burgers_controller req.body.burger_name: ", req.body.burger_name.length)
 
    res.redirect("/");
  });
});
//Devoure the burger
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  

  burger.update(
    {
      
      devoured: req.body.devoured
    },
    
    condition, 
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      res.status(200).end();
    }
    );
   
});

// Delete the burger
router.delete("/api/burgers/:id", function(req,res){

  burger.delete(
    {
      id: req.params.id
    },
    function(result) {
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 

        res.status(200).end();
      }
  );
  
  // connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result){
  // })
});

// Export routes for server.js to use.
module.exports = router;
