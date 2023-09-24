import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.linkedin.com/in/lakshay-aggarwal-8a503120b/" target="blank">
         Lakshay Aggarwal
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
