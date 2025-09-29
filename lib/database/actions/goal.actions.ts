"use server";

import { connectToDatabase } from "../index";
import Goal from "../models/goal.model";
import {
  CreateGoalParams,
  UpdateGoalParams,
  GetByUserParams,
  DeleteByIdParams,
} from "@/lib/types";

export async function createGoal(goal: CreateGoalParams) {
  try {
    await connectToDatabase();
    const created = await Goal.create(goal);
    return JSON.parse(JSON.stringify(created));
  } catch (error) {
    console.error(error);
  }
}

export async function getGoalById(goalId: string) {
  try {
    await connectToDatabase();
    const doc = await Goal.findById(goalId);
    if (!doc) throw new Error("Goal not found");
    return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

export async function getGoalsByUser({ userClerkId }: GetByUserParams) {
  try {
    await connectToDatabase();
    const docs = await Goal.find({ userClerkId }).sort({ status: 1, title: 1 });
    return JSON.parse(JSON.stringify(docs));
  } catch (error) {
    console.error(error);
  }
}

export async function updateGoal({ _id, ...update }: UpdateGoalParams) {
  try {
    await connectToDatabase();
    const updated = await Goal.findByIdAndUpdate(_id, update, { new: true });
    if (!updated) throw new Error("Goal update failed");
    return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteGoal({ _id }: DeleteByIdParams) {
  try {
    await connectToDatabase();
    const deleted = await Goal.findByIdAndDelete(_id);
    return deleted ? JSON.parse(JSON.stringify(deleted)) : null;
  } catch (error) {
    console.error(error);
  }
}
