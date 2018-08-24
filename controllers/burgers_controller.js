var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", function(req, res) {
    burger.all(function(data) {
      console.log(data);
      res.render("index", {data});
    });
  });
  
  router.post("/burgers/create", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      res.redirect("/")
    });
  });
  
  router.post("/burgers/update", function(req, res) {
  
    burger.update(req.body.burger_id, function(result) {
      console.log(result)
      res.redirect("/")
    })
  });
  
  // Expo

module.exports = router;