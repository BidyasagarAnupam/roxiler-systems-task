const { getTransactionStatistics } = require('../utils/getTransactionStatistics');
const { getPriceRangeDistribution } = require('../utils/getPriceRange');
const { getCategoryData } = require('../utils/getCategoryData');
const { getTransactions } = require('../utils/fetchTransactions');


exports.getCombinedData = async (req, res) => {
    const { search, page = 1, perPage = 10, month } = req.body;

    console.log("All data", search, page, perPage, month);

    try {
        if (!month) {
            return res.status(400).json({ message: 'Month is required' });
        }

        const [transactions, statistics, priceRange, categoryData] = await Promise.all([
            getTransactions(search, page, perPage, month),
            getTransactionStatistics(month),
            getPriceRangeDistribution(month),
            getCategoryData(month),

        ]);

        const combinedData = {
            transactions,
            statistics,
            priceRange,
            categoryData,
        };

        res.status(200).json({
            success: true,
            message: 'Combined data fetched successfully',
            data: combinedData,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
