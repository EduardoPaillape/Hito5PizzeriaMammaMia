import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Register from "./components/Register";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar onRegisterClick={() => setShowRegister(!showRegister)} />
      {showRegister ? <Register /> : <Home />}
      <Footer />
    </>
  );
}

export default App;

