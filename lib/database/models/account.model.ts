import { Schema, model, models, Document } from "mongoose";

export interface IAccount extends Document {
  _id: string;
  userClerkId: string;
  name: string;
  type:
    | "checking"
    | "savings"
    | "cash"
    | "credit_card"
    | "investment"
    | "loan"
    | "other";
  currentAmount: number;
  institution?: string;
  lastFour?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AccountSchema = new Schema(
  {
    userClerkId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    type: {
      type: String,
      enum: [
        "checking",
        "savings",
        "cash",
        "credit_card",
        "investment",
        "loan",
        "other",
      ],
      required: true,
      index: true,
    },
    currentAmount: { type: Number, required: true },
    institution: { type: String },
    lastFour: { type: String },
  },
  { timestamps: true, versionKey: false, collection: "accounts" }
);

const Account = models.Account || model("Account", AccountSchema);

export default Account;
