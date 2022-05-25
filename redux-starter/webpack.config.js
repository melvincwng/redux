const path = require("path");

// webpack is going to the entry point first, and from there grab ALL our JS files, and then combine them into a file called app.js which resides in "dist" (distributable folder)
// devServer: this is a config to tell webpack to grab files from "dist" folder than host it on localhost:9000
// change entry point to "./src/5a_currying.js" to run the example in that file
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  mode: "development",
};
