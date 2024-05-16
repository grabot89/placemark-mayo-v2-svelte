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
        <input id="longitude" class="input" type="float" name="latitude" bind:value={latitude} />
      </p>
    </div>
    <div class="field-label is-normal">
      <label for="latitude" class="label">Longitude</label>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input id="latitude" class="input" type="float" name="longitude" bind:value={longitude} />
      </p>
    </div>
  </div>
</div>