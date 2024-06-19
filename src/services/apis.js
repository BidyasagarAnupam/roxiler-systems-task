const BASE_URL = process.env.REACT_APP_BASE_URL

// TRANSACTIONS ENDPOINTS
export const transactionEndpoints = {
  TRANSACTIONS_API: BASE_URL + "/transactions/get-transaction",
}

// statistics ENDPOINTS
export const statisticEndpoints = {
  STATISTICS_API: BASE_URL + "/statistics/get-transaction-statistics",
}

// priceRange ENDPOINTS
export const priceRangeEndpoints = {
  PRICE_RANGE_API: BASE_URL + "/priceRange/get-priceRange",
}

// Combine END points
export const combinedEndpoints = {
  COMBINED_API: BASE_URL + "/combineData/get-combine-data",
}


