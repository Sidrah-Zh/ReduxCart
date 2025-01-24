import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import configuredStore from "./redux/store";
import "./App.css";

import App from "./App";

const persistor = persistStore(configuredStore);

ReactDOM.render(
  <Provider store={configuredStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
