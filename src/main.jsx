import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Products from './components/Products.jsx'


createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/products' element={<Products/>} />
            x

        </Routes>
    </Router>
   
)
