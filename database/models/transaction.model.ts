import { Document, model, models, Schema } from "mongoose";

export interface ITransaction extends Omit<Document, "_id"> {
  _id: string;
  userId: string;
  amount: number;
  date: Date;
  description: string;
  type: "income" | "expense" | "transfer";
  merchant: string; // Person recieving or sending transaction
  account: { _id: string; name: string };
  category: {
    _id: string;
    name: string;
    icon: string;
  };
}

const TransactionSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  date: {
    type: Date,
    required: true,
    index: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["income", "expense", "transfer"],
    required: true,
  },
  category: {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  merchant: {
    type: String,
    required: true, // Temporarily set to true
  },
  account: {
    _id: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});

const Transaction =
  models.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
