<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import Card from "$lib/ui/Card.svelte";
  import { subTitle } from "$lib/stores";
  export let data: any;

  subTitle.set("Categories Data");
</script>

<div class="columns">
  <div class="column">
    <Card title="Placemarks By Category">
      <Chart data={data.placemarksByCategory} type="pie" />
    </Card>
  </div>
  <div class="column has-text-centered">
    <img alt="Mayo" src="/county-mayo.jpg" width="600" />
  </div>
</div>