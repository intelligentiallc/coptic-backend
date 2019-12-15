var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export user model
var User = (module.exports = mongoose.model("User", userSchema));
module.exports.get = function(callback, limit) {
  User.find(callback).limit(limit);
};
