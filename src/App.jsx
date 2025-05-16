import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(!showRegister);
    setShowLogin(false); // Asegura que no se muestren ambos
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowRegister(false); // Asegura que no se muestren ambos
  };

  return (
    <>
      <Navbar onRegisterClick={handleRegisterClick} onLoginClick={handleLoginClick} />
      
      {showRegister ? (
        <Register />
      ) : showLogin ? (
        <Login />
      ) : (
        <Home />
      )}

      <Footer />
    </>
  );
}

export default App;


