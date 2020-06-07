import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart } from '../../redux/actions';


const ShoppingCartTable = ({ items, onIncrease, onDecrease, onDelete, totalOrder }) => {

    const renderRow = (item, idx) => {
        const { id, title, total, count } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    };

    const  getTotalData = (book) => {
        let totalCount = 0;
        let totalPrice = 0;
        totalCount = totalCount + book.count;
        totalPrice = totalPrice + book.count*book.price;
        return (
            <div className="total" >
                <h1>{totalCount}</h1>
                <h1>{totalPrice}$</h1>
            </div>
        )

    };

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th className="text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                { items.map(renderRow) }
                </tbody>
            </table>
            <div className="total">
                { items.forEach(getTotalData) }
                {/*Total: {totalOrder}$*/}
            </div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, totalPriceForOrder} }) => {
    return {
        items: cartItems,
        totalOrder: totalPriceForOrder
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);