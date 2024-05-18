<script lang="ts">
  import type { Placemark } from "$lib/types/placemark-types";

  export let placemark: Placemark;
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