const { getPriceRangeDistribution } = require('../utils/getPriceRange');

exports.getPriceRangeDistribution = async (req, res) => {
    const { month } = req.body;
    try {
        if (!month) return res.status(400).json({ message: 'Month is required' })
        const statistics = await getPriceRangeDistribution(month)
        
        res.status(200).json({
            success: true,
            message: 'Price range fetched successfully',
            data: statistics
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}