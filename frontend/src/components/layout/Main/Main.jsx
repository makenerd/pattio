import React from "react";
import "./Main.scss";

function Main(props) {
  return (
  <main className="Main">
    <div className='Main__container'>
      {props.children}
    </div>
  </main>);
}

export default Main;
