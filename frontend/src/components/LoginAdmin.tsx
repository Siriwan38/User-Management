import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { SigninInterface } from "../models/ISignin";
import Navbar from "./Navbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SignIn() {
  const [signin, setSignin] = useState<Partial<SigninInterface>>({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    setSignin({});
  };

  const loginuser = () => {
    const apiUrl = "http://localhost:8080/login/user";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signin),
    };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setSuccess(true);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("role", "user");

          window.location.href = "/";
        } else {
          setError(true);
        }
      });
  };

  const loginsuperuser = () => {
    const apiUrl = "http://localhost:8080/login/superuser";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signin),
    };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setSuccess(true);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("role", "superuser");

          window.location.href = "/";
        } else {
          setError(true);
        }
      });
  };

  const loginadmin = () => {
    const apiUrl = "http://localhost:8080/login/admin";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signin),
    };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setSuccess(true);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("role", "admin");

          window.location.href = "/";
        } else {
          setError(true);
        }
      });
  };

  const handleInputChange = (
    event: React.ChangeEvent<{ id?: string; value: any }>
  ) => {
    const id = event.target.id as keyof typeof signin;
    const { value } = event.target;
    setSignin({ ...signin, [id]: value });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
    setError(false);
  };

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login Admin</h3>
            <div className="form-group mt-3">
              <input
                type="string"
                name="codeid"
                id="codeid"
                onChange={handleInputChange}
                className="form-control mt-1"
                placeholder="Email"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" className="btn btn-primary">
                <a style={{ color: "white" }} href="/navr">
                  ยืนยัน
                </a>
              </button>
            </div>

            
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
