// import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import store from './redux/store';
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderPage = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
        />
      </Provider>
    </React.StrictMode>
  );
};
// rerenderPage(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderPage(state);
// });
rerenderPage()
store.subscribe(() => {
  rerenderPage()
})


// reportWebVitals();
