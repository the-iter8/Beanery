import "./App.css";
import React from "react";
import menu from "./data";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Story from "./Components/Story";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useReducer, useState } from "react";

export const CartValue = React.createContext();

function App() {
  const [totalCartValue, setTotalCartValue] = useState(0);
  const reducer = (state, action) => {
    var item = 0;
    switch (action.type) {
      case "ADD":
        item = menu[action.payload - 1];
        setTotalCartValue(totalCartValue + item.price);
        return [...state, item];

      case "REMOVE":
        item = state[action.payload];
        if (state.length !== 1) {
          setTotalCartValue(totalCartValue - item.price);
          const cart = [...state];
          cart.splice(action.payload, 1);
          return [...cart];
        } else {
          setTotalCartValue(0);
          return [];
        }

      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <CartValue.Provider value={{ reducer, dispatch, state, totalCartValue }}>
        <Home></Home>
        <Menu></Menu>
        <Story></Story>
        <Contact></Contact>
        <Footer></Footer>
      </CartValue.Provider>
    </>
  );
}

export default App;
