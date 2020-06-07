import React from 'react';

import ShoppingCartTable from '../../shopping-cart-table/shopping-cart-table';
import './cart-page.css';

const CartPage = () => {
    return (
        <div>
            <h1>CartPage</h1>
            <h2>Thank you for shopping! </h2>
            <ShoppingCartTable />
        </div>
    )
};

export default CartPage;