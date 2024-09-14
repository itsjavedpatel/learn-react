import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "container" }, [
  React.createElement("h1", {}, "Hello from React"),
  React.createElement("h2", {}, "Hope you are fine..."),
]);

//? JSX => React.createElement-JS object => HTMLElement(render)
//! React element
const jsxHeading = (
  <div id="container">
    <h1>⭐⭐Hello Developer⭐⭐</h1>
    <h2>You are welcomed here</h2>
  </div>
);
console.log(jsxHeading);
// this is not valid pure js as js engine can't read this code. so in this case parcel's babel is doing this job for us.
// This jsx code is transpiled(coverted) before it goes to js engine .hence js engine receives the code that is understand by the browser.

//! React Component

//? Functional component
const Title = function () {
  return <h1>⭐⭐React Components⭐⭐</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title /> {/* this is component composition */}
      <h1>Hello Developer, this is heading Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
