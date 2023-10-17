import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import { CreateBlogPage, MainPage, BlogPage, EditBlogPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "/blog/:id",
        element: <BlogPage />
      },
      {
        path: "/create",
        element: <CreateBlogPage />
      },
      {
        path: "/blog/:id/edit",
        element: <EditBlogPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
