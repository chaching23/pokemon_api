const mongoose = require("mongoose");

const SharkSchema = new mongoose.Schema({
    
    title:  { type: String }, 
    description: { type: String, default:""}, 
    completed:  { type: Boolean, default:false }, 
  
  });


mongoose.model("Shark", SharkSchema);