"use server";

import {
  CreateTransactionParams,
  DeleteTransactionParams,
  GetUserTransactionParams,
  UpdateTransactionParams,
} from "@/lib/types";
import { connectToDatabase } from "../index";
import User from "../models/user.model";
import Transaction from "../models/transaction.model";
import { revalidatePath } from "next/cache";
import Category from "../models/category.model";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populateTransaction = (query: any) => {
  return query
    .populate({
      path: "creator",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
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
      category: transaction.category._id,
      creator: userId,
    });
    revalidatePath("/transactions");

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    console.error(error);
  }
}

// Get Single Transaction by ID
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
      transactionId
    );

    if (deletedTransaction) revalidatePath("/transactions");
  } catch (error) {
    console.error(error);
  }
}

// Get User's Transactions
export async function getTransactionsByUser({
  userId,
}: GetUserTransactionParams) {
  try {
    await connectToDatabase();
    const conditions = { creator: userId };

    const transactionsQuery = Transaction.find(conditions).sort({
      date: "desc",
    });

    const transactions = await populateTransaction(transactionsQuery);
    const transactionsCount = await Transaction.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(transactions)),
    };
  } catch (error) {
    console.error(error);
  }
}
