import { placemarkService } from "$lib/services/placemark-service";

export async function PUT({ params, request }) {
	const { id } = params;
  const { placemark } = await request.json();

	try {
    // Update the placemark with the new image URL
    await placemarkService.updatePlacemark(id, placemark);
    return new Response(JSON.stringify({ message: "Placemark image updated successfully" }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to update placemark image" }), { status: 500 })
  }
}