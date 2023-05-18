import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NewNavbar";
// import SignIn from "./components/signin";
import SignIn from "./components/Login";
import Home from "./components/Home";
import UserCreate from "./components/UserCreate";
import "./App.css";
import { Navigate } from "react-router-dom";
export default function App() {
  const [token, setToken] = React.useState<String | null>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            {/* <Route path="/admin" element={<BookingHistory />} />
         <Route path="/superuser" element={<BookingCreate />} /> */}
            {/* <Route path="/user" element={<Users/>}/> */}
            <Route path="/usercreate" element={<UserCreate />} />

            {/* <Route path="/service" element={Service} />
         <Route path="/about" element={About} />
         <Route path="/contact" element={Contact} />
          */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}
