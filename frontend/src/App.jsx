import React from "react";
import { RoutesRoot } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Sidebar, Header, Main, Footer, Menu } from "./components/layout";
import 'antd/dist/antd.css';
import "./assets/styles/main.scss";
import { Provider } from 'react-redux';
import { store } from './redux/redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          {/* <HeaderNeon /> */}
          <Menu/>
          {/* <Sidebar/> */}
          <Main>
            <RoutesRoot />
          </Main>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
