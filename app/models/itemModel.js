var mongoose = require("mongoose");
var itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  pdf:{
    type:String,
    require:true
  },
  list_id:mongoose.Schema.ObjectId
});
// Export list model
var Item = (module.exports = mongoose.model("Item", itemSchema));
module.exports.get = function(callback, limit) {
    Item.find(callback).limit(limit);
};
