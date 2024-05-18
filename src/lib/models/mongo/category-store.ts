import type { Category } from "$lib/types/placemark-types.js";
import { CategoryMongoose } from "./category.js";

export const categoryStore = {
  async find(): Promise<Category[]> {
    const categories = await CategoryMongoose.find().lean();
    return categories;
  },

  async findOne(id: string): Promise<Category | null> {
    const category = await CategoryMongoose.findOne({ _id: id }).lean();
    return category;
  },

  async findBy(name: string): Promise<Category | null> {
    const category = await CategoryMongoose.findOne({
      name
    }).lean();
    return category;
  },

  async add(category: Category): Promise<Category | null> {
    const newCategory = new CategoryMongoose(category);
    const categoryObj = await newCategory.save();
    return categoryObj;
  },
};