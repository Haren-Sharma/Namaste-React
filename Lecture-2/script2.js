import React from "react";
import ReactDOM from "react-dom/client";

//nested structure using react

const sub_div1 = React.createElement("div", { className: "subdiv", key: "subdiv1" }, [
  React.createElement("h2", { className: "subhead", key: "subhead1" }, "Sub Heading 1"),
  React.createElement("p", { className: "paragraph", key: "para1" }, "This is a sample paragraph 1"),
]);

const sub_div2 = React.createElement("div", { className: "subdiv", key: "subdiv2" }, [
  React.createElement("h2", { className: "subhead", key: "subhead2" }, "Sub Heading 2"),
  React.createElement("p", { className: "paragraph", key: "para2" }, "This is a sample paragraph 2"),
]);

const heading = React.createElement("h1", { id: "heading", key: "heading" }, "Main Head");

const mainDiv = React.createElement("div", { id: "maindiv" }, [
  heading,
  sub_div1,
  sub_div2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainDiv);
