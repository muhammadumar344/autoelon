import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { CardContextProvider } from './assets/context/cars.jsx'
import { CategoryContextProvider } from './assets/context/category.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <CardContextProvider>
        <CategoryContextProvider>
    <App />
        </CategoryContextProvider>
      </CardContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
