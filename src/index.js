import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./App";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyATaumbL3sKCgwRc_U1tn5scgLbL698aSw",
  authDomain: "netflix-george.firebaseapp.com",
  databaseURL: "https://netflix-george.firebaseio.com",
  projectId: "netflix-george",
  storageBucket: "netflix-george.appspot.com",
  messagingSenderId: "444719372212",
  appId: "1:444719372212:web:ba7fefda212bc739f944e1",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
