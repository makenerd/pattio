import React from "react";
import { RoutesRoot } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Sidebar, Header, Main, Footer } from "./components";
import 'antd/dist/antd.css';
import "./assets/styles/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main>
          <Sidebar/>
          <RoutesRoot />
        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
