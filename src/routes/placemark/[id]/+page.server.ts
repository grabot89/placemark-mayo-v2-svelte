import { placemarkService } from "$lib/services/placemark-service";
import type { PageServerLoad } from "./$types";
import { CLOUD_NAME } from '$env/static/private'

export const load: PageServerLoad = async ({ params }) => {
  return {
    placemark: await placemarkService.getPlacemark(params.id),
    CLOUD_NAME: CLOUD_NAME
  };
};

export const actions = {
  updateImage: async ({ params, request }) => {
    const { id } = params;
    const { updatedPlacemark } = await request.json();
    try {
      // Update the placemark with the new image URL
      await placemarkService.updatePlacemark(id, updatedPlacemark);
      return {
        status: 200,
        body: { message: 'Placemark image updated successfully' }
      };
    } catch (error) {
      return {
        status: 500,
        body: { error: 'Failed to update placemark image' }
      };
    }
  }
};