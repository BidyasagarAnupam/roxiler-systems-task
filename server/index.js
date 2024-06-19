const express = require("express");
const app = express();

const dotenv = require("dotenv");
const database = require("./config/database");
const cors = require("cors");

const dbRouter = require("./routes/DatabaseInit");
const transactionsRouter = require("./routes/Transactions");
const statisticsRouter = require("./routes/Statistics");
const priceRangeRouter = require("./routes/PriceRange");
const uniqueCategoryRouter = require("./routes/Category");
const combineDataRouter = require("./routes/CombineData");


dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect to the database
database.connect();
//middlewares
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials: true,
    })
)


// Routes
//routes
app.use("/api/v1/db", dbRouter);
app.use("/api/v1/transactions", transactionsRouter);
app.use("/api/v1/statistics", statisticsRouter);
app.use("/api/v1/priceRange", priceRangeRouter);
app.use("/api/v1/category", uniqueCategoryRouter);
app.use("/api/v1/combineData", combineDataRouter);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})