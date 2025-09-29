"use server";

import { connectToDatabase } from "../index";
import Report from "../models/report.model";
import {
  CreateReportParams,
  UpdateReportParams,
  GetByUserParams,
  DeleteByIdParams,
} from "@/lib/types";

export async function createReport(report: CreateReportParams) {
  try {
    await connectToDatabase();
    const created = await Report.create(report);
    return JSON.parse(JSON.stringify(created));
  } catch (error) {
    console.error(error);
  }
}

export async function getReportById(reportId: string) {
  try {
    await connectToDatabase();
    const doc = await Report.findById(reportId);
    if (!doc) throw new Error("Report not found");
    return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

export async function getReportsByUser({ userClerkId }: GetByUserParams) {
  try {
    await connectToDatabase();
    const docs = await Report.find({ userClerkId }).sort({ date: -1 });
    return JSON.parse(JSON.stringify(docs));
  } catch (error) {
    console.error(error);
  }
}

export async function updateReport({ _id, ...update }: UpdateReportParams) {
  try {
    await connectToDatabase();
    const updated = await Report.findByIdAndUpdate(_id, update, { new: true });
    if (!updated) throw new Error("Report update failed");
    return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteReport({ _id }: DeleteByIdParams) {
  try {
    await connectToDatabase();
    const deleted = await Report.findByIdAndDelete(_id);
    return deleted ? JSON.parse(JSON.stringify(deleted)) : null;
  } catch (error) {
    console.error(error);
  }
}
