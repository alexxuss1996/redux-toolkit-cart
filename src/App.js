import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { calculateTotals } from "./store/features/cart/cartSlice";
import { getCartProducts } from "./store/features/cart/cartThunk";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector(({ cart }) => cart);
  const { isOpen } = useSelector(({ modal }) => modal);
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(calculateTotals());
    }

    return () => {
      ignore = true;
    };
  }, [cartItems, dispatch]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(getCartProducts());
    }
    return () => {
      ignore = true;
    };
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CardContainer />
    </main>
  );
}
export default App;
