import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './redux/store';

const { store, persistor } = data;

ReactDOM.render(
  <React.StrictMode>
    {/* // to keep data in redux store */}
    <Provider store={store}>
      {/* // to keep data in local storage */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
