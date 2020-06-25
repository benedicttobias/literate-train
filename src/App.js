import React from "react";
import ThemePicker from "./themePicker";
import Store from "./store";

const App = props => {
  const store = Store;

  return <ThemePicker store={store}/>;
}

export default App;