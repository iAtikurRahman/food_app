import mongoose from "mongoose";
import { type } from "os";

const restaurantModel = new mongoose.Schema({
    gmail : {type:String,require:true},
    password : {type:String,require:true}
})

export const restauranSchema = mongoose.model.restaurant || mongoose.model("restaurant",restaurantModel);