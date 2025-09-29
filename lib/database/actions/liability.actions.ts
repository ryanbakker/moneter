"use server";

import { connectToDatabase } from "../index";
import Liability from "../models/liability.model";
import {
  CreateLiabilityParams,
  UpdateLiabilityParams,
  GetByUserParams,
  DeleteByIdParams,
} from "@/lib/types";

export async function createLiability(liability: CreateLiabilityParams) {
  try {
    await connectToDatabase();
    const created = await Liability.create(liability);
    return JSON.parse(JSON.stringify(created));
  } catch (error) {
    console.error(error);
  }
}

export async function getLiabilityById(liabilityId: string) {
  try {
    await connectToDatabase();
    const doc = await Liability.findById(liabilityId);
    if (!doc) throw new Error("Liability not found");
    return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

export async function getLiabilitiesByUser({ userClerkId }: GetByUserParams) {
  try {
    await connectToDatabase();
    const docs = await Liability.find({ userClerkId }).sort({ title: 1 });
    return JSON.parse(JSON.stringify(docs));
  } catch (error) {
    console.error(error);
  }
}

export async function updateLiability({
  _id,
  ...update
}: UpdateLiabilityParams) {
  try {
    await connectToDatabase();
    const updated = await Liability.findByIdAndUpdate(_id, update, {
      new: true,
    });
    if (!updated) throw new Error("Liability update failed");
    return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteLiability({ _id }: DeleteByIdParams) {
  try {
    await connectToDatabase();
    const deleted = await Liability.findByIdAndDelete(_id);
    return deleted ? JSON.parse(JSON.stringify(deleted)) : null;
  } catch (error) {
    console.error(error);
  }
}
