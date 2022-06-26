import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { CartItemType, decreaseAmount, increaseAmount, removeFromCart } from "../store/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CardItem = ({ id, title, img, price, amount }: CartItemType) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="cart-item__info">
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increaseAmount({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            amount === 1 ? dispatch(removeFromCart(id)) : dispatch(decreaseAmount({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CardItem;
