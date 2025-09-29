import { Schema, model, models, Document, Types } from "mongoose";

export interface IAsset extends Document {
  _id: string;
  userClerkId: string;
  title: string;
  description?: string;
  currentAmount: number;
  changeAmount?: number;
  changePercentage?: number;
  createdDate?: Date;
  updatedDate?: Date;
  categoryId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AssetSchema = new Schema(
  {
    userClerkId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    description: { type: String },
    currentAmount: { type: Number, required: true },
    changeAmount: { type: Number },
    changePercentage: { type: Number },
    createdDate: { type: Date },
    updatedDate: { type: Date },
    categoryId: { type: Types.ObjectId, ref: "Category" },
  },
  { timestamps: true, versionKey: false, collection: "assets" }
);

const Asset = models.Asset || model("Asset", AssetSchema);

export default Asset;
