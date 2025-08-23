import dbConnect from "@/lib/mongodbConnnect";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const db =  dbConnect("products");

    const data = await db.find({}).toArray();

    return NextResponse.json(data);
  } catch (err) {
    console.error("MongoDB fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
