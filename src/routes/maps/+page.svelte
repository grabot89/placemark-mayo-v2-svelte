<script lang="ts">
  import { subTitle } from "$lib/stores";
  import type { Placemark } from "$lib/types/placemark-types";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";

  export let data: any;
  let terrainMap: LeafletMap;
  let satelliteMap: LeafletMap;

  subTitle.set("Placemark Locations");

  onMount(async () => {
    const leaflet = await import("leaflet");
    const placemarks = data.placemarks;
    placemarks.forEach((placemark: Placemark) => {
      if (typeof placemark.category !== "string") {
        const terrainPopup = `${placemark.category.name}: ${placemark.name}`;
        terrainMap.addMarker(placemark.latitude, placemark.longitude, terrainPopup);
      }
    });
    const terrainlastPlacemark = placemarks[placemarks.length - 1];
    if (terrainlastPlacemark && terrainMap) terrainMap.moveTo(terrainlastPlacemark.latitude, terrainlastPlacemark.longitude);


    placemarks.forEach((placemark: Placemark) => {
      if (typeof placemark.category !== "string") {
        const satellitePopup = `${placemark.category.name}: ${placemark.name}`;
        satelliteMap.addMarker(placemark.latitude, placemark.longitude, satellitePopup);
      }
    });
    const satellitelastPlacemark = placemarks[placemarks.length - 1];
    if (satellitelastPlacemark && satelliteMap) satelliteMap.moveTo(satellitelastPlacemark.latitude, satellitelastPlacemark.longitude);
  });
</script>

<Card title="Placemarks Terrain Locations">
  <LeafletMap id="terrain-map" height={60} bind:this={terrainMap} activeLayer="Terrain" placemarks={data.placemarks} />
</Card>
<Card title="Placemarks Satellite Locations">
  <LeafletMap id="satellite-map" height={60} bind:this={satelliteMap} activeLayer="Satellite" placemarks={data.placemarks} />
</Card>