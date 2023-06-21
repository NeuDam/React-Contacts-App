import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextStateProvider } from './Context/ContextState.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorShow from './routes/ErrorShow.jsx'
import User from './routes/User.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextStateProvider>

      <BrowserRouter>
      
        <Routes>

          <Route path='/React-Contacts-App' element={<App/>} errorElement={<ErrorShow/>} />
          <Route path='user/:id' element={<User/>}/>

        </Routes>
      
      </BrowserRouter>

    </ContextStateProvider>

  </React.StrictMode>,
)
