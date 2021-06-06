const { Schema, model } = require("mongoose");

const machineSchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  counter: {
    type: Number,
    default: 0,
  },
});

module.exports = model("Machine", machineSchema);
