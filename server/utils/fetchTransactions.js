const Product = require('../models/Product');
const { getMonthNumber } = require('./getMonthNumber');

exports.getTransactions = async (search, page = 1, perPage = 10, month) => {
    const pipeline = [];
    console.log("search", search);
    // Add search filter if search is provided
    if (search) {
        // Check if search is numeric and add price filter if applicable
        if (!isNaN(search)) {
            console.log("AA raha hai");
            pipeline.push({
                $match: {
                    price: { $eq: parseFloat(search) },
                },
            });
        } else {
            pipeline.push({
                $match: {
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { description: { $regex: search, $options: 'i' } },
                    ],
                },
            });
        }

    }

    // Add month filter if month is provided
    if (month) {
        const monthNum = getMonthNumber(month);

        pipeline.push({
            $addFields: { "month": { $month: '$dateOfSale' } },
        });

        pipeline.push({
            $match: {
                month: monthNum, // Filter by extracted month
            }
        })
    }

    // Add pagination stage to the pipeline
    pipeline.push({
        $facet: {
            data: [ // Get paginated results
                { $skip: (page - 1) * perPage },
                { $limit: perPage }
            ],
            total: [ // Count all documents matching filters (without pagination)
                { $count: 'totalCount' } // Use alias 'totalCount'
            ]
        }
    });


    try {
        const products = await Product.aggregate(pipeline);
        // const totalProducts = await Product.countDocuments(pipeline);// Separate count for efficiency
        const totalProducts = products[0]?.total[0]?.totalCount;
        console.log("Products", products);
        return {
            data: products,
            total: totalProducts,
            page,
            perPage
        };
    } catch (error) {
        console.error(error);
        throw new Error(error.message); // Re-throw for error handling
    }
}
