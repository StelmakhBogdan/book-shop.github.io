import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './shop-header.css';
import getTotalData from '../../helpers/getTotalData';

const ShopHeader = ( {items} ) => {

    // Another Method totalPrice and totalCount
    // const arrCount = Array.from(items, ({count}) => count);
    // const arrTotalBookPrice = Array.from(items, ({total}) => total);
    //
    // const getSumCount = arrCount.reduce(function (accumulator, currentValue) {
    //     return accumulator + currentValue;
    // }, 0);
    // const getSumTotal = arrTotalBookPrice.reduce(function (accumulator, currentValue) {
    //     return accumulator + currentValue;
    // }, 0);

    return (
      <header className="shop-header row bg-light">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                  <div className="logo text-dark" href="#">Restore</div>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <Link className="nav-link" to="/">
                          <div className="nav-item active text-dark" href="#">Home</div>
                      </Link>
                      <Link className="nav-link" to="/about">
                          <div className="nav-item active text-dark" href="#">About</div>
                      </Link>
                  </ul>
              </div>
          </nav>
          <Link className="mt-3" to="/cart">
              <div className="shopping-cart mr-3">
              <i className="cart-icon fa fa-shopping-cart" />
                  {getTotalData(items).totalCount} items ({getTotalData(items).totalPrice}$)
              </div>
          </Link>
      </header>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
    return {
        items: cartItems
    };
};

export default connect(mapStateToProps)(ShopHeader);