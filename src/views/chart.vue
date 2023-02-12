<template>
    <div>
        <Bar v-if="chartData" id="market-price-chart" :options="chartOptions" :data="chartData" />
        <Bar v-if="avgBlockSizeData" id="avg-block-size-chart" :options="avgBlockSizeOptions"
            :data="avgBlockSizeData" />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { bitcoinService } from '../services/bitcoin-service'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true
      },
      avgBlockSizeData: [],
      avgBlockSizeOptions: {
        responsive: true
      }
    }
  },
  async created() {
    const marketPriceData = await bitcoinService.getMarketPriceHistory()
    const avgBlockSizeData = await bitcoinService.getAvgBlockSize()

    console.log(marketPriceData)
    console.log(avgBlockSizeData);

    this.chartData.labels = marketPriceData?.map(item => item.date.toLocaleDateString())
    this.chartData.datasets[0].data = marketPriceData?.map(item => item.marketPrice)

    this.avgBlockSizeData = avgBlockSizeData?.map(item => ({
      date: item.date.toLocaleDateString(),
      avgBlockSize: item.avgBlockSize
    }))
  }
}
</script>