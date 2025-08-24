import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {
  servicesCollection: "test_services",
  userCollection: "user",
};

export default function dbConnect(collectionName) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db("FreshMart").collection(collectionName);
}
