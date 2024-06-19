const { getCategoryData } = require('../utils/getCategoryData');


exports.getUniqueCategory = async (req, res) => {
    const { month } = req.body;
    try {
        if (!month) return res.status(400).json({ message: 'Month is required' })
        const uniqueCategory = await getCategoryData(month)
        res.status(200).json({
            success: true,
            message: 'Category data fetched successfully',
            data: uniqueCategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}