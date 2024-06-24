import React from 'react'

// Styles
import './App.css'

// Router
import { RouterProvider } from 'react-router-dom'

import router from './router/Routes'

function App (): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
