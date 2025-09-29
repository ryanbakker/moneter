import { Schema, model, models, Document } from "mongoose";

export interface IReport extends Document {
  _id: string;
  userClerkId: string;
  title: string;
  date: Date;
  type: "summary" | "net_worth" | "spending" | "income" | "custom";
  file: unknown;
  createdAt: Date;
  updatedAt: Date;
}

const ReportSchema = new Schema(
  {
    userClerkId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    date: { type: Date, required: true, index: true },
    type: {
      type: String,
      enum: ["summary", "net_worth", "spending", "income", "custom"],
      required: true,
      index: true,
    },
    file: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true, versionKey: false, collection: "reports" }
);

const Report = models.Report || model("Report", ReportSchema);

export default Report;
