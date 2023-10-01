import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Main from './layout/Main/Main.jsx';
import Post from './component/Page/Post.jsx';
import ProductDetails from './component/Page/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>Error page</h1>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addPost',
        element: <Post></Post>
      },
      {
        path: "/post/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/allPost/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
