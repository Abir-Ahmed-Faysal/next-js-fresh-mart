"use server";

import dbConnect, { collectionNameObj } from "@/lib/mongodbConnnect";

export const sendDb = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);

  const { email, password } = payload;
  if (!email || !password) {
    return { success: false };
  }

  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return { message: false };
};
