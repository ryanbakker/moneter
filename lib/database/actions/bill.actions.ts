"use server";

import { connectToDatabase } from "../index";
import Bill from "../models/bill.model";
import {
  CreateBillParams,
  UpdateBillParams,
  GetBillsByUserParams,
  DeleteByIdParams,
} from "@/lib/types";

export async function createBill(bill: CreateBillParams) {
  try {
    await connectToDatabase();
    const created = await Bill.create(bill);
    return JSON.parse(JSON.stringify(created));
  } catch (error) {
    console.error(error);
  }
}

export async function getBillById(billId: string) {
  try {
    await connectToDatabase();
    const doc = await Bill.findById(billId);
    if (!doc) throw new Error("Bill not found");
    return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

export async function getBillsByUser({ userId }: GetBillsByUserParams) {
  try {
    await connectToDatabase();
    const docs = await Bill.find({ userId }).sort({ dueDate: 1 });
    return JSON.parse(JSON.stringify(docs));
  } catch (error) {
    console.error(error);
  }
}

export async function updateBill({ _id, ...update }: UpdateBillParams) {
  try {
    await connectToDatabase();
    const updated = await Bill.findByIdAndUpdate(_id, update, { new: true });
    if (!updated) throw new Error("Bill update failed");
    return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteBill({ _id }: DeleteByIdParams) {
  try {
    await connectToDatabase();
    const deleted = await Bill.findByIdAndDelete(_id);
    return deleted ? JSON.parse(JSON.stringify(deleted)) : null;
  } catch (error) {
    console.error(error);
  }
}
