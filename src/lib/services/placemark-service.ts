import type { Session, User, Placemark, Category } from "$lib/types/placemark-types";
import { userStore } from "$lib/models/mongo/user-store";
import { placemarkStore } from "$lib/models/mongo/placemark-store";
import { categoryStore } from "$lib/models/mongo/category-store";

export const placemarkService = {

  async signup(user: User): Promise<boolean> {
    try {
      const newUser = await userStore.add(user);
      return !!newUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const user = await userStore.findBy(email);
      if (user !== null && user.password === password) {
        const session = {
          name: `${user.firstName} ${user.lastName}`,
          token: user._id!.toString(),
          _id: user._id!.toString()
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async createPlacemark(placemark: Placemark) {
    try {
      placemarkStore.add(placemark);
    } catch (error) {
      return false;
    }
  },

  async createCategory(category: Category) {
    try {
      categoryStore.add(category);
    } catch (error) {
      return false;
    }
  },

  async getCategories(): Promise<Category[]> {
    try {
      const categories = await categoryStore.find();
      return JSON.parse(JSON.stringify(categories));
    } catch (error) {
      return [];
    }
  },

  async getPlacemarks(): Promise<Placemark[]> {
    try {
      const placemarks = await placemarkStore.find();
      return JSON.parse(JSON.stringify(placemarks));
    } catch (error) {
      return [];
    }
  },

  async getPlacemark(id: string): Promise<Placemark | null> {
    try {
      const placemark = await placemarkStore.findOne(id);
      console.log("Placemark findOne", placemark);
      return JSON.parse(JSON.stringify(placemark));
    } catch (error) {
      return null;
    }
  },

  async getPlacemarksByCategory(id: string): Promise<Category[]> {
    try {
      const placemarks = await placemarkStore.findByCategory(id);
      console.log("Placemarks", placemarks);
      return JSON.parse(JSON.stringify(placemarks));
    } catch (error) {
      return [];
    }
  }, 
};
