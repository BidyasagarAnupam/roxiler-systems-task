const Product = require('../models/Product');
const { getMonthNumber } = require('./getMonthNumber');

exports.getTransactionStatistics = async (month) => {
    const monthNum = getMonthNumber(month);

    const pipeline = [
        {
            $addFields: { "month": { $month: '$dateOfSale' } },
        },
        {
            $match: {
                month: monthNum, // Filter by extracted month
            }
        },
        {
            $group: {
                _id: null, // Single group for overall statistics
                totalSales: { $sum: { $cond: [{ $eq: ['$sold', true] }, '$price', 0] } }, // Sum price for sold items
                totalSold: { $sum: { $cond: [{ $eq: ['$sold', true] }, 1, 0] } }, // Count sold items
                totalNotSold: { $sum: { $cond: [{ $eq: ['$sold', false] }, 1, 0] } } // Count not sold items
            }
        }
    ];

    try {
        const results = await Product.aggregate(pipeline);
        const statistics = results[0] || {}; // Access data from first element

        return {
            totalSalesAmount: statistics.totalSales || 0,
            totalSoldItems: statistics.totalSold || 0,
            totalNotSoldItems: statistics.totalNotSold || 0
        };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }

}