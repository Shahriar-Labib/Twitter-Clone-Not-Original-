import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Components/Store/store'
import { GoogleOAuthProvider } from '@react-oauth/google'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider>
              <App />
      </GoogleOAuthProvider>
      
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
