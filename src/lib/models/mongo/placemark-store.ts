import type { Placemark } from "$lib/types/placemark-types";
import { PlacemarkMongoose } from "./placemark.js";

export const placemarkStore = {
  async find(): Promise<Placemark[]> {
    const placemarks = await PlacemarkMongoose.find().populate("user").populate("category").lean();
    return placemarks;
  },

  async findOne(id: string): Promise<Placemark | null> {
    const placemark = await PlacemarkMongoose.findOne({ _id: id });
    if (!placemark) {
        return null;
      }
      return placemark;
  },

  async findByCategory(id: string): Promise<Placemark[] | null> {
    const placemarks = await PlacemarkMongoose.find({ category: id }).populate("user").populate("category").lean();
    if (!placemarks) {
      return null;
    }
    return placemarks;
  },

  async add(placemark: Placemark): Promise<Placemark | null> {
    const newPlacemark = new PlacemarkMongoose({ ...placemark });
    await newPlacemark.save();
    return newPlacemark;
  },

  async delete() {
    await PlacemarkMongoose.deleteMany({});
  },

  async update(placemark: Placemark, updatedPlacemark: Placemark) {
    const placemarkDoc = await PlacemarkMongoose.findOne({ _id: placemark._id });
    placemarkDoc.name = updatedPlacemark.name;
    placemarkDoc.category = updatedPlacemark.category;
    placemarkDoc.description = updatedPlacemark.description;
    placemarkDoc.user = updatedPlacemark.user;
    placemarkDoc.latitude = updatedPlacemark.latitude;
    placemarkDoc.longitude = updatedPlacemark.longitude;
    placemarkDoc.temperature = updatedPlacemark.temperature;
    await placemarkDoc.save();
  },
};
