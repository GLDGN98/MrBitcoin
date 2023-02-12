import axios from "axios"

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate(currency = "USD", value) {
  const bitcoinRate = await axios.get(
    `https://blockchain.info/tobtc?currency=${currency}&value=${value}`
  )
  return bitcoinRate.data
}

async function getMarketPriceHistory() {
  try {
    const response = await axios.get(
      "https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true"
    )
    return response.data.values.map((item) => {
      return {
        date: new Date(item.x * 1000),
        marketPrice: item.y,
      }
    })
  } catch (error) {
    console.error(error)
    return []
  }
}

async function getAvgBlockSize() {
  const response = await axios.get(
    "https://api.blockchain.info/charts/avg-block-size?timespan=2months&format=json&cors=true"
  )
  return response?.data?.values?.map((obj) => ({
    date: new Date(obj.x * 1000),
    avgBlockSize: obj.y,
  }))
}
