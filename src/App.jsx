import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar /> {/* Componente común a todas las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </Router>
  );
  
}
export default App;



