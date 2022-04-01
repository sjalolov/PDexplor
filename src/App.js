import React from "react";
import "./App.css";
// import Navbar from "./componentspdex/Navbar/Navbar.js";
import Scroll from "./componentspdex/ScrollUp/ScrollUp.js";
import Footer from "./componentspdex/Footer/Footer.js";
import Explore from "./componentspdex/Explore/Explore.js";
import QuickLinks from "./componentspdex/QuickLinks/QuickLinks.js";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <QuickLinks/>
      <Explore/>
      <Footer/>
      <Scroll/>
    </div>
  );
}

export default App;
