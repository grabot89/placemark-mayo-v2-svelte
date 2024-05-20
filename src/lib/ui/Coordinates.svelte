<script lang="ts">
  export let latitude = 0.0;
  export let longitude = 0.0;
</script>

<div class="box field is-horizontal">
  <div class="field-label is-normal">
    <label for="longitude" class="label">Latitude</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input id="latitude" class="input" type="number" name="latitude" bind:value={latitude} min="53.46618549741208" max="54.36227016318675" step="any" />
      </p>
    </div>
    <div class="field-label is-normal">
      <label for="latitude" class="label">Longitude</label>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input id="longitude" class="input" type="number" name="longitude" bind:value={longitude} min="-10.275894721548646" max="-8.583578381749792" step="any" />
      </p>
    </div>
  </div>
</div>