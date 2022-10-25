import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

function App() {
  const item = useSelector((state) => state.cart);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/home"}>
                My Shop
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/cart"}>
                  Cart
                </Nav.Link>
              </Nav>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>cart {item.length}</Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shoppingcart-rtk" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
