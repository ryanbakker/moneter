import { Document, model, models, Schema } from "mongoose";

export interface ITransaction extends Document {
  _id: string;
  userId: string;
  amount: Number;
  date: Date;
  description: string;
  transactionType: "income" | "expense" | "transfer";
  merchantName: string;
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
  merchantName: {
    type: String,
    required: true,
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
