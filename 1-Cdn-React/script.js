const heading = React.createElement( //returns react element(which is just a js object) and not a h1 tag
  "h1",
  {         //attributes
    id: "head",
    customAttr: "12345",
  },
  "Hello from React"   //children
);

const root=ReactDOM.createRoot(document.getElementById("root")); //creating the root where all the rendering will take place

root.render(heading); //render function basically transforms the heading object to a h1 tag that dom understands