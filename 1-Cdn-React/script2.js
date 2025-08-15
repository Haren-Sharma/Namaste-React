//nested structure using react
const para1 = React.createElement(
  "p",
  { class: "paragraph" },
  "This a sample paragraph 1"
);
const para2 = React.createElement(
  "p",
  { class: "paragraph" },
  "This a sample paragraph 2"
);
const sub_head1 = React.createElement(
  "h2",
  { class: "subhead" },
  "Sub Heading 1"
);
const sub_head2 = React.createElement(
  "h2",
  { class: "subhead" },
  "Sub Heading 2"
);
const sub_div1 = React.createElement("div", { class: "subdiv" }, [
  sub_head1,
  para1,
]);
const sub_div2 = React.createElement("div", { class: "subdiv" }, [
  sub_head2,
  para2,
]);
const heading = React.createElement("h1", { id: "heading" }, "Main Head");
const mainDiv = React.createElement("div", { id: "maindiv" }, [
  heading,
  sub_div1,
  sub_div2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainDiv);
