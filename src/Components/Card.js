import React, { useContext, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { CartValue } from "../App";

export default function Card(props) {
  const [toggleSucess, setToggleSucess] = useState(false);
  const { dispatch } = useContext(CartValue);
  const { id, title, price, img, desc } = props;

  const addToCartHandle = (id) => {
    dispatch({ type: "ADD", payload: id });

    setToggleSucess(true);
    setTimeout(() => {
      setToggleSucess(false);
    }, 800);
  };
  return (
    <div className="col card mCard">
      {toggleSucess && (
        <div className="alert alert-success addedToCart" role="alert">
          Added to the Cart
        </div>
      )}

      <img src={img} className="card-img-top mImg" alt="..." />
      <div className="card-body mCardBody">
        <div className="mTitle">
          <h5 className="card-title mName">{title}</h5>
          <h5 className="mPrice">${price}</h5>
        </div>

        <p className="card-text mInfo">
          {desc}
          <button
            className="mTooltip"
            onClick={() => {
              addToCartHandle(id);
            }}
          >
            <IoAddCircleOutline size={30} />
          </button>
          {/* display only if the all option is there */}
        </p>
      </div>
    </div>
  );
}
