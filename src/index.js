import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import App from './App';
import MyTop from './MyTop';
import MyArticle from './MyArticle';
import NotFound from './NotFound';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MyTop />} />
      <Route path="article/:id" element={<MyArticle />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
