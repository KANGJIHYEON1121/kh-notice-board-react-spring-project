import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import root from "./router/root";
import Header from "./include/Header";
import Footer from "./include/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <RouterProvider router={root} />
      </div>
    </>
  );
};

export default App;
