import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPageDesc from './pages/TaskPageDesc.jsx'

const router = createBrowserRouter([ // Define your routes here
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/task-desc',
    element: <TaskPageDesc />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* Use RouterProvider to provide the router to your app */}
    <RouterProvider router={router} />
  </StrictMode>,
)
