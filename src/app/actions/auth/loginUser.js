"use server";

import dbConnect, { collectionNameObj } from "@/lib/mongodbConnnect";


export const loginUser = async(payload) => {
    const {email, password}=payload
    const userCollection =await dbConnect(collectionNameObj.userCollection)

    const user =await userCollection.findOne({email})
    if(!user)return null
  if (user.password !== password) {
    return null;
}
    
    
    return user
    

};

