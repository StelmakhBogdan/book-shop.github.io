import updateBookList from './book-list';
import updateShoppingCart  from "./shopping-cart";
// import updateBasket from './basket';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        // basket: updateBasket(state, action)
    }
};

export default reducer;