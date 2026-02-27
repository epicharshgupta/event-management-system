import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import UserDashboard from "./pages/UserDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import GuestList from "./pages/GuestList";
import OrderStatus from "./pages/OrderStatus";

function App() {

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/vendor" element={<VendorDashboard />} />

        <Route path="/user" element={<UserDashboard />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/guests" element={<GuestList />} />

        <Route path="/orders" element={<OrderStatus />} />

      </Routes>

    </Router>
  );

}

export default App;