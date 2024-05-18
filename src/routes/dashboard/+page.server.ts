import { placemarkService } from "$lib/services/placemark-service";
import type { PageServerLoad } from "./$types";
import type { Session } from "$lib/types/placemark-types";
import { redirect } from "@sveltejs/kit";

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
        const categories = await placemarkService.getCategories()
        const form = await request.formData();
        const name = form.get("name") as string;
        const existingCategory = categories.find((category) => category.name === name)
        if (name === "" || existingCategory) {
          throw redirect(500, "/dashboard");
        } else {
          const category = {
            name: form.get("name") as unknown as string
          };
          placemarkService.createCategory(category);
        }
      }
    }
  }
};