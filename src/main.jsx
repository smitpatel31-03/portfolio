import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import {Home,AboutMe,MyWork} from './Pages/index.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about-me",
        element:<AboutMe />
      },
      {
        path:"/my-work",
        element:<MyWork />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
