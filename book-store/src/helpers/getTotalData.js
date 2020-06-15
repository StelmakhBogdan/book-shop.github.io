// const  getTotalData = (list) => {
//     let totalCount = 0;
//     let totalPrice = 0;
//     list.forEach(item => {
//         totalCount = totalCount + item.count;
//         totalPrice = totalPrice + item.count*item.price;
//     });
//     return {
//         totalCount,
//         totalPrice
//     };
// };
//
// const myArr = [
//     {
//         id: 1,
//         count: 0,
//         price: 30,
//     },
//     {
//         id: 2,
//         count: 0,
//         price: 65
//     },
//     {
//         id: 3,
//         count: 0,
//         price: 50
//     },
//     {
//         id: 4,
//         count: 0,
//         price: 100
//     }
//     ];
//
// const totalData = getTotalData(myArr);
// console.log(totalData);
// export default getTotalData;

export const getTotalBasketCount = state => state.books.length;