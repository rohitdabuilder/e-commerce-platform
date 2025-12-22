import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddtoCart from "./AddtoCart";
import { addItem,removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  const cartselector = useSelector((state) => state.cart.items);
  console.log(cartselector.length);

  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>
              {cartselector.find
                ((cartItem) => cartItem.id === item.id) ? (
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="add-btn remove-btn"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="add-btn clear-cart"
                  >
                    Add To Cart
                  </button>
                )
              }
             
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
