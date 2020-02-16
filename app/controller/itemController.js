// itemController.js
// Import item model
Item = require("../models/itemModel");

// Handle index actions
exports.index = function (req, res) {
  Item.get(function (err, items) {
    if (err) {
      return res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "items retrieved successfully",
      data: items
    });
  });
};
// Handle create item actions
exports.new = function (req, res) {
  var item = new Item();
  item.name = req.body.name ? req.body.name : item.name;
  item.list_id = req.body.list_id;
  item.pdf = req.file
  console.log(req.files)
  let pdf = req.files.pdf;
            
  //Use the mv() method to place the file in upload directory (i.e. "uploads")
  pdf.mv('./uploads/' + pdf.name);
  // save the item and check for errors
  // item.save(function (err) {

  //   if (err)
  //     return res.json(err);
  //   res.json({
  //     message: "New item created!",
  //     data: item
  //   });
  // });
};
// Handle view item info
exports.view = function (req, res) {
  item.findById(req.params.item_id, function (err, item) {
    if (err) return res.send(err);
    res.json({
      message: "item details loading..",
      data: item
    });
  });
};
// Handle update item info
exports.update = function (req, res) {
  item.findById(req.params.item_id, function (err, item) {
    if (err) return res.send(err);
    item.name = req.body.name ? req.body.name : item.name;
    item.list_id = req.body.list_id;
    // save the item and check for errors
    item.save(function (err) {
      if (err) return res.json(err);
      res.json({
        message: "item Info updated",
        data: item
      });
    });
  });
};
// Handle delete item
exports.delete = function (req, res) {
  item.remove(
    {
      _id: req.params.item_id
    },
    function (err, item) {
      if (err) return res.send(err);
      res.json({
        status: "success",
        message: "item deleted"
      });
    }
  );
};
