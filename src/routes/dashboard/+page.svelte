<script lang="ts">
  import { subTitle } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import Dashboard from "./Dashboard.svelte";
  import type { Category, Placemark } from "$lib/types/placemark-types";
  import CreateCategory from "$lib/ui/CreateCategory.svelte";
  import { onMount } from "svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";

  export let data: any;
  let map: LeafletMap;

  subTitle.set("Dashboard");

  onMount(async () => {
    const leaflet = await import("leaflet");
    const categories = data.categories;
    const placemarks = data.placemarks;
    placemarks.forEach((placemark: Placemark) => {
      if (typeof placemark.category !== "string") {
        const popup = `${placemark.category.name} ${placemark.name}`;
        map.addMarker(placemark.latitude, placemark.longitude, popup);
      }
    });
    const lastPlacemark = placemarks[placemarks.length - 1];
    if (lastPlacemark) map.moveTo(lastPlacemark.latitude, lastPlacemark.longitude);
  });
</script>

<div class="columns">
  <div class="column">
    <Card title="Create Category">
        <CreateCategory />
    </Card>
  </div>
  <div class="column">
    <Card title="Placemarks locations">
      <LeafletMap height={30} bind:this={map} />
    </Card>
  </div>
</div>
<Card title="Categories">
  <Dashboard categories={data.categories}/>
</Card>