import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Image from 'next/image';

import styles from "./tabels.module.css"

const Tabels = () => {
  return (
    <div className={styles.container}>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Role</TableCell>
          <TableCell align="right">Locations</TableCell>
          <TableCell align="right">Last Active</TableCell>
          <TableCell align="right">Permissions</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          <TableRow
            key="a"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              peter john
            </TableCell>
            <TableCell align="right">Peter@email.com</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Adam Stall,Coimbatore</TableCell>
            <TableCell align="right">Sep 13, 2023 5:51 PM</TableCell>
            <TableCell align="right">All Permissions</TableCell>
            <TableCell align="right"><Button variant="contained" color="success">
             Active
           </Button></TableCell>
             <TableCell align="right">
             <Image  alt='aaa' width={26} height={26} src="/edit.png"></Image>
             <Image  alt='aaa' width={26} height={26} src="/delete.png"></Image>
             </TableCell>
          </TableRow>

          <TableRow
            key="a"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              peter john
            </TableCell>
            <TableCell align="right">Peter@email.com</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Adam Stall,Coimbatore</TableCell>
            <TableCell align="right">Sep 13, 2023 5:51 PM</TableCell>
            <TableCell align="right">All Permissions</TableCell>
            <TableCell align="right"><Button variant="contained" color="success">
             Active
           </Button></TableCell>
             <TableCell align="right">
             <Image  alt='aaa' width={26} height={26} src="/edit.png"></Image>
             <Image  alt='aaa' width={26} height={26} src="/delete.png"></Image>
             </TableCell>
          </TableRow>
          <TableRow
            key="a"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              peter john
            </TableCell>
            <TableCell align="right">Peter@email.com</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Adam Stall,Coimbatore</TableCell>
            <TableCell align="right">Sep 13, 2023 5:51 PM</TableCell>
            <TableCell align="right">All Permissions</TableCell>
            <TableCell align="right"><Button variant="contained" color="success">
             Active
           </Button></TableCell>
             <TableCell align="right">
             <Image  alt='aaa' width={26} height={26} src="/edit.png"></Image>
             <Image  alt='aaa' width={26} height={26} src="/delete.png"></Image>
             </TableCell>
          </TableRow>
          <TableRow
            key="a"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              peter john
            </TableCell>
            <TableCell align="right">Peter@email.com</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Adam Stall,Coimbatore</TableCell>
            <TableCell align="right">Sep 13, 2023 5:51 PM</TableCell>
            <TableCell align="right">All Permissions</TableCell>
            <TableCell align="right"><Button variant="contained" color="success">
             Active
           </Button></TableCell>
             <TableCell align="right">
             <Image  alt='aaa' width={26} height={26} src="/edit.png"></Image>
             <Image  alt='aaa' width={26} height={26} src="/delete.png"></Image>
             </TableCell>
          </TableRow>
          <TableRow
            key="a"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              peter john
            </TableCell>
            <TableCell align="right">Peter@email.com</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Adam Stall,Coimbatore</TableCell>
            <TableCell align="right">Sep 13, 2023 5:51 PM</TableCell>
            <TableCell align="right">All Permissions</TableCell>
            <TableCell align="right"><Button variant="contained" color="success">
             Active
           </Button></TableCell>
             <TableCell align="right">
             <Image  alt='aaa' width={26} height={26} src="/edit.png"></Image>
             <Image  alt='aaa' width={26} height={26} src="/delete.png"></Image>
             </TableCell>
          </TableRow>
          <TableRow
            key="a"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              peter john
            </TableCell>
            <TableCell align="right">Peter@email.com</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Adam Stall,Coimbatore</TableCell>
            <TableCell align="right">Sep 13, 2023 5:51 PM</TableCell>
            <TableCell align="right">All Permissions</TableCell>
            <TableCell align="right"><Button variant="contained" color="success">
             Active
           </Button></TableCell>
             <TableCell align="right">
             <Image  alt='aaa' width={26} height={26} src="/edit.png"></Image>
             <Image  alt='aaa' width={26} height={26} src="/delete.png"></Image>
             </TableCell>
          </TableRow>
       
      </TableBody>
    </Table>
  </TableContainer>

  </div>
  )
}

export default Tabels
