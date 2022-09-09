import * as MUI from "@mui/material";
import Title from "../Title";
export default function UserForm() {
  return (
    <>
      <Title>Create New User</Title>
      <form>
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Status"
          variant="outlined"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Email"
          variant="outlined"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Department"
          variant="outlined"
        />
        <br />
        <MUI.TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Location"
          variant="outlined"
        />
        <MUI.Grid container spacing={3} alignItems="center" justifyContent="center" direction="column">
        <br/><br/>
          <MUI.Button variant="contained" color="success">
            save
          </MUI.Button>
        </MUI.Grid>
      </form>
    </>
  );
}
