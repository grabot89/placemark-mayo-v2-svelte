<script lang="ts">
  import type { Category, Placemark } from "$lib/types/placemark-types";
  import { subTitle, latestPlacemark } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import CategoryView from "./CategoryView.svelte";
  import PlacemarkList from "$lib/ui/PlacemarkList.svelte";
  import PlacemarkForm from "/src/routes/placemark/PlacemarkForm.svelte";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  subTitle.set("View categories");
  export let data: any;
</script>

<CategoryView />
<div class="columns">
  <div class="column">
    <Card title="Create placemark">
      <PlacemarkForm categories={ data.categories }/>
    </Card>
  </div>
  <div class="column">
    <Card title="Placemarks">
      <PlacemarkList placemarks={ data.placemarks }/>
    </Card>
  </div>
</div>