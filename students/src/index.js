import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './Context/AppProvider.js';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LogInReducers from './Reducers/LogInReducers';
import signupReducer from './Reducers/signupReducer';



const store = configureStore({
    reducer :{
        loginInfo : LogInReducers ,
        signupInfo : signupReducer , 
        
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
    <BrowserRouter>
    <Provider store={store}>
    <AppProvider>
    <App/>
    </AppProvider>
    </Provider>
    </BrowserRouter>

  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




