const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello from App.js"
);
console.log(heading);
// it will return an object so basically React.createElement creates an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// root.render is responsible to convert the heading object into the h1 tag and put it into the DOM
