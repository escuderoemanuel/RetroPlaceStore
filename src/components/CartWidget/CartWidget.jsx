import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

const CartWidget = ({ cantCarrito }) => {
  const { getItemQuantity } = useCarritoContext();
  return (
    <>
      <Link className="nav-link" to={"/cart"}>
        <button className="btnCart btn btn.dark">
          <i className="cartIcon fa-solid fa-cart-shopping"></i>
          {getItemQuantity() > 0 && (
            <span className="numberCart">{getItemQuantity()}</span>
          )}
        </button>
      </Link>
    </>
  );
};

export default CartWidget;
