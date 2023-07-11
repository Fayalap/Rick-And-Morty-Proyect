import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import Title from './components/TitleModule/Title.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider key="1" store={store}>
  <BrowserRouter className='Title'>
    <Routes>
      <Route path='/home' element={<Title></Title>}>
      </Route>
    </Routes>
  <App/>
  </BrowserRouter>
  </Provider>
);
