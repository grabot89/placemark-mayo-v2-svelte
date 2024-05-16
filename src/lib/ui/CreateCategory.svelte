
<script lang="ts">
  import { placemarkService } from "$lib/services/placemark-service";
  import type { Category, Placemark } from "$lib/types/placemark-types";
  import { currentSession } from "$lib/stores";
  import type { Category } from "$lib/types/placemark-types";
  import { get } from "svelte/store";

  export let categoryList: Category[] = [];

  async function create() {
    console.log(`Just created category: ${title}`);
    if (title) {
         const category = categoryList.find((category) => category.title === title);
      if (category) {
        message = `A category with name ${title} already exists!`
      } else {
        const category: Category = {
            title: title,
        };
        const success = await placemarkService.createCategory(category, get(currentSession));
        console.log("Create category response", success);
        if (!success) {
          message = "Create category failed - some error occurred";
          return;
        }
        message = `Thanks! Your category ${title} has been created`;
      }
    } 
  }

  let title = "";
  let message = "";

</script>


<form on:submit|preventDefault={create}>
  <div class="field">
    <label class="label" for="amount">Enter Name:</label>
    <input bind:value={title} class="input" id="title" name="title" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Create category</button>
    </div>
  </div>
</form>
<div class="box mt-4">
  <div class="content has-text-centered">
    {message}
  </div>
</div>
