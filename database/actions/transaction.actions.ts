"use server";

import { PopulateOptions } from "mongoose";
import { Category, Transaction, User } from "../models";
import {
  CreateTransactionParams,
  DeleteTransactionParams,
  UpdateTransactionParams,
} from "@/lib/types/transaction";
import { connectToDatabase } from "..";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

interface PopulatableQuery {
  populate(options: PopulateOptions): this;
}

const populateTransaction = <T extends PopulatableQuery>(query: T): T => {
  return query
    .populate({
      path: "creator",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({
      path: "category",
      model: Category,
      select: "_id name",
    });
};

// Create Transaction
export async function createTransaction({
  userId,
  transaction,
}: CreateTransactionParams) {
  try {
    await connectToDatabase();

    const creator = await User.findById(userId);
    if (!creator) throw new Error("User not found");

    const newTransaction = await Transaction.create({
      ...transaction,
      cateogry: transaction.category._id,
      creator: userId,
    });

    revalidatePath("/transactions");

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    console.error(error);
  }
}

// Get single transaction by ID
export async function getTransactionById(transactionId: string) {
  try {
    await connectToDatabase();

    const transaction = await populateTransaction(
      Transaction.findById(transactionId)
    );

    if (!transaction) throw new Error("Transaction not found");

    return JSON.parse(JSON.stringify(transaction));
  } catch (error) {
    console.error(error);
  }
}

// Update Single Transaction
export async function updateTransaction({
  userId,
  transaction,
}: UpdateTransactionParams) {
  try {
    await connectToDatabase();

    const transactionToUpdate = await Transaction.findById(transaction._id);
    if (
      !transactionToUpdate ||
      transactionToUpdate.creator.toHexString() !== userId
    ) {
      throw new Error("Unauthorized or transaction not found");
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transaction._id,
      { ...transaction, category: transaction.category._id },
      { new: true }
    );
    revalidatePath("/transactions");

    return JSON.parse(JSON.stringify(updatedTransaction));
  } catch (error) {
    console.error(error);
  }
}

// Delete Transaction
export async function deleteTransaction({
  transactionId,
}: DeleteTransactionParams) {
  try {
    await connectToDatabase();

    const deletedTransaction = await Transaction.findByIdAndDelete(
      transactionId.toString()
    );

    if (deletedTransaction) revalidatePath("/transactions");
  } catch (error) {
    console.error(error);
  }
}

// Get User's Transactions
export async function getUserTransactions() {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized: User not authenticated");
    }

    await connectToDatabase();

    const transactions = await Transaction.find({ userId })
      .sort({ date: -1, createdAt: -1 })
      .lean();

    // Transform MongoDB _id to id for frontend compatibility
    const transformedTransactions = transactions.map((transaction) => ({
      ...transaction,
      id: transaction._id,
      _id: undefined,
    }));

    return JSON.parse(JSON.stringify(transformedTransactions));
  } catch (error) {
    console.error(error);
  }
}
