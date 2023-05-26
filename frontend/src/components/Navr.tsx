import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  const [role, setrole] = React.useState<String>("");

  const Signout = () => {
    localStorage.clear();
    window.location.href = "/login";

    if (role) {
      setrole(role);
    }

  };


  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">User-Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Member</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} onClick={Signout}>
                Signout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
          </div>
          <div className="col-sm-8 text-left">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <hr>
              <h3>Test</h3>
              <p>Lorem ipsum...</p>
            </hr>
          </div>
          <div className="col-sm-2 sidenav">
            <div className="well">
              <p>ADS</p>
            </div>
            <div className="well">
              <p>ADS</p>
            </div>
          </div>
        </div>
      </div></> */}
    </>
  );



  // if (role === "admin") {
  //   return (
  //     <>
  //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //         <Container>
  //           <Navbar.Brand href="#home">User-Management</Navbar.Brand>
  //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //           <Navbar.Collapse id="responsive-navbar-nav">
  //             <Nav className="me-auto">
  //               <Nav.Link href="#home">Home</Nav.Link>
  //               <Nav.Link href="#pricing">About</Nav.Link>
  //               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  //                 <NavDropdown.Item href="#action/3.1">
  //                   Dashboard
  //                 </NavDropdown.Item>
  //                 <NavDropdown.Item href="#action/3.2">Member</NavDropdown.Item>
  //                 {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.4">
  //                 Separated link
  //               </NavDropdown.Item> */}
  //               </NavDropdown>
  //             </Nav>
  //             <Nav>
  //               <Nav.Link eventKey={2} onClick={Signout}>
  //                 Signout
  //               </Nav.Link>
  //             </Nav>
  //           </Navbar.Collapse>
  //         </Container>
  //       </Navbar>
  //       {/* <div className="container-fluid text-center">
  //         <div className="row content">
  //           <div className="col-sm-2 sidenav">
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //           </div>
  //           <div className="col-sm-8 text-left">
  //             <h1>Welcome</h1>
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  //             <hr>
  //               <h3>Test</h3>
  //               <p>Lorem ipsum...</p>
  //             </hr>
  //           </div>
  //           <div className="col-sm-2 sidenav">
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div></> */}
  //     </>
  //   );
  // }

  // if (role === "superuser") {
  //   return (
  //     <>
  //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //         <Container>
  //           <Navbar.Brand href="#home">User-Management</Navbar.Brand>
  //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //           <Navbar.Collapse id="responsive-navbar-nav">
  //             <Nav className="me-auto">
  //               <Nav.Link href="#home">Home</Nav.Link>
  //               <Nav.Link href="#pricing">About</Nav.Link>
  //               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  //                 <NavDropdown.Item href="#action/3.1">Task</NavDropdown.Item>
  //                 {/* <NavDropdown.Item href="#action/3.2">
  //                 Member
  //               </NavDropdown.Item> */}
  //                 {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.4">
  //                 Separated link
  //               </NavDropdown.Item> */}
  //               </NavDropdown>
  //             </Nav>
  //             <Nav>
  //               <Nav.Link eventKey={2} onClick={Signout}>
  //                 Signout
  //               </Nav.Link>
  //             </Nav>
  //           </Navbar.Collapse>
  //         </Container>
  //       </Navbar>
  //       {/* <div className="container-fluid text-center">
  //         <div className="row content">
  //           <div className="col-sm-2 sidenav">
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //           </div>
  //           <div className="col-sm-8 text-left">
  //             <h1>Welcome</h1>
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  //             <hr>
  //               <h3>Test</h3>
  //               <p>Lorem ipsum...</p>
  //             </hr>
  //           </div>
  //           <div className="col-sm-2 sidenav">
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div></> */}
  //     </>
  //   );
  // }

  // if (role === "user") {
  //   return (
  //     <>
  //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //         <Container>
  //           <Navbar.Brand href="#home">User-Management</Navbar.Brand>
  //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //           <Navbar.Collapse id="responsive-navbar-nav">
  //             <Nav className="me-auto">
  //               <Nav.Link href="#home">Home</Nav.Link>
  //               <Nav.Link href="#pricing">About</Nav.Link>
  //               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  //                 <NavDropdown.Item href="#action/3.1">task</NavDropdown.Item>
  //                 {/* <NavDropdown.Item href="#action/3.2">
  //                 Group
  //               </NavDropdown.Item> */}
  //                 {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.4">
  //                 Separated link
  //               </NavDropdown.Item> */}
  //               </NavDropdown>
  //             </Nav>
  //             <Nav>
  //               <Nav.Link eventKey={2} onClick={Signout}>
  //                 Signout
  //               </Nav.Link>
  //             </Nav>
  //           </Navbar.Collapse>
  //         </Container>
  //       </Navbar>
  //       {/* <div className="container-fluid text-center">
  //         <div className="row content">
  //           <div className="col-sm-2 sidenav">
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //           </div>
  //           <div className="col-sm-8 text-left">
  //             <h1>Welcome</h1>
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  //             <hr>
  //               <h3>Test</h3>
  //               <p>Lorem ipsum...</p>
  //             </hr>
  //           </div>
  //           <div className="col-sm-2 sidenav">
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div></> */}
  //     </>
  //   );
  // }

  // else {
  //   return (
  //     <>
  //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //         <Container>
  //           <Navbar.Brand href="#home">User-Management</Navbar.Brand>
  //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //           <Navbar.Collapse id="responsive-navbar-nav">
  //             <Nav className="me-auto">
  //               <Nav.Link href="#home">Home</Nav.Link>
  //               <Nav.Link href="#pricing">About</Nav.Link>
               {/*} <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Dashboard
                  </NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Member</NavDropdown.Item>*/}
  //                 {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.4">
  //                 Separated link
  //               </NavDropdown.Item> */}
  //               </NavDropdown>
  //             </Nav>
  //             <Nav>
  //               <Nav.Link eventKey={2} onClick={Signout}>
  //                 Login
  //               </Nav.Link>
  //             </Nav>
  //           </Navbar.Collapse>
  //         </Container>
  //       </Navbar>
  //       {/* <div className="container-fluid text-center">
  //         <div className="row content">
  //           <div className="col-sm-2 sidenav">
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //             <p><a href="#">Link</a></p>
  //           </div>
  //           <div className="col-sm-8 text-left">
  //             <h1>Welcome</h1>
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  //             <hr>
  //               <h3>Test</h3>
  //               <p>Lorem ipsum...</p>
  //             </hr>
  //           </div>
  //           <div className="col-sm-2 sidenav">
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //             <div className="well">
  //               <p>ADS</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div></> */}
  //     </>
  //   );
  // }

}

export default CollapsibleExample;
