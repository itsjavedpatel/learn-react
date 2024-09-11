// We have to form this type of the skeleton
/* <div id="parent">
       <div id="child">
          <h1>
          </h1>
        </div>
    </div> */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello, this is h1"),
    React.createElement("h2", {}, "Hello, this is h2"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
