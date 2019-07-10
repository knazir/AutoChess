import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

/* Google Analytics */
window.dataLayer = window.dataLayer || [];
function gtag(){
  window.dataLayer.push(arguments);
}
try {
  gtag("js", new Date());
  gtag("config", "UA-143604066-1");
} catch (e) {
  console.log(`Analytics disabled: ${e.message}`);
}
