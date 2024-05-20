import { placemarkService } from "$lib/services/placemark-service";
import type { Session } from "$lib/types/placemark-types";
import type { PageServerLoad } from "./$types";
import { fail } from '@sveltejs/kit';
import { sanitizeInput } from "$lib/services/placemark-utils";

export const load: PageServerLoad = async () => {
  return {
    placemarks: await placemarkService.getPlacemarks(),
    categories: await placemarkService.getCategories()
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
          name: sanitizeInput(form.get("name") as unknown as string),
          category: form.get("category") as string,
          description: sanitizeInput(form.get("description") as string),
          latitude: form.get("latitude") as unknown as number,
          longitude: form.get("longitude") as unknown as number,
          image: "",
          temperature: form.get("temperature") as unknown as number,
          user: session._id
        };
        try {
          placemarkService.createPlacemark(placemark);
        } catch (error) {
          return fail(422, {
            error: error.message
          });
        }
      }
    }
  }
};