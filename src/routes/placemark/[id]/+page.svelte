<script lang="ts">
  import { subTitle } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import type { Category } from "$lib/types/placemark-types";
  import PlacemarkView from "./PlacemarkView.svelte";
  import { onMount } from "svelte";

  export let data: any;
  subTitle.set("View a placemark");

  onMount(async () => {
    const placemark = data.placemark;
    console.log("Placemark here is", placemark);
  });
</script>

<Card title="View placemark">
  <PlacemarkView placemark={data.placemark}/>
</Card>