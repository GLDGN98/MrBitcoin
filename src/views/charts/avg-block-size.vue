<template>
  <div class="avg-block-size-chart">
    <Line v-if="chartData.labels && chartData.labels.length" id="avg-block-size-chart" :options="chartOptions"
      :data="chartData" />
  </div>
</template>
<script>
// import { Bar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { bitcoinService } from '../../services/bitcoin-service'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
  name: 'BarChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
            {
                 data: null,
                 label: 'Avg Block Size',
                 backgroundColor: '#F7931A',
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
<style lang="scss">
.avg-block-size-chart {
  width: 100%;
  height: 40vh;
}
</style>