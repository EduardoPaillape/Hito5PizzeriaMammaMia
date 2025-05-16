import { formatPrice } from "../utils/format";

const Navbar = ({ onRegisterClick, onLoginClick }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <span className="navbar-brand">🍕 PizzaApp</span>

      <div className="collapse navbar-collapse d-flex justify-content-between w-100">
        <div className="navbar-nav">
          <button className="btn btn-outline-light mx-1">🍕 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-light mx-1">🔓 Profile</button>
              <button className="btn btn-outline-light mx-1">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light mx-1" onClick={onLoginClick}>
                🔐 Login
              </button>
              <button className="btn btn-outline-light mx-1" onClick={onRegisterClick}>
                🔐 Register
              </button>
            </>
          )}
        </div>

        <button className="btn btn-success">
          🛒 Total: ${formatPrice(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



