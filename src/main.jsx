import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/App";
import './index.css';
import Promo from './routes/Promo';
import Chat from './routes/Chat';
import Pesanan from './routes/Pesanan';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Promo",
    element: <Promo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Pesanan",
    element: <Pesanan />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Chat",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
