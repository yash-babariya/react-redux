import React from 'react'
import './styles/main.scss'
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
