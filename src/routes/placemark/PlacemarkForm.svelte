<script lang="ts">
  import { enhance } from "$app/forms";
  import { placemarkService } from "$lib/services/placemark-service";
  import type { Category, Placemark } from "$lib/types/placemark-types";
  import { currentSession, latestPlacemark } from "$lib/stores";
  import Coordinates from "$lib/ui/Coordinates.svelte";
  import type { Category } from "$lib/types/placemark-types";

  export let categories: Category[] = [];

  let name = "";
  let description = "";
  let selectedCategory = "Museums";
  let latitude = 52.160858;
  let longitude = -7.15242;
  let message = "Create a new placemark of interest!";

</script>

<form method="POST" action="?/create" use:enhance>
  <div class="field">
    <label class="label" for="amount">Enter Name:</label>
    <input class="input" id="name" name="name" type="text" />
  </div>
  <div class="field">
    <label class="label" for="name">Select Category:</label>
    <div class="select">
      <select name="category">
        {#each categories as category}
          <option value={category._id}>{category.title}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="field">
    <label class="label" for="name">Enter Description:</label>
    <input class="input" id="description" name="description" type="text" />
  </div>
  <Coordinates bind:latitude bind:longitude />
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Create placemark</button>
    </div>
  </div>
</form>
<div class="box mt-4">
  <div class="content has-text-centered">
    {message}
  </div>
</div>