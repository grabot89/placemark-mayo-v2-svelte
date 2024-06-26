<script lang="ts">
  import "leaflet/dist/leaflet.css";
  import { onMount } from "svelte";
  import type { Control, Map as LeafletMap } from "leaflet";

  import { browser } from "$app/environment";

  export let id = "home-map-id";
  export let height = 80;
  export let location = { lat: 53.2734, lng: -7.7783203 };
  export let zoom = 8;
  export let minZoom = 7;
  export let activeLayer = "Terrain";
  export let placemarks = [];

  let imap: LeafletMap;
  let control: Control.Layers;
  let overlays: Control.LayersObject = {};
  let baseLayers: any;

  onMount(async () => {
    if (browser) {
      const leaflet = await import("leaflet");
      baseLayers = {
        Terrain: leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 17,
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }),
        Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        })
      };
      let defaultLayer = baseLayers[activeLayer];
      imap = leaflet.map(id, {
        center: [location.lat, location.lng],
        zoom: zoom,
        minZoom: minZoom,
        layers: [defaultLayer]
      });

      control = leaflet.control.layers(baseLayers, overlays).addTo(imap);

      placemarks.forEach(placemark => {
        if (placemark.category && placemark.category.name) {
          const categoryName = placemark.category.name;
          if (!overlays[categoryName]) {
            overlays[categoryName] = leaflet.layerGroup();
            control.addOverlay(overlays[categoryName], categoryName);
          }
          const marker = leaflet.marker([placemark.latitude, placemark.longitude]);
          marker.addTo(overlays[categoryName]);
          marker.bindPopup(placemark.name);
        }
      });
    }
  });

  export async function addMarker(lat: number, lng: number, popupText: string) {
    const leaflet = await import("leaflet");
    const marker = leaflet.marker([lat, lng]);
    marker.addTo(imap);
    const popup = leaflet.popup({ autoClose: false, closeOnClick: false });
    popup.setContent(popupText);
    marker.bindPopup(popup);
  }

  export function moveTo(lat: number, lng: number) {
    imap.flyTo({ lat: lat, lng: lng });
  }
</script>

<div {id} class="box" style="height: {height}vh" />
