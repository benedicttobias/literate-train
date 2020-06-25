import React from "react";
import ThemePicker from "./themePicker";
import Store from "./store";
import LocalePicker from "./localePicker";
import { Provider } from 'react-redux';

const App = props => {
  const store = Store;

  return (
    <Provider store={store}>
      <ThemePicker />
      <LocalePicker store={store} />
    </Provider>
  )
}

export default App;