import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  const [role, setrole] = React.useState<String | null>("");
  const [token, setToken] = React.useState<String | null>("");
  console.log("token", token, !token, role);

  const Signout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    if (role) {
      setrole(role);
      setToken(token);
    }
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">User-Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>

              {role === "Superuser" && (
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Task</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Member</NavDropdown.Item>
                </NavDropdown>
              )}

              {role === "Admin" && (
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Group</NavDropdown.Item>
                </NavDropdown>
              )}

              {role === "User" && (
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Task</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Nav>
              {token && (
                <Nav.Link eventKey={2} onClick={Signout}>
                  Signout
                </Nav.Link>
              )}
              {/* {token && (
                )} */}
              {!token && <Nav.Link href="#pricing">Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
