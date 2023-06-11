import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UsersInterface, RolesInterface } from "../models/IUser";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import IconButton from "@mui/material/IconButton/IconButton";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Breadcrumb from "./Breadcrumbs";
import { Modal } from "react-bootstrap";
import { error } from "console";

const paths = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Dashboard", url: "/dropdown/dashboard" },
  { name: "Group", url: "/dropdown/group" },
];

function Users() {
  const [users, setUsers] = React.useState<UsersInterface[]>([]);
  const [roles, setRoles] = React.useState<string>();
  const [open, setOpen] = React.useState<boolean[]>([]);
  const [show, setShow] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<UsersInterface>();
  console.log("userId", userId);
  const handleChange = (event: SelectChangeEvent) => {
    setRoles(event.target.value);
  };

  const getUserId = async (id: number) => {
    console.log("getUserId", id);
    const apiUrl = "http://localhost:8080/user/" + id;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setUserId(res.data);
        } else {
          console.log(res.error);
        }
      });
  };

  const getUsers = async () => {
    const apiUrl = "http://localhost:8080/users";
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
        } else {
          console.log(res.error);
        }
      });
  };

  const removeUser = (id: any) => {
    console.log(id);
    const apiUrl = "http://localhost:8080";
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    fetch(`${apiUrl}/users/` + id, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        if (res.data) {
        } else {
          console.log("else");
        }
      });
  };

  const updateUser = (id: any) => {
    let data = {
      FirstName: userId?.FirstName,
      LastName: userId?.LastName,
      Email: userId?.Email,
      RoleID: roles,
    };
    const apiUrl = "http://localhost:8080";
    const requestOptions = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${apiUrl}/users/` + id, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        getUsers();
      })
      .catch((error) => {});
  };

  const checkOpen = (id: number): boolean => {
    return open[id] ? open[id] : false;
  };

  const handleCloseModal = () => setShow(false);
  const handleShowModal = (id: number) => {
    setShow(true);
  };
  const handleOpen = (id: number) => {
    let openArr = [...open];
    openArr[id] = true;
    setOpen(openArr);
  };

  const handleCloseDialog = (id: number) => {
    let openArr = [...open];
    openArr[id] = false;
    setOpen(openArr);
  };

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const [selectedUser, setSelectedUser] = React.useState<UsersInterface>();

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    const name = event.target.name as keyof typeof users;
    setUsers({ ...users, [name]: event.target.value });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "Name",
      headerName: "Firstname - Lastname",
      width: 220,
      valueGetter: (params) =>
        params.row.FirstName + "  " + params.row.LastName,
    },
    { field: "Email", headerName: "Email", width: 180 },
    {
      field: "Role",
      headerName: "Role",
      width: 100,
      valueGetter: (params) => params.row.Role.Name,
    },

    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: 10 }}>
          <div>
            <React.Fragment>
              <IconButton
                size="small"
                onClick={() => handleOpen(params.row.ID)}
              >
                <DeleteIcon color="success" fontSize="small"></DeleteIcon>
              </IconButton>
              <Dialog
                open={checkOpen(params.row.ID)}
                onClose={() => handleCloseDialog(params.row.ID)}
              >
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                  Do you want to delete user of '
                  {params.row.FirstName + "  " + params.row.LastName}' (ID:{" "}
                  {params.row.ID}) ?
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => handleCloseDialog(params.row.ID)}>
                    Cancel
                  </Button>
                  <Button onClick={() => removeUser(params.row.ID)}>OK</Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </div>
          <div>
            <IconButton size="small">
              <EditIcon
                color="success"
                fontSize="small"
                onClick={() => {
                  handleShowModal(params.row.ID);
                  getUserId(params.row.ID);
                }}
              ></EditIcon>
            </IconButton>

            <Modal show={show} onHide={handleCloseModal} centered>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Select
                  placeholder="Please select role"
                  style={{ width: "100%" }}
                  id="role"
                  value={roles}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Superuser</MenuItem>
                  <MenuItem value={3}>User</MenuItem>
                </Select>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleCloseModal}>Close</Button>
                <Button
                  onClick={() => {
                    updateUser(params.row.ID);
                    handleCloseModal();
                  }}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb paths={paths} />

      <Container maxWidth="lg">
        <Box
          display="flex"
          sx={{
            marginTop: 2,
          }}
        >
          <Box flexGrow={1}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Users
            </Typography>
          </Box>
        </Box>
        <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
          <DataGrid rows={users} getRowId={(row) => row.ID} columns={columns} />
        </div>
      </Container>
    </div>
  );
}
export default Users;
