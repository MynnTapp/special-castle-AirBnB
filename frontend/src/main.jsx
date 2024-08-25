import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ModalProvider, { Modal } from "./context/Modal";
import { Provider } from "react-redux";
import "./index.css";
import configureStore from "./store";
import { restoreCSRF } from "./store/csrf";

const store = configureStore();

if (import.meta.env.MODE !== "production") {
   restoreCSRF();
}

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ModalProvider>
         <Provider store={store}>
            <App />
            <Modal />
         </Provider>
      </ModalProvider>
   </React.StrictMode>
);
