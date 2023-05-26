import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import SignIn from "./components/signin";
import SignIn from "./components/Login";
import UserCreate from "./components/UserCreate";
import "./App.css"
import Navr from "./components/Navr";
import LoginAdmin from "./components/LoginAdmin";
import LoginSuperuser from "./components/LoginSuperuser";
import Home from "./routes/Home";
import About from "./routes/About";
export default function App() {
  // const [token, setToken] = React.useState<String | null>("");
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setToken(token);
  //     <Router>
  //              <Routes>
  //              <Route path="/usercreate" element={<UserCreate />}/>
  //              </Routes>
  //          </Router>
  //   }
  // }, []);

  // if (!token) {
  //   return <SignIn />;
  // }
  
 return (
  
  
   <Router>
     <div>
       {/* <Navbar /> */} 
       <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
         
         <Route path="/login" element={<SignIn />} />
         {/* <Route path="/admin" element={<BookingHistory />} />
         <Route path="/superuser" element={<BookingCreate />} /> */}
         {/* <Route path="/user" element={<Users/>}/> */}
         <Route path="/usercreate" element={<UserCreate />}/>
         <Route path="/navr" element={<Navr />}/>
         <Route path="/loginadmin" element={<LoginAdmin />}/>
         <Route path="/loginsuperuser" element={<LoginSuperuser />}/>
         
         
         {/* <Route path="/service" element={Service} />
         <Route path="/about" element={About} />
         <Route path="/contact" element={Contact} />
          */}

  
       </Routes>
     </div>
   </Router>
 );
}