import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// IMPORTS
import '@google/model-viewer'

// COMPONENTS
import App from './App.tsx'
import { Viewer3D } from '~/views/Viewer3D/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view" element={<Viewer3D />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
