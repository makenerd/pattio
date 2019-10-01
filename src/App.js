import React from "react";
import { RoutesRoot } from "./routes";
import { HashRouter as Router} from "react-router-dom";
import { Header, Main, Footer } from "./components";
import 'antd/dist/antd.css';
import "./assets/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <RoutesRoot />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
