"use server";

import {
  CreateAssetParams,
  UpdateAssetParams,
  GetByUserParams,
  DeleteByIdParams,
} from "@/lib/types";
import { connectToDatabase } from "../index";
import Asset from "../models/asset.model";

export async function createAsset(assetData: CreateAssetParams) {
  try {
    await connectToDatabase();
    const created = await Asset.create(assetData);
    return JSON.parse(JSON.stringify(created));
  } catch (error) {
    console.error(error);
  }
}

export async function getAssetById(assetId: string) {
  try {
    await connectToDatabase();
    const doc = await Asset.findById(assetId);
    if (!doc) throw new Error("Asset not found");
    return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

export async function getAssetsByUser({ userClerkId }: GetByUserParams) {
  try {
    await connectToDatabase();
    const docs = await Asset.find({ userClerkId }).sort({ title: 1 });
    return JSON.parse(JSON.stringify(docs));
  } catch (error) {
    console.error(error);
  }
}

export async function updateAsset({ _id, ...update }: UpdateAssetParams) {
  try {
    await connectToDatabase();
    const updated = await Asset.findByIdAndUpdate(_id, update as any, {
      new: true,
    });
    if (!updated) throw new Error("Asset update failed");
    return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteAsset({ _id }: DeleteByIdParams) {
  try {
    await connectToDatabase();
    const deleted = await Asset.findByIdAndDelete(_id);
    return deleted ? JSON.parse(JSON.stringify(deleted)) : null;
  } catch (error) {
    console.error(error);
  }
}
