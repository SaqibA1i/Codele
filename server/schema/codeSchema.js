const mongoose = require("mongoose");

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const CodeSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  displayName: {
    // Answer
    type: String,
    required: true,
    default: "",
  },
  data: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Codele", CodeSchema);
