// lib/restaurantModel.js
import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
    gmail: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: false },
    mobile: { type: Number, required: true },

});

export const restaurantSchema = mongoose.models.restaurant || mongoose.model("restaurant", restaurantModel);
