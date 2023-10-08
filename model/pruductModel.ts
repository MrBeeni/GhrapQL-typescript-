import {Schema,model, models } from "mongoose";

const pruductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true
  }
});

module.exports = models.Pruduct||model("Pruduct", pruductSchema);
