import React from 'react';
import { connect } from 'react-redux';

import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ( basket ) => {
    const { numItems, totalOrder } = basket;
    console.log(basket);
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
                  {numItems} items (${totalOrder})
              </div>
          </Link>
      </header>
    );
};

const mapStateToProps = ({ shoppingCart: { totalOrder, totalCount } }) => {
    return {
        totalOrder: totalOrder,
        numItems: totalCount
    };
};

export default connect(mapStateToProps)(ShopHeader);