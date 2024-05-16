import { placemarkService } from "$lib/services/placemark-service";
import { generateByCategory } from "$lib/services/placemark-utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent();
    if (session) {
      const placemarks = await placemarkService.getPlacemarks(session!);
      const categories = await placemarkService.getCategories(session!);
      return {
        byCandidate: generateByCategory(placemarks, categories)
      };
    }
  };

