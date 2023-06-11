import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import SignIn from "./components/signin";
import SignIn from "./components/Login";
import UserCreate from "./components/UserCreate";
import Header from "./components/Header";
import "./App.css";
import Navr from "./components/Navr";
import Home from "./routes/Home";
import Group from "./routes/DropAdmin/Group";
import Tasksuperuser from "./routes/DropSuperuser/Tasksuperuser";
import Taskuser from "./routes/DropUser/Taskuser";
import Users from "./components/Users";
import About from "./routes/About";

import Slide from "./routes/Slide";
import Dashboard from "./routes/DropAdmin/Dashboard";
import Breadcrumb from "./components/Breadcrumbs";

export default function App() {
  const [token, setToken] = React.useState<String>("");

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <Router>
      <div>
        <Navr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />

          <Route path="/login" element={<SignIn />} />
          {/* <Route path="/admin" element={<BookingHistory />} />
         <Route path="/superuser" element={<BookingCreate />} /> */}
          {/* <Route path="/user" element={<Users/>}/> */}
          <Route path="/usercreate" element={<UserCreate />} />
          <Route path="/users/:id" element={<UserCreate />} />
          <Route path="/header" element={<Header />} />
          <Route path="/navr" element={<Navr />} />
          <Route path="/dropdown/group" element={<Group />} />
          <Route path="/dropdown/dashboard" element={<Dashboard />} />

          <Route path="/dropdown/taskuser" element={<Taskuser />} />
          <Route path="/dropdown/tasksuperuser" element={<Tasksuperuser />} />
          <Route path="/slide" element={<Slide />} />

          {/* <Route path="/service" element={Service} />
         <Route path="/about" element={About} />
         <Route path="/contact" element={Contact} />
          */}
        </Routes>
      </div>
    </Router>
  );
}
