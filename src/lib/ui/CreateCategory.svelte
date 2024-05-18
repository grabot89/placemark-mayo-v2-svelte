
<script lang="ts">
  import type { Category, Placemark } from "$lib/types/placemark-types";

  let name = "";
  let message = "";

</script>


<form method="POST" action="?/create">
  <div class="field">
    <label class="label" for="amount">Enter Name:</label>
    <input class="input" id="name" name="name" type="text" />
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
