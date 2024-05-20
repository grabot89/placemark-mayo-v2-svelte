<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import Card from "$lib/ui/Card.svelte";
  import { subTitle } from "$lib/stores";
  import { onMount } from "svelte";
  //import echarts from "echarts";

  export let data: any;
  //let chart;

  console.log("Chart Data", data);

  subTitle.set("Categories Data");
  //onMount(() => {
  //  const options = {
  //    tooltip: {
  //      trigger: 'item',
  //      formatter: '{a} <br/>{b}: {c} ({d}%)'
  //    },
  //    legend: {
  //      orient: 'vertical',
  //      left: 10,
  //      data: byCategory.labels
  //    },
  //    series: [
  //      {
  //        name: 'Category',
  //        type: 'pie',
  //        radius: ['50%', '70%'],
  //        avoidLabelOverlap: false,
  //        label: {
  //          show: false,
  //          position: 'center'
  //        },
  //        emphasis: {
  //          label: {
  //            show: true,
  //            fontSize: '30',
  //            fontWeight: 'bold'
  //          }
  //        },
  //        labelLine: {
  //          show: false
  //        },
  //        data: byCategory.labels.map((label, index) => ({
  //          value: byCategory.values[index],
  //          name: label
  //        }))
  //      }
  //    ]
  //  };

  //  // Set chart options and render chart
  //  chart.setOption(options);
  //});
</script>

<div class="columns">
  <div class="column">
    <Card title="Placemarks By Category">
      <Chart data={data.byCategory} type="pie" maxDataPoints={10} />
    </Card>
  </div>
  <div class="column has-text-centered">
    <img alt="Mayo" src="/county-mayo.jpg" width="600" />
  </div>
</div>

<div class="columns">
  <div class="column">
    <Card title="Placemarks By User">
      <Chart data={data.byUser} type="bar" />
    </Card>
  </div>
  <div class="column">
    <Card title="Placemarks By Temperature">
      <Chart data={data.byTemperature} type="line" />
    </Card>
  </div>
</div>
<div id="pie-chart" style="width: 600px; height: 400px;"></div>