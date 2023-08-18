import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Products from './components/Products/Products';
import Navbar from './components/navbar/Navbar';
import Login from './components/Auth/Login/Login'
import Register from'./components/Auth/register/Register'

function App() {
  return  (
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Products />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />


    
  </Routes>
</Router>
  )
}

export default App;
