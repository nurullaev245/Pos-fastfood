import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <Home /> },
      { path: "sign-in", element: <Signin /> },
      { path: "sign-up", element: <Signup /> },
      { path: "*", element: <div>Not Found</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
