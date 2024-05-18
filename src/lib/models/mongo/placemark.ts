import type { Placemark } from "$lib/types/placemark-types";
import { Schema, model } from "mongoose";
import pkg from "mongoose";
const { models } = pkg;

const placemarkSchema = new Schema<Placemark>({
  name: String,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  description: String,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  latitude: String,
  longitude: String
});

export const PlacemarkMongoose = models["Placemark"] || model("Placemark", placemarkSchema);
