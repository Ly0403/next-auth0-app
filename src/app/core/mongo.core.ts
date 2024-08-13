/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { ConnectionStates } from "mongoose";

export default class MongoCore {
  public static async connect() {
    try {
      if (mongoose.connection.readyState !== ConnectionStates.connected) {
        await mongoose.connect(process.env.NEXT_APP_MONGOURL as string);
        console.log("Mongodb is connected!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }
  public static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Mongodb is disconnected!");
    } catch (error: any) {
      console.error(error.message);
    }
  }
}