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
      <th>Created By</th>
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
        <td>
          {#if typeof placemark.user !== "string"}
            {placemark.user.firstName} {placemark.user.lastName}
          {:else}
            {placemark.user}
          {/if}
        </td>
        <td>
          <a href="/placemark/{placemark._id}" class="button">
            <span class="icon">
              <i class="fas fa-eye"></i>
            </span>
          </a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>