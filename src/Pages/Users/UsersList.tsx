import * as React from 'react';
import * as MUI from '@mui/material'
import Title from '../../Components/Title';

interface IProps {
  users: {
    id: number,
    status: string,
    name: string,
    email: string,
    department: string,
    location: string,
  }[]
}
export default function UserLists({ users }: IProps) {
  return (
    <>
      <Title>List of Users</Title>
      <MUI.Table size="small">
        <MUI.TableHead>
          <MUI.TableRow>
            <MUI.TableCell>Status</MUI.TableCell>
            <MUI.TableCell>Name</MUI.TableCell>
            <MUI.TableCell>Email</MUI.TableCell>
            <MUI.TableCell>Department</MUI.TableCell>
            <MUI.TableCell>Location</MUI.TableCell>
            <MUI.TableCell align='center'>Modify</MUI.TableCell>
          </MUI.TableRow>
        </MUI.TableHead>
        <MUI.TableBody>
          {users.map((user) => (
            <MUI.TableRow key={user.id}>
              <MUI.TableCell>{user.status}</MUI.TableCell>
              <MUI.TableCell>{user.name}</MUI.TableCell>
              <MUI.TableCell>{user.email}</MUI.TableCell>
              <MUI.TableCell>{user.department}</MUI.TableCell>
              <MUI.TableCell>{user.location}</MUI.TableCell>
              <MUI.TableCell align='right'>
                <MUI.Button variant='outlined'>
                  Edit
                </MUI.Button>
                &ensp;
                <MUI.Button variant='outlined' color='error'>
                  Delete
                </MUI.Button>
              </MUI.TableCell>
            </MUI.TableRow>
          ))}
        </MUI.TableBody>
      </MUI.Table>
    </>
  );
}
