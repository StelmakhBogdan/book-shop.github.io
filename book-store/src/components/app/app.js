import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import About from "../pages/about";
import ShopFooter from "../shop-footer";

const App = () =>  {

    return (
        <main role="main" className="container">
            <ShopHeader />
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact/>

                <Route
                    path='/cart'
                    component={CartPage}/>

                <Route
                    path='/about'
                    component={About}/>

            </Switch>

            <ShopFooter/>
        </main>
    )

};

export default App;