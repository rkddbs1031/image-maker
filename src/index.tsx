import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.scss'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
)
