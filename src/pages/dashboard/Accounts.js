import React from "react";
import Title from "./Title";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



export default function Deposits(props) {
  return (
    <React.Fragment>
      <Title>My Accounts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>Holder</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>CUIT</TableCell>
            <TableCell align="right">Alias</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.accounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell>{account.account}</TableCell>
              <TableCell>{account.firstName + ' ' + account.lastName}</TableCell>
              <TableCell> { (Math.round(account.balance * 100) / 100).toFixed(2) }</TableCell>
              <TableCell>{account.cuit}</TableCell>
              <TableCell align="right">{account.alias}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
