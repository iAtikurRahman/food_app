import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dataBaseConnetionStr } from "../../lib/db";
import { restaurantSchema } from "../../lib/restaurantModel";

export async function GET() {
        await mongoose.connect(dataBaseConnetionStr);

        const data = await restaurantSchema.find();
        return NextResponse.json({ result: true, data });

}

export async function POST(req){
        let payload = await req.json();
        await mongoose.connect(dataBaseConnetionStr);
        const restaurant = new restaurantSchema(payload)
        const result = await restaurant.save();
        return NextResponse.json({data:result,success:true})
}
