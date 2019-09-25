import React from "react";
import { RoutesRoot } from "./routes";
import { Header, Main, Footer } from "./components";
import 'antd/dist/antd.css';
import "./assets/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <RoutesRoot />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
