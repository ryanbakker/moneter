import { Document, model, models, Schema } from "mongoose";

export interface ICategory extends Omit<Document, "_id"> {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
