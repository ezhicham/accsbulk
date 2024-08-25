const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;

// Define the Schema (the structure of the user)
const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

// Create a model based on that schema
const userModel = models.user || mongoose.model("user", userSchema);

// Export the model
module.exports = userModel;