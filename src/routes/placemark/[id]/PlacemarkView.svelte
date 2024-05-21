<script lang="ts">
  import type { Placemark } from "$lib/types/placemark-types";
  import { CldUploadWidget, CldImage } from 'svelte-cloudinary';
  import Card from "$lib/ui/Card.svelte";

  export let placemark: Placemark;

  const handleSuccess = async (result) => {
    placemark.images.push(result.info.url);
    console.log("Placemark is", placemark);
    try {
      const response = await fetch(`/placemark/${placemark._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placemark }),
      });

      if (!response.ok) {
        throw new Error('Failed to update placemark image');
      }
    } catch (error) {
      console.error('Failed to update placemark image:', error);
    }
  };

  const handleError = (error) => {
    console.error("Upload failed:", error);
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

<Card title="Upload photos to placemark">
  <CldUploadWidget uploadPreset="placemark_preset" let:open let:isLoading onSuccess={(result) => {handleSuccess(result)}}>
	  <button class="button" on:click={open} disabled={isLoading}> Upload an Image </button>
  </CldUploadWidget>
</Card>

<div class="columns is-multiline">
{#each placemark.images as image}
  <div class="column is-one-third">
    <CldImage
      width="600"
      height="600"
      src={image}
      alt={placemark.description}
    />
  </div>
{/each}
</div>