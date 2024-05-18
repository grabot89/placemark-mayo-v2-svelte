import type { Category } from "$lib/types/placemark-types";
import { Schema, model } from "mongoose";
import pkg from "mongoose";
const { models } = pkg;

const categorySchema = new Schema<Category>({
  name: String
});

export const CategoryMongoose = models["Category"] || model("Category", categorySchema);