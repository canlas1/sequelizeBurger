// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models/");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the Burgerss
    app.get("/", function(req, res) {
        // res.redirect("/burgers")
        res.render("index");

    });

    app.get("/burgers", function(req, res) {
        db.Burgers.findAll({})
            .then(function(dbBurgers) {
                console.log(dbBurgers);
                res.json(dbBurgers);
                var hbsObject = {burger: dbBurgers};
                return res.render("index", hbsObject);
            });
    })

    //Get route for returning Burgerss of a specific category
    app.get("/api/burgers/category/:category", function(req, res) {
        db.Burgers.findAll({
                where: {
                    category: req.params.category
                }
            })
            .then(function(dbBurgers) {
                res.json(dbBurgers);
            });
    });

    //Get rotue for retrieving a single Burgers
    app.get("/api/Burgerss/:id", function(req, res) {
        db.Burgers.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbBurgers) {
                res.json(dbBurgers);
            });
    });

    // Burgers route for saving a new Burgers
    app.post("/burger/create", function(req, res) {
        console.log(req.body);
        db.Burgers.create({
                burger_name: req.body.burger_name
            })
            .then(function(dbBurgers) {
                res.json(dbBurgers);
            });
    });
}


//   // PUT route for updating Burgerss
//   app.put("/api/Burgerss", function(req, res) {
//     db.Burgers.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//     .then(function(dbBurgers) {
//       res.json(dbBurgers);
//     });
//   });
// };
