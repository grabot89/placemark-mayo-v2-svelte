import mongoose from "mongoose";
import { MONGO_URL } from "$env/static/private";
import { seedData } from "./mongo/seed-data.js";
import mongooseSeeder from "mais-mongoose-seeder";
import { UserMongoose } from './mongo/user';
/* 
  0 - disconnected
  1 - connected
  2 - connecting
  3 - disconnecting
  4 - uninitialized
*/
const mongoConnection = {
  isConnected: 0
};

const seedLib = mongooseSeeder(mongoose.connection);

export const dbConnect = async () => {
  console.log("MONGO_URL", MONGO_URL);
  if (mongoConnection.isConnected === 1) {
    console.log("already connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("using existing connection");
      return;
    }

    await mongoose.disconnect();
  }
  await mongoose.connect(MONGO_URL);
  mongoConnection.isConnected = 1;
  console.log("conected to ", MONGO_URL ?? "");
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log("disconnecting");
};

export const seed = async () => {
  console.log("Seeding database");
  try {
    console.log("Seed lib is", seedLib);
    const dbData = await seedLib.seed(seedData, { dropDatabase: false, dropCollections: true }); // Using the seeder to seed the database
    console.log("Database seeded successfully:", dbData);
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
