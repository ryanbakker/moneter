import { Document, model, models, Schema } from "mongoose";

export interface IAccount extends Omit<Document, "_id"> {
  _id: string;
  userId: string;
  type: string;
  currentAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

const AccountSchema = new Schema({
  userId: { type: String, required: true, index: true },
  type: { type: String, required: true },
  currentAmount: { type: Number, required: true },
});

const Account = models.Account || model("Account", AccountSchema);

export default Account;
