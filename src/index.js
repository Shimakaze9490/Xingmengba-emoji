import React from "react";
import ReactDOM from "react-dom";  //系统模块，需要react + react-dom


import App from "./App";  //react 模板
import "./index.css";  //样式
import "github-fork-ribbon-css/gh-fork-ribbon.css";  // github fork的样式


// 将最顶层父级组件渲染到页面节点上
ReactDOM.render(<App />, document.getElementById("root"));
console.log("index.js");