
import dbConnect from "@/lib/mongodbConnnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const POST = async (req) => {
  try {
    const body = await req.json();
    const db = dbConnect("products");

    await db.insertOne(body);

    revalidatePath("/all-product");

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add product" },
      { status: 500 }
    );
  }
};
