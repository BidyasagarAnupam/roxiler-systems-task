## Table of Contents
1. [Project's Title](#transaction-dashboard)
2. [Project Description](#project-description)
3. [How to Install and Run the Project](#how-to-install-and-run-the-project)
4. [How to Use the Project](#how-to-use-the-project)
5. [Credits](#credits)
6. [References](#references)

# Transaction Dashboard

This project is a comprehensive transaction management system designed to help users track and analyze their sales data efficiently. It provides detailed statistics, a searchable transaction table, and interactive charts for better insights.

## Project Description

The Transaction Dashboard is built to offer users a seamless experience in managing and analyzing transaction data. It includes features such as searching transactions, viewing monthly statistics, and visualizing price ranges through charts.

Key features include:
- **Transaction Management**: View and search transactions with pagination.
- **Statistics**: Detailed monthly statistics for sales, sold items, and unsold items.
- **Visualization**: Interactive bar charts to visualize price ranges and transaction distributions.

Technologies used:
- **Frontend**: React, Tailwind CSS, ApexCharts
- **Backend**: Node.js, Express, MongoDB
- **UI Components**: NextUI

Challenges faced:
- Implementing efficient search and pagination.
- Creating responsive and interactive charts.
- Ensuring smooth integration between frontend and backend.

Future improvements:
- Adding user authentication.
- Enhancing the filtering options.
- Implementing real-time data updates.

## How to Install and Run the Project

### Prerequisites
- Node.js
- MongoDB

### Installation Steps
1. Clone the repository:
    ```bash
    git [clone https://github.com/yourusername/transaction-dashboard.git](https://github.com/BidyasagarAnupam/roxiler-systems-task)
    cd transaction-dashboard
    ```

2. Install the dependencies in both root and backend directories:
    ```bash
    npm install
    ```

3. Set up the environment variables. Create a `.env` file in the root directory and in backend file and add the following:

    In root directory `.env`

    ```plaintext
    REACT_APP_BASE_URL = http://localhost:4000/api/v1
    ```

    In backend directory `.env`

    ```plaintext
    MONGODB_URL=your_mongodb_connection_string
    PORT=4000
    ```

4. 1st hit the `api` (given below) from Postman with `post` method to initialize the DB
    ```bash
    http://localhost:4000/api/v1/db/intializeDB
    ```

5. Start the backend server:
    ```bash
    npm run dev
    ```

6. Start the frontend development server:
    ```bash
    npm start
    ```
6. Start the backend server and frontend development server concurrently:

    ```bash
    npm run dev
    ```



## How to Use the Project

1. **Search Transactions**: Type keywords in the search bar and press Enter to filter transactions based on the search term.

2. **Select Month**: Use the dropdown menu to select a month and view statistics and transactions for that period.

3. **View Statistics**: Scroll down to view detailed statistics for the selected month.

4. **Visualize Data**: Check out the interactive bar charts for a visual representation of the price ranges and transaction data.

## Credits

### Developer
- **Bidyasagar** - [GitHub](https://github.com/BidyasagarAnupam)

### References
- [NextUI Documentation](https://nextui.org/docs/guide/getting-started)
- [ApexCharts Documentation](https://apexcharts.com/docs/react-charts/)
