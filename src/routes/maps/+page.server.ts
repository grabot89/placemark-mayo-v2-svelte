import { placemarkService } from "$lib/services/placemark-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    placemarks: await placemarkService.getPlacemarks(),
    categories: await placemarkService.getCategories()
  };
};