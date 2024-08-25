const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;

// Define the Schema (the structure of the product)
const proschema = new Schema({
  imgUrl:String ,
  imgPublicId:String,
  title:String,
  descPro: String,
  dataAccs:[String],
  price: Number,
  quantity:Number,
  rating:Number,
  soldOut:Number,
  
});



// Create a model based on that schema
// Create a model based on that schema
const proModel = models.pro || mongoose.model("pro", proschema);

// Export the model
module.exports = proModel;