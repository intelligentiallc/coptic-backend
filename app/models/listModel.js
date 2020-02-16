var mongoose = require("mongoose");
var listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export list model
var List = (module.exports = mongoose.model("List", listSchema));
module.exports.get = function(callback, limit) {
  List.find(callback).limit(limit);
};
