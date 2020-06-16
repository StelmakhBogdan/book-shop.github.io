const  getTotalData = (books) => {
    let totalBooksCount = 0;
    let totalPriceForOrder = 0;
    books.forEach(item => {
        totalBooksCount = totalBooksCount + item.count;
        totalPriceForOrder = totalPriceForOrder + item.count*item.price;
    });
    return {
        totalBooksCount,
        totalPriceForOrder
    };
};

export default getTotalData;