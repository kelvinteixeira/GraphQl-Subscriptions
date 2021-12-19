import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { RoutesPages } from "./routes";

export function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <RoutesPages />
    </BrowserRouter>
  );
}
