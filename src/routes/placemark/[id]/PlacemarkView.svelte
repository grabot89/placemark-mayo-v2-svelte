<script lang="ts">
  import type { Placemark } from "$lib/types/placemark-types";
  import { CldUploadWidget } from 'svelte-cloudinary';

  export let placemark: Placemark;
  export let CLOUD_NAME: string;

  console.log("CLOUD_NAME", CLOUD_NAME);

  const handleSuccess = async (result) => {
    console.log("Upload successful:", result);
    placemark.images.push(imageUrl); // Add the image URL to the placemark's images array
    try {
      await updateImage(placemark._id, placemark);
      console.log('Placemark image updated successfully');
    } catch (error) {
      console.error('Failed to update placemark image:', error);
    }
  };

  const handleError = (error) => {
    console.error("Upload failed:", error);
    const imageUrl = result.info.secure_url;
    placemark.images.push(imageUrl);

  };
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>Placemark</th>
      <th>Category</th>
      <th>Description</th>
      <th>Latitude</th>
      <th>Longitude</th>
      <th>Temperature</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>
          {placemark.name}
        </td>
        <td>
          {#if typeof placemark.category !== "string"}
            {placemark.category.name}
          {/if}
        </td>
        <td>
          {placemark.description}
        </td>
        <td>
          {placemark.latitude}
        </td>
        <td>
          {placemark.longitude}
        </td>
        <td>
          {placemark.temperature}
        </td>
      </tr>
  </tbody>
</table>

<CldUploadWidget
  cloudName={CLOUD_NAME}
  uploadPreset="placemark_preset"
  folder="placemark_images"
  tags={[`placemark_${placemark._id}`]}
  onSuccess={handleSuccess}
  onError={handleError}
/>