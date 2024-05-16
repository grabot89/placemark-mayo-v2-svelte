import { placemarkService } from "$lib/services/placemark-service";
import type { Session } from "$lib/types/placemark-types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  const { session } = await parent();
  if (session) {
    return {
      placemarks: await placemarkService.getPlacemarks(session!),
      categoryList: await placemarkService.getCategories(session!)
    };
  }
};

export const actions = {
  create: async ({ request, cookies }) => {
    const cookieStr = cookies.get("placemark-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const placemark = {
          name: form.get("name") as unknown as string,
          category: form.get("category") as string,
          description: form.get("description") as string,
          latitude: form.get("latitude") as unknown as number,
          longitude: form.get("longitude") as unknown as number,
          image: "",
          temperature: 0,
          _id: ""
        };
        placemarkService.createPlacemark(placemark, session);
      }
    }
  }
};