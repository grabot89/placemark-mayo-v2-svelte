<script lang="ts">
  import type { Placemark } from "$lib/types/placemark-types";

  export let placemarks: Placemark[];
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
      <th></th>
    </tr>
  </thead>
  <tbody>
    {#each placemarks as placemark}
      <tr>
        <td>
          {placemark.name}
        </td>
        <td>
          {#if typeof placemark.category !== "string"}
            {placemark.category.title}
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
    {/each}
  </tbody>
</table>