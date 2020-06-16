// import * as R from 'ramda';
// import {
//     ADD_BOOK_TO_BASKET,
//     REMOVE_BOOK_FROM_BASKET,
//     CLEAN_BASKET
// } from '../action-types';
//
// const initialState = [];
//
// const updateBasket = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case ADD_BOOK_TO_BASKET:
//             return R.append(payload, state); //same push in js
//         case REMOVE_BOOK_FROM_BASKET:
//             return R.without(R.of(payload), state); // R.of(payload) same [payload]
//         case CLEAN_BASKET:
//             return initialState; // or [] but if we change initialState we got error!
//         default:
//             return state;
//     }
// };
//
// export default updateBasket;