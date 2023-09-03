/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Counter from './src/component/Content';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';




function App(): JSX.Element {
  return (
    <Provider store={store}>
       <Counter />
    </Provider>
  );
}


export default App;
