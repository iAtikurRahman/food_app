// pages/api/restaurant.js
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dataBaseConnetionStr } from "../../lib/db";
import { restaurantSchema } from "../../lib/restaurantModel";

export async function GET() {
        await mongoose.connect(dataBaseConnetionStr);

        const data = await restaurantSchema.find();
        return NextResponse.json({ result: true, data });

}
