const Product = require('../models/Product');
const { getMonthNumber } = require('./getMonthNumber');

exports.getPriceRangeDistribution = async (month) => {
    const monthNum = getMonthNumber(month);

    // Define the ranges
    const ranges = [
        { range: '0 - 100', min: 0, max: 100 },
        { range: '101 - 200', min: 101, max: 200 },
        { range: '201 - 300', min: 201, max: 300 },
        { range: '301 - 400', min: 301, max: 400 },
        { range: '401 - 500', min: 401, max: 500 },
        { range: '501 - 600', min: 501, max: 600 },
        { range: '601 - 700', min: 601, max: 700 },
        { range: '701 - 800', min: 701, max: 800 },
        { range: '801 - 900', min: 801, max: 900 },
        { range: '901 - above', min: 901, max: Infinity }
    ];

    try {
        // Fetch all products sold in the specified month
        const products = await Product.find({
            $expr: { $eq: [{ $month: '$dateOfSale' }, monthNum] }
        });

        // Initialize the result map
        const rangeCounts = ranges.map(range => ({ ...range, count: 0 }));

        // Count the products in each range
        products.forEach(product => {
            const price = product.price;
            const range = rangeCounts.find(r => price >= r.min && price <= r.max);
            if (range) {
                range.count++;
            }
        });

        // Convert the result map to the desired format
        const distribution = rangeCounts.map(({ range, count }) => ({ range, count }));

        return distribution;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching price range distribution');
    }
};
