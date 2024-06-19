exports.getMonthNumber = (month) => {
    // Validate month (optional)
    const validMonths = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    if (!validMonths.includes(month)) {
        throw new Error('Invalid month provided'); // Handle invalid month
    }

    // Create a month map for readability
    const monthMap = {
        'January': 1,
        'February': 2,
        'March': 3,
        'April': 4,
        'May': 5,
        'June': 6,
        'July': 7,
        'August': 8,
        'September': 9,
        'October': 10,
        'November': 11,
        'December': 12
    };

    // Return the month number from the map
    return monthMap[month];
}