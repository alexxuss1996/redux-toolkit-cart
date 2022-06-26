import React from "react";
import { useAppSelector } from "../hooks";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { totalItems } = useAppSelector(({ cart }) => cart);
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
