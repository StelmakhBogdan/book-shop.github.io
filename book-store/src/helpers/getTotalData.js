const  getTotalData = (books) => {
    let totalCount = 0;
    let totalPrice = 0;
    books.forEach(item => {
        totalCount = totalCount + item.count;
        totalPrice = totalPrice + item.total;
    });
    return {
        totalCount,
        totalPrice
    };
};

export default getTotalData;