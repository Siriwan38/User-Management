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
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { SigninInterface } from "../models/ISignin";

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
  }

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

          window.location.href = "/"
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

          window.location.href = "/"
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

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
    setError(false);
  };



  return (
    <></>
    // <Container component="main" maxWidth="xs">
    //   <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
    //     <Alert onClose={handleClose} severity="success">
    //       เข้าสู่ระบบสำเร็จ
    //     </Alert>
    //   </Snackbar>
    //   <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
    //     <Alert onClose={handleClose} severity="error">
    //       อีเมลหรือรหัสผ่านไม่ถูกต้อง
    //     </Alert>
    //   </Snackbar>
    //   <CssBaseline />
    //   <div style={{
    //     marginTop: 8,
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //   }}>
    //     <Avatar sx={{ margin: 1, backgroundColor: "secondary.main" }}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Sign in

    //     </Typography>

    //     <Box sx={{ width: '100%' }}>
    //       <TabContext value={value}>
    //         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //           <TabList onChange={handleChange} aria-label="lab API tabs example">
    //             <Tab label="User" value="0" />
    //             <Tab label="Super User" value="1" />
    //             <Tab label="Admin" value="2" />
    //           </TabList>
    //         </Box>

    //         <TabPanel value="0">
    //           <form style={{ width: "100%", marginTop: 1 }} noValidate>
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="Email"
    //               label="Email Address"
    //               name="Email"
    //               autoComplete="email"
    //               autoFocus
    //               value={signin.Email || ""}
    //               onChange={handleInputChange}
    //             />
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               name="Password"
    //               label="Password"
    //               type="password"
    //               id="Password"
    //               autoComplete="current-password"
    //               value={signin.Password || ""}
    //               onChange={handleInputChange}
    //             />
    //             <Button
    //               fullWidth
    //               variant="contained"
    //               color="primary"
    //               sx={{ marginTop: 3, marginBottom: 0 }}
    //               onClick={loginuser}
    //             >
    //               Sign In
    //             </Button>
    //           </form>
    //         </TabPanel>

    //         <TabPanel value="1">
    //           {/* *username:Siri@gmail.com, password:123456* */}
    //           <form style={{ width: "100%", marginTop: 1 }} noValidate>
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="Email"
    //               label="Email Address"
    //               name="Email"
    //               autoComplete="email"
    //               autoFocus
    //               value={signin.Email || ""}
    //               onChange={handleInputChange}
    //             />
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               name="Password"
    //               label="Password"
    //               type="password"
    //               id="Password"
    //               autoComplete="current-password"
    //               value={signin.Password || ""}
    //               onChange={handleInputChange}
    //             />
    //             <Button
    //               fullWidth
    //               variant="contained"
    //               color="primary"
    //               sx={{ marginTop: 3, marginBottom: 0 }}
    //               onClick={loginsuperuser}
    //             >
    //               Sign In
    //             </Button>

                
    //           </form>
    //         </TabPanel>

    //         <TabPanel value="2">
    //           {/* *username:Siri@gmail.com, password:123456* */}
    //           <form style={{ width: "100%", marginTop: 1 }} noValidate>
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="Email"
    //               label="Email Address"
    //               name="Email"
    //               autoComplete="email"
    //               autoFocus
    //               value={signin.Email || ""}
    //               onChange={handleInputChange}
    //             />
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               name="Password"
    //               label="Password"
    //               type="password"
    //               id="Password"
    //               autoComplete="current-password"
    //               value={signin.Password || ""}
    //               onChange={handleInputChange}
    //             />
    //             <Button
    //               fullWidth
    //               variant="contained"
    //               color="primary"
    //               sx={{ marginTop: 3, marginBottom: 0 }}
    //               onClick={loginadmin}
    //             >
    //               Sign In
    //             </Button>
    //           </form>
    //         </TabPanel>
    //       </TabContext>
    //     </Box>
    //   </div>
    // </Container>
  );
}

export default SignIn;