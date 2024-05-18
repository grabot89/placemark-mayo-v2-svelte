<script lang="ts">
  import type { Category, Placemark } from "$lib/types/placemark-types";
  import { subTitle } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import CategoryView from "./CategoryView.svelte";
  import PlacemarkList from "$lib/ui/PlacemarkList.svelte";
  import PlacemarkForm from "/src/routes/placemark/PlacemarkForm.svelte";
  import { onMount } from "svelte";
  import { page } from '$app/stores';

  subTitle.set("View categories");
  export let data: any;
  export let thisCategory: Category;

  onMount(async () => {
    const categories = data.categories;
    const thisCategory = data.categories.find((category) => category.id === $page.params.id)
  });
    
</script>


<CategoryView category={ thisCategory }/>
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