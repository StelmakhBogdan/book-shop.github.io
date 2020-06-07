import React from 'react';

import './home-page.css';
import ShoppingCartTable from '../../shopping-cart-table/shopping-cart-table';
import { BookLIstContainer } from '../../../containers';

const HomePage = () => {
    return (
        <div>
            <BookLIstContainer />
            <ShoppingCartTable />
        </div>
    )
};

export default HomePage;