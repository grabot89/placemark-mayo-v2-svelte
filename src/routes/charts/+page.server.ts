import { placemarkService } from "$lib/services/placemark-service";
import { generateByCategory, generateByTemperature, generateByUser } from "$lib/services/placemark-utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const placemarks = await placemarkService.getPlacemarks();
  const categories = await placemarkService.getCategories();
  const users = await placemarkService.getUsers();
  return {
    byCategory: generateByCategory(placemarks, categories),
    byUser: generateByUser(placemarks, users),
    byTemperature: generateByTemperature(placemarks)
  };
};