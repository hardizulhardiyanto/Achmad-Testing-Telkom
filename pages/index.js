import {Provider} from "react-redux";
import {store} from "../redux";
import HomeComponent from "../component/homeComponent";
import React from "react";

export default function Home() {
  return (
      <Provider store={store}>
         <HomeComponent />
      </Provider>
  );
}
