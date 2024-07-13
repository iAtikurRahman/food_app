import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {dataBaseConnetionStr} from "../../lib/db";
import {RestaurantSchema} from "../../lib/restaurantModel";

export async function GET(){
    await mongoose.connect(dataBaseConnetionStr)
    const data = await RestaurantSchema.find()
    return NextResponse.json({result:data})

}