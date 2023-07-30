const heading = React.createElement("h1", 
{id: "heading" ,xyz: "abc"}, // this are coming as attributes to our h1 tag
"Hello World from React!") // create element takes three args. it's a core thing of react. It will come from first library
//{} in heading , is the object where we'll give attributes to the tag
// first of all react needs a root. Creating a root, render the things comes into dom. It's coming from second library. React-dom.development.js
// ReactElement(object) => HTML (Browser Understands)
const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I'm a h1 tag" ), React.createElement("h1", {}, "I'm a h1 tag" )])) // render nested element

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent)
 console.log(root, heading)