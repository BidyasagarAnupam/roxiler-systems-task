const { getTransactions } = require('../utils/fetchTransactions');

exports.allTransaction = async (req, res) => { 
    const { search, page = 1, perPage = 10, month } = req.body;
    try {
        const transactions = await getTransactions(search, page, perPage, month);
        res.status(200).json({
            success: true,
            message: 'Transactions fetched successfully',
            data: transactions
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}