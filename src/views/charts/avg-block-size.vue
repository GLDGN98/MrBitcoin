<template>
    <div class="avg-block-size-chart">
        <Bar v-if="chartData.labels && chartData.labels.length" id="avg-block-size-chart" :options="chartOptions"
            :data="chartData" />
    </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { bitcoinService } from '../../services/bitcoin-service'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
            {
                 data: null,
                 label: 'Avg Block Size'
                 }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async created() {
    const avgBlockSizeData = await bitcoinService.getAvgBlockSize()
    this.chartData.labels = avgBlockSizeData?.map(item => item.date.toLocaleDateString())
    this.chartData.datasets[0].data = avgBlockSizeData?.map(item => item.avgBlockSize)
  }
}
</script>
<style>
.avg-block-size-chart {
    width: 100%;
    height: 45vh;
    margin: auto;
}
</style>