import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './component/Main';
import Home from './Home/index.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './About/index.js'
import Contact from './Contact/index.js'
import Service from './Services/index.js'
import Login from './Login/login.js';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Home />
//   },
//   {
//     path:"sobre",
//     element:<About />
//   }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
    children: [
      {
        path:'/home',
        element: <Home />
      },
      {
        path:'sobre',
        element: <About />
      },
      {
        path:'contato',
        element: <Contact />
      },
      {
        path:'servico',
        element: <Service />
      },
      {
        path:'login',
        element:<Login />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
