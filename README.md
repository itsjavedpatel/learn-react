# React.createElement("div",{attributes},"children")

- it creates an js object. which is then rendered to html element

# root.render(jsElement);

- root.render => it coverts js object into html element and push it to the browser and it will replaced all the element inside root in index.html file

# JSX

- JSX => created by Facebook.
- JSX => it is not html in javascript but it is html like syntax or XML like syntax.
- write jsx inside parenthesis for multiple lines of code
- JSX also prevents cross-site scripting attacks i.e. XSS attacks

# BABEL

- Babel is a js compiler or transpiler which is installed when we installed parcel.
- Babel => it converts the jsx code to the code that react or js engine will understand.
- So babel is converting JSX into react element.
- JSX => React.createElement-JS object

# React Component

- A React component is a fundamental building block in React applications. It is an independent, reusable piece of code that defines a part of the user interface (UI).
- It is of two types
- 1 Class based components :-It is an old way of creating components by using javascript classes.
- 2 Functional components :-It is a new way of creating components by using js functions which returns some JSX element
- name of the component should start with upercase letter
- Use PascalCase for React components and lowercase for HTML elements

# Rendering react Component

- we render react component using syntax
- root.render( < Component/>)
