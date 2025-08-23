import dbConnect from "@/lib/mongodbConnnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } =await  params; 


    const db = await dbConnect("products");

    const data = await db.findOne({ _id: new ObjectId(id) });

    return NextResponse.json(data);
  } catch (err) {
    console.error("MongoDB fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
