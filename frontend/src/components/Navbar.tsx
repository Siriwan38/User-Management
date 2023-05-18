import React, { ChangeEvent, useEffect, useState, SyntheticEvent } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link as RouterLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import SignIn from './signin'
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
export default function Navbar() {

  const [token, settoken] = React.useState<String>("");
  const [role, setrole] = React.useState<String>("");

  const menu_admin = [

    { name: "บันทึกข้อมูลผู้ใช้บริการAdmin", icon: <MeetingRoomIcon />, path: "/usercreate" },
    { name: "ข้อมูลผู้ใช้บริการ", icon: <AssignmentIcon />, path: "/user" },
  ]
  const menu_superuser = [

    { name: "บันทึกข้อมูลผู้ใช้บริการsuperuser", icon: <BedroomChildIcon />, path: "/usercreate" },
    { name: "ข้อมูลผู้ใช้บริการ", icon: <MenuBookIcon />, path: "/user" },
  ]
  const menu_user = [

    { name: "บันทึกข้อมูลผู้ใช้บริการuser", icon: <BedroomChildIcon />, path: "/usercreate" },
    { name: "ข้อมูลผู้ใช้บริการ", icon: <MenuBookIcon />, path: "/user" },
  ]
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (state: boolean) => (event: any) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenDrawer(state);
  }


  const Signout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
   
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    if (token) {
      settoken(token);
    }
    if (role) {
      setrole(role);
    }
  }, []);

  if (role === 'admin') {


    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ marginRight: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
              <List
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ListItem button component={RouterLink} to="/">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText>หน้าแรก</ListItemText>
                </ListItem>
                <Divider />
                {menu_admin.map((item, index) => (
                  <ListItem key={index} button component={RouterLink} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}

                <ListItem button onClick={Signout}>
                  <ListItemIcon> <LoginRoundedIcon /></ListItemIcon>
                  <ListItemText>Sign out</ListItemText>
                </ListItem>

              </List>
            </Drawer>

            <Link style={{ color: "white", textDecoration: "none", marginRight: "auto" }} to="/login">
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                User management
              </Typography>
            </Link>

          </Toolbar>
        </AppBar>
      </div>
    );
  }


  if (role === 'superuser') {


    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ marginRight: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
              <List
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ListItem button component={RouterLink} to="/">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText>หน้าแรก</ListItemText>
                </ListItem>
                <Divider />
                {menu_superuser.map((item, index) => (
                  <ListItem key={index} button component={RouterLink} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}

                <ListItem button onClick={Signout}>
                  <ListItemIcon> <LoginRoundedIcon /></ListItemIcon>
                  <ListItemText>Sign out</ListItemText>
                </ListItem>

              </List>
            </Drawer>

            <Link style={{ color: "white", textDecoration: "none", marginRight: "auto" }} to="/login">
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
               User management
              </Typography>
            </Link>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
  if (role === 'user') {


    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ marginRight: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
              <List
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ListItem button component={RouterLink} to="/">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText>หน้าแรก</ListItemText>
                </ListItem>
                <Divider />
                {menu_user.map((item, index) => (
                  <ListItem key={index} button component={RouterLink} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}

                <ListItem button onClick={Signout}>
                  <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
                  <ListItemText>Sign out</ListItemText>
                </ListItem>

              </List>
            </Drawer>

            <Link style={{ color: "white", textDecoration: "none", marginRight: "auto" }} to="/login">
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                User management
              </Typography>
            </Link>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
  else {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ marginRight: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
              <List
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ListItem button component={RouterLink} to="/">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText>หน้าแรก</ListItemText>
                </ListItem>
                <Divider />
                {menu_admin.map((item, index) => (
                  <ListItem key={index} button component={RouterLink} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}

                <ListItem button onClick={Signout}>
                  <ListItemIcon> <LoginRoundedIcon /></ListItemIcon>
                  <ListItemText>Login</ListItemText>
                </ListItem>

              </List>
            </Drawer>

            <Link style={{ color: "white", textDecoration: "none", marginRight: "auto" }} to="/login">
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                User management
              </Typography>
            </Link>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return <SignIn/>;
}