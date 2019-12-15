// listController.js
// Import list model
List = require("../models/listModel");
// Handle index actions
exports.index = function(req, res) {
  List.get(function(err, lists) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Lists retrieved successfully",
      data: lists
    });
  });
};
// Handle create list actions
exports.new = function(req, res) {
  var list = new List();
  list.title = req.body.title;
  // save the list and check for errors
  list.save(function(err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New list created!",
      data: list
    });
  });
};
// Handle view list info
exports.view = function(req, res) {
  List.findById(req.params.list_id, function(err, list) {
    if (err) res.send(err);
    res.json({
      message: "list details loading..",
      data: list
    });
  });
};
// Handle update list info
exports.update = function(req, res) {
  List.findById(req.params.list_id, function(err, list) {
    if (err) res.send(err);
    list.name = req.body.title;
    // save the list and check for errors
    list.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "list Info updated",
        data: list
      });
    });
  });
};
// Handle delete list
exports.delete = function(req, res) {
  List.remove(
    {
      _id: req.params.list_id
    },
    function(err, list) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "list deleted"
      });
    }
  );
};
