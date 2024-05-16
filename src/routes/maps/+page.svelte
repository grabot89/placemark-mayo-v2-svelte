<script lang="ts">
  import { subTitle } from "$lib/stores";
  import type { Placemark } from "$lib/types/placemark-types";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";

  export let data: any;
  let map: LeafletMap;

  subTitle.set("Placemark Locations");

  onMount(async () => {
    const leaflet = await import("leaflet");
    const placemarks = data.placemarks;
    placemarks.forEach((placemark: Placemark) => {
      if (typeof placemark.category !== "string") {
        const popup = `${placemark.category.title}: ${placemark.name}`;
        map.addMarker(placemark.latitude, placemark.longitude, popup);
      }
    });
    const lastPlacemark = placemarks[placemarks.length - 1];
    if (lastPlacemark && map) map.moveTo(lastPlacemark.latitude, lastPlacemark.longitude);
  });
</script>

<Card title="Placemarks Locations">
  <LeafletMap height={60} bind:this={map} />
</Card>