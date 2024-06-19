const { getTransactionStatistics } = require('../utils/getTransactionStatistics');

exports.getStatistics = async (req, res) => {
    const { month } = req.body;
    console.log("month", req);
    try {
        if(!month) return res.status(400).json({ message: 'Month is required' })
        const statistics = await getTransactionStatistics(month)
        res.status(200).json({
            success: true,
            message: 'Transaction\'s statistics fetched successfully',
            data: statistics
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}