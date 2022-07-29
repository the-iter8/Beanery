import React from "react";
import { useState, useContext } from "react";
import ShoppingCart from "./ShoppingCart";
import { CartValue } from "../App";
import {
  RiFacebookBoxLine,
  RiTwitterLine,
  RiInstagramLine,
  RiFocusLine,
} from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Home() {
  const { state } = useContext(CartValue);
  const [cartToggle, setCartToggle] = useState(false);

  return (
    <>
      <div className="rNavbar navbar" id="top">
        <img src="./images/REST.png" alt="" className="rImg" />
        <div className="rNBtnContainer">
          <a href="#top" className="rNavLinks">
            HOME
          </a>
          <a href="#menu" className="rNavLinks">
            MENU
          </a>
          <a href="#story" className="rNavLinks">
            OUR STORY
          </a>
          <a href="#contact" className="rNavLinks">
            CONTACT
          </a>
        </div>
        <button className="rSignUp btnCommonDesign">SIGN UP</button>

        <button
          className="cartIcon"
          onClick={() => {
            setCartToggle(!cartToggle);
          }}
        >
          <AiOutlineShoppingCart size={30} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {state.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>

      {cartToggle && <ShoppingCart />}

      <div className="rContainer container">
        <div className="rSidePanels">
          <a href="http://">
            <RiFacebookBoxLine size={25}></RiFacebookBoxLine>
          </a>
          <a href="http://">
            <RiTwitterLine size={25}></RiTwitterLine>
          </a>
          <a href="http://">
            <RiInstagramLine size={25}></RiInstagramLine>
          </a>
        </div>
        <div className="rLandingPage">
          <div className="imgDiv landingPageL">
            <img src="./images/dish.png" alt="" />
          </div>
          <div className="landingPageR">
            <div className="rMainHeading">
              <p>
                Lorem ipsum if cattu sit doggu sit doggu angii cattu make doggu
                happy, quae?
              </p>
            </div>
            <div className="rBtnDiv">
              <button
                onClick={() => {
                  document.getElementById("menu").scrollIntoView();
                }}
                className="functionalBtn btnCommonDesign"
                style={{ backgroundColor: "#c4664463" }}
              >
                Order now
              </button>
              <button className="functionalBtn btnCommonDesign">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="rSidePanels">
          <RiFocusLine size="1.5em"></RiFocusLine>
          <RiFocusLine size="1.5em"></RiFocusLine>
        </div>
      </div>
    </>
  );
}
