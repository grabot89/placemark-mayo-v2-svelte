<script lang="ts">
  import { subTitle } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import PlacemarkForm from "./PlacemarkForm.svelte";
  import type { Category } from "$lib/types/placemark-types";

  export let data: any;
  subTitle.set("View placemark");
</script>

<Card title="Create placemark">
  <PlacemarkForm categories={data.categories}/>
</Card>