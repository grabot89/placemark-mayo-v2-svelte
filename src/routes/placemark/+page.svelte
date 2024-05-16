<script lang="ts">
  import { subTitle, latestPlacemark } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import PlacemarkForm from "./PlacemarkForm.svelte";
  import type { Category } from "$lib/types/placemark-types";

  export let data: any;
  subTitle.set("Create a placemark");
</script>

<Card title="Create placemark">
  <PlacemarkForm categories={data.categories}/>
</Card>