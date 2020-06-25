import React from "react";
import ThemePicker from "./containers/themePicker";
import store from "./store";
import LocalePicker from "./containers/localePicker";
import { Provider } from 'react-redux';

const App = props => {

  return (
    <Provider store={store}>
      <ThemePicker />
      <LocalePicker store={store} />
    </Provider>
  )
}

export default App;