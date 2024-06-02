import { useContext } from "react";
import { Cart } from "../Cart";
import CartProduct from "../components/CartProduct";
import logo from '../assets/images/logo.png';

function Navbar() {
  const cart = useContext(Cart);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response.url);
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'transparent' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Your logo" style={{ width: '100px', height: 'auto' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Catalogo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Carrito ({productsCount})
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
