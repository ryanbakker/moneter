import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Omit<Document, "_id"> {
  _id: string;
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photoUrl: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
