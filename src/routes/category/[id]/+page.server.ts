import { placemarkService } from "$lib/services/placemark-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return {
    categories: await placemarkService.getCategories(),
    placemarks: await placemarkService.getPlacemarksByCategory(params.id)
  };
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
        };
        placemarkService.createPlacemark(placemark);
      }
    }
  }
};

