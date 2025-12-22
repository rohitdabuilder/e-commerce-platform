import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddtoCart() {
  const cartselector = useSelector((state) => state.cart.items);
  console.log(cartselector.length);

  return (
    <div>
      <Link to="/cart">
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-count">
            {cartselector.length ? cartselector.length : 0}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default AddtoCart;
