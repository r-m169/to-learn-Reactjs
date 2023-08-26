import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Products from './components/Products/Products';
import Navbar from './components/navbar/Navbar';
import Login from './components/Auth/Login/Login'
import Register from'./components/Auth/register/Register'
import Details from './components/details/Details';
import Contact from './components/contact/contact';
import AboutUs from './components/about/About';
import Footer from './components/footer/Footer';
import UserInfoComponent from './components/userinfo/UserInfo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productId" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/info" element={<UserInfoComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
