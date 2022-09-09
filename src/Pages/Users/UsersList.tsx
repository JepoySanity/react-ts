import * as React from 'react';
import * as MUI from '@mui/material'
import Title from '../../Components/Title';

// Generate User Data
function createData(
  id: number,
  status: string,
  name: string,
  email: string,
  department: string,
  location: string,
) {
  return { id, status, name, email, department, location };
}

const rows = [
  createData(
    0,
    'Active',
    'John Jefferson Factoran',
    'john.factoran@awsys-i.com',
    'Dev F',
    'Alabang',
  ),
  createData(
    1,
    'Active',
    'Christian Gil Aquino',
    'christian.aquino@awsys-i.com',
    'Dev F',
    'Makati',
  ),
];

export default function Orders() {
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
          {rows.map((row) => (
            <MUI.TableRow key={row.id}>
              <MUI.TableCell>{row.status}</MUI.TableCell>
              <MUI.TableCell>{row.name}</MUI.TableCell>
              <MUI.TableCell>{row.email}</MUI.TableCell>
              <MUI.TableCell>{row.department}</MUI.TableCell>
              <MUI.TableCell>{row.location}</MUI.TableCell>
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
