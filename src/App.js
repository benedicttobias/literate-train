import React from "react";
import ThemePicker from "./themePicker";
import Store from "./store";
import LocalePicker from "./localePicker";

const App = props => {
  const store = Store;

  return (
    <>
      <ThemePicker store={store} />
      <LocalePicker store={store} />
    </>
  )
}

export default App;