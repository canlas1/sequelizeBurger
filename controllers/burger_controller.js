 var express = require("express");

 var router = express.Router();

var db = require("../models");

//Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
   db.burger.findAll({}).then(function(data) {
      //We have access to the todos as an argument inside of the callback function
     var hbsObject = { burgers: data };
    res.render('index', hbsObject);

    });
});

router.post("/burger/create", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name, 
    devoured: req.body.devoured
  }).then(function() {
    res.redirect('/');
  });
});


router.put("/burger/eat", function(req, res) {
  db.burger.update({
    devoured: req.body.devoured
  }, 
    {where: {burger_id:req.body.burger_id}
  }).then(function () {
    res.redirect('/');
  });
});

router.put("/burger/update", function(req, res) {
  db.burger.update({
    devoured: req.body.devoured 
  }, 
  {where: {burger_id:req.body.burger_id}}).then(function () {
    res.redirect('/');
  });
});

//Export routes for server.js to use.
module.exports = router;
