"use server";

import { connectToDatabase } from "../index";
import Account from "../models/account.model";
import {
  CreateAccountParams,
  UpdateAccountParams,
  GetByUserParams,
  DeleteByIdParams,
} from "@/lib/types";

export async function createAccount(account: CreateAccountParams) {
  try {
    await connectToDatabase();
    const created = await Account.create(account);
    return JSON.parse(JSON.stringify(created));
  } catch (error) {
    console.error(error);
  }
}

export async function getAccountById(accountId: string) {
  try {
    await connectToDatabase();
    const doc = await Account.findById(accountId);
    if (!doc) throw new Error("Account not found");
    return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

export async function getAccountsByUser({ userClerkId }: GetByUserParams) {
  try {
    await connectToDatabase();
    const docs = await Account.find({ userClerkId }).sort({ name: 1 });
    return JSON.parse(JSON.stringify(docs));
  } catch (error) {
    console.error(error);
  }
}

export async function updateAccount({ _id, ...update }: UpdateAccountParams) {
  try {
    await connectToDatabase();
    const updated = await Account.findByIdAndUpdate(_id, update, { new: true });
    if (!updated) throw new Error("Account update failed");
    return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteAccount({ _id }: DeleteByIdParams) {
  try {
    await connectToDatabase();
    const deleted = await Account.findByIdAndDelete(_id);
    return deleted ? JSON.parse(JSON.stringify(deleted)) : null;
  } catch (error) {
    console.error(error);
  }
}
