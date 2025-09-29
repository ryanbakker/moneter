import { Schema, Document, models, model } from "mongoose";

export interface IBill extends Document {
  userId: string;
  name: string;
  amount: number;
  dueDate: Date;
  category: {
    name: string;
    icon: string;
  };
  isRecurring: boolean;
  status: "paid" | "unpaid" | "overdue";
  frequency?: "monthly" | "quarterly" | "yearly" | "weekly";
  accountId?: string;
  accountName?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BillSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
      index: true,
    },
    category: {
      name: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
    isRecurring: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["paid", "unpaid", "overdue"],
      default: "unpaid",
    },
    frequency: {
      type: String,
      enum: ["monthly", "quarterly", "yearly", "weekly"],
      required: false,
    },
    accountId: {
      type: String,
      required: false,
      index: true,
    },
    accountName: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "bills",
  }
);

const Bill = models.Bill || model("Bill", BillSchema);

export default Bill;
