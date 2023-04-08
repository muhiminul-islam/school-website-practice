import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Classes from './components/Classes/Classes'
import Teachers from './components/Teachers/Teachers'
import Blog from './components/Blog/Blog'
import Contacts from './components/Contacts/Contacts'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'header',
        element: <Header></Header>
      },
      {
        path: 'navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'teachers',
        element: <Teachers></Teachers>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'contacts',
        element: <Contacts></Contacts>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
