import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"/>
      <Button>Go to checkour</Button>
    </div>
  );
};

export default CartDropdown;
