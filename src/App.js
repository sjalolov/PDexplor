import React from "react";
import "./App.css";
import Navbar from "./componentspdex/Navbar/Navbar.js";
import Scroll from "./componentspdex/ScrollUp/ScrollUp.js";
import Footer from "./componentspdex/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      <Scroll/>
    </div>
  );
}

export default App;
