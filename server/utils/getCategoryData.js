const Product = require('../models/Product');
const { getMonthNumber } = require('./getMonthNumber');

exports.getCategoryData = async (month) => {
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
                _id: '$category', // Group by category field
                count: { $sum: 1 } // Count documents in each category
            }
        },
        {
            $project: {
                category: '$_id', // Rename _id to category for clarity
                count: '$count'
            }
        }
    ];

    try {
        const results = await Product.aggregate(pipeline);
        return results;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching category distribution');
    }
}