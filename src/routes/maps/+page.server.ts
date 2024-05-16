import { placemarkService } from "$lib/services/placemark-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent();
    if (session) {
      return {
        placemarks: await placemarkService.getPlacemarks(session!)
      };
    }
  };