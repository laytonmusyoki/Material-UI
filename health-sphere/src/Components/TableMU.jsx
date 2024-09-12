import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const data=[
  {"name":"Layton","email":"layton@gmail.com","Password":"1234sdfs"},
  {"name":"Layton","email":"layton@gmail.com","Password":"1234sdfs"},
  {"name":"Layton","email":"layton@gmail.com","Password":"1234sdfs"},
  {"name":"Layton","email":"layton@gmail.com","Password":"1234sdfs"},
  {"name":"Layton","email":"layton@gmail.com","Password":"1234sdfs"},
  {"name":"Layton","email":"layton@gmail.com","Password":"1234sdfs"},
]

const TableMU = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
            <TableBody>
              {
                data.map((user)=>(
                  <TableRow key={user.name } sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.Password}</TableCell>
                    <TableCell>
                      <Button variant='contained'>Update</Button>
                      <Button variant='contained' color='error'>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TableMU
