import React, { ChangeEvent, useEffect, useState, SyntheticEvent } from "react";
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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import SignIn from "./signin";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Button, Nav, NavItem, NavLink, NavbarBrand } from "react-bootstrap";
import logo from "../../src/public/logo192.png";
export default function Navbar() {
  const [token, settoken] = React.useState<String>("");
  const [role, setrole] = React.useState<String>("");

  const menu_admin = [
    {
      name: "บันทึกข้อมูลผู้ใช้บริการAdmin",
      icon: <MeetingRoomIcon />,
      path: "/usercreate",
    },
    { name: "ข้อมูลผู้ใช้บริการ", icon: <AssignmentIcon />, path: "/user" },
  ];
  const menu_superuser = [
    {
      name: "บันทึกข้อมูลผู้ใช้บริการsuperuser",
      icon: <BedroomChildIcon />,
      path: "/usercreate",
    },
    { name: "ข้อมูลผู้ใช้บริการ", icon: <MenuBookIcon />, path: "/user" },
  ];
  const menu_user = [
    {
      name: "บันทึกข้อมูลผู้ใช้บริการuser",
      icon: <BedroomChildIcon />,
      path: "/usercreate",
    },
    { name: "ข้อมูลผู้ใช้บริการ", icon: <MenuBookIcon />, path: "/user" },
  ];
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (state: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(state);
  };

  const Signout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      settoken(token);
    }
    if (role) {
      setrole(role);
    }
  }, []);

  return (
    <div className="narbar-container">
      <div style={{ marginTop: "0.5rem" }}>
        <img src={logo}></img>
      </div>
      <div>
        <Nav>
          <div style={{ display: "flex" }}>
            <NavItem>
              <NavLink active href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">User Create</NavLink>
            </NavItem>
          </div>
          <div style={{ height: 40, width: 100 }}>
            <Button style={{ height: "100%", width: "100%" }} href="/login">
              Log in
            </Button>
          </div>
        </Nav>
      </div>
    </div>
  );
}
