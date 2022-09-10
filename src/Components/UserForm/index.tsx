import * as React from "react";
import * as MUI from "@mui/material";
import Title from "../Title";
import { IState as Props } from "../../Pages/Users";

interface IProps {
  users: Props['users']
  setUsers: React.Dispatch<React.SetStateAction<Props['users']>>
  setShowUserForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserForm({ users , setUsers, setShowUserForm }: IProps) {

  const [input, setInput] = React.useState({
    status:     "",
    name:       "",
    email:      "",
    department: "",
    location:   ""
  })

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (!input.status || !input.name || !input.email || !input.department || !input.location) {
      return
    }
    setUsers([
      ...users,
      {
        status: input.status,
        name: input.name,
        email: input.email,
        department: input.department,
        location: input.location
      }
    ])
    setShowUserForm(false)
    setInput({
      status:     "",
      name:       "",
      email:      "",
      department: "",
      location:   ""
    })
  }
 
  return (
    <>
      <Title>Create New User</Title>
      <form>
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Status"
          variant="outlined"
          onChange={handleOnchange}
          value={input.status}
          name="status"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
          onChange={handleOnchange}
          value={input.name}
          name="name"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Email"
          variant="outlined"
          onChange={handleOnchange}
          value={input.email}
          name="email"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Department"
          variant="outlined"
          onChange={handleOnchange}
          value={input.department}
          name="department"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Location"
          variant="outlined"
          onChange={handleOnchange}
          value={input.location}
          name="location"
        />
        <MUI.Grid container spacing={3} alignItems="center" justifyContent="center" direction="column">
        <br/><br/>
          <MUI.Button variant="contained" color="success" onClick={handleClick}>
            save
          </MUI.Button>
        </MUI.Grid>
      </form>
    </>
  );
}
