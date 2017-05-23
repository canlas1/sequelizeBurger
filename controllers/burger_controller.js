 var express = require("express");

 var router = express.Router();

var db = require("../models");

//Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
   db.burger.findAll({}).then(function(data) {
    //console.log(data)
      //We have access to the todos as an argument inside of the callback function
     var hbsObject = { burgers: data };
    res.render('index', hbsObject);

    });
});

router.post("/burger/create", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name, 
    
  }).then(function(dbBurger) {
    console.log(dbBurger);
    res.redirect('/');
  });
});


 router.put("/burgers/update", function(req, res) {
  console.log("Event is being updated line 29");
   db.burger.update({
     devoured: true
   }, 
     {
      where: {
        id: req.body.burger_id
      }
   }
   ).then(function (event) {
    console.log(event);
     res.redirect('/');
   });
 });


//Export routes for server.js to use.
module.exports = router;
