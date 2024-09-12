import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", {}, [
  React.createElement("h1", {}, "Hello from React"),
  React.createElement("h2", {}, "Hope you are fine..."),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
