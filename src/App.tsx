import { Routes, Route } from "react-router-dom";

import "./assets/styles/global.scss";

import PageLayout from "./layouts/PageLayout";
import Home from "./pages/home/Home";

import "./translations";

import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
