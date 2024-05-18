import { placemarkService } from "$lib/services/placemark-service";
import { generateByCategory } from "$lib/services/placemark-utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const placemarks = await placemarkService.getPlacemarks();
  const categories = await placemarkService.getCategories();
  return {
    byCategory: generateByCategory(placemarks, categories)
  };
};