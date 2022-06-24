import { useDispatch, useSelector } from "react-redux";

import { openModal } from "../store/features/modal/modalSlice";
import CardItem from "./CardItem";

const CardContainer = () => {
  const { cartItems, totalPrice, totalItems } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  if (totalItems < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            {" "}
            Total: <span>${totalPrice.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CardContainer;
