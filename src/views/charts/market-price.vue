<template>
    <div class="market-price-chart">
        <Bar v-if="chartData.labels" id="market-price-chart" :options="chartOptions" :data="chartData" />
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
                 label: 'Market Price (USD)'
                 }
        ]
      },
      chartOptions: {
        responsive: true
      },
    }
  },
  async created() {
    const marketPriceData = await bitcoinService.getMarketPriceHistory()
    this.chartData.labels = marketPriceData?.map(item => item.date.toLocaleDateString())
    this.chartData.datasets[0].data = marketPriceData?.map(item => item.marketPrice)
  }
}
</script>


<style lang="scss">
.market-price-chart {
    width: 100%;
    height: 45vh;
    margin: auto;


}
</style>