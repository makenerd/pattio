import React from "react";
import "./main.scss";

function Main(props) {
  return <main className="main">{props.children}</main>;
}

export { Main };
