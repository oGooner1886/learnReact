import store from "./redux/state";
// import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));


export const rerenderPage = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
        />
    </React.StrictMode>
  );
};
rerenderPage(store.getState())
store.subscribe(rerenderPage)

// reportWebVitals();
