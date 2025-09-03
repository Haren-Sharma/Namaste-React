module.exports = {
  presets: [
    // Transpiles modern JS (ES6+) down to code that Node (Jest) can run
    ["@babel/preset-env", { targets: { node: "current" } }],

    // Transforms JSX into React.createElement calls (or the new JSX runtime)
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
