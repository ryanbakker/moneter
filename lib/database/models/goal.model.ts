import { Schema, model, models, Document, Types } from "mongoose";

export interface IGoal extends Document {
  _id: string;
  userClerkId: string;
  title: string;
  targetAmount: number;
  targetDate?: Date;
  currentAmount: number;
  priority?: number;
  status: "active" | "paused" | "completed" | "overdue";
  categoryId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const GoalSchema = new Schema(
  {
    userClerkId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    targetDate: { type: Date },
    currentAmount: { type: Number, required: true, default: 0 },
    priority: { type: Number },
    status: {
      type: String,
      enum: ["active", "paused", "completed", "overdue"],
      required: true,
      default: "active",
      index: true,
    },
    categoryId: { type: Types.ObjectId, ref: "Category" },
  },
  { timestamps: true, versionKey: false, collection: "goals" }
);

const Goal = models.Goal || model("Goal", GoalSchema);

export default Goal;
