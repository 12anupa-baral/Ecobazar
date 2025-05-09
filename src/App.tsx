
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/user/Register'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/home/Home'
import Login from './pages/user/Login'
import Product from './pages/product/Product'
import SingleProduct from './pages/single-product/SingleProduct'
import Cart from "./pages/cart/Cart";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import MainLayout from "./globals/components/MainLayout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
