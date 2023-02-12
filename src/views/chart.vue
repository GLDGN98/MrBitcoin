<template>
    <div class="charts">
        <MarketPriceChart />
        <AvgBlockSize />
    </div>
</template>

<script>

import MarketPriceChart from './charts/market-price.vue'
import AvgBlockSize from './charts/avg-block-size.vue'

export default {
    components: {
        MarketPriceChart,
        AvgBlockSize
    }

}
</script>

<style lang="scss">
.charts {
    display: flex;
    flex-direction: column;
    gap: 2em;
    height: 90vh;
}
</style>