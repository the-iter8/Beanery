import React, { useContext } from "react";
import { CartValue } from "../App";
import { AiOutlineDelete } from "react-icons/ai";

export default function ShoppingCart() {
  const { dispatch, state, totalCartValue } = useContext(CartValue);

  return (
    <div className="cartContainer">
      <h4 className="mainHeading">Shopping Cart</h4>
      {/* Put a map here. */}

      <div className="itemList">
        {state.map((item, index) => {
          const { id, title, price } = item;

          return (
            <div className="cartItem" key={id}>
              <div className="cartItemDetails btnCommonDesign">
                <p className="itemName">{title}</p>

                <button
                  className="deleteCartItem"
                  onClick={() => {
                    dispatch({ type: "REMOVE", payload: index });
                  }}
                >
                  <AiOutlineDelete size={18} />
                </button>
              </div>

              <span className="cartItemPrice">${price}</span>
            </div>
          );
        })}
      </div>

      <div className="totalDiv">
        <h5>Total:</h5>
        <p>${totalCartValue}</p>
      </div>

      <button className="checkoutBtn btnCommonDesign">Checkout</button>
    </div>
  );
}
