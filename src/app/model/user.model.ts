/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: String,
        password: String,
    },
    { timestamps: true }
);


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default class UserModel {
    public static async findByParams(query: any) {
        const user = await User.findOne(query);
        return user;
    }
}