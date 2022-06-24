import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { totalItems } = useSelector(({ cart }) => cart);
  return (
    <nav className="nav-center">
      <h3>Product Cart</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{totalItems}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
