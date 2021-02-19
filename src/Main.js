import { useState } from 'react';
import { Container, Table, TableHead, TableBody, TableCell, Typography, TableRow } from '@material-ui/core';
import { useAuthContext } from './Auth';

export default function Main() {
  const [groups, setGroups] = useState([]);
  const {organization} = useAuthContext();
  return (
    <Container component="main" maxWidth="md">
        <Typography variant="h3">Groups of {organization?.Name}</Typography>
        <Table>
          <TableHead>
            <TableCell>Group name</TableCell>
            <TableCell>Cycling cron expression</TableCell>
            <TableCell>Duties count</TableCell>
            <TableCell>Members count</TableCell>
          </TableHead>
          <TableBody>
            {groups.map(group => (
              <TableRow key={group.Id}>
                <TableCell>{group.Name}</TableCell>
                <TableCell>{group.CyclingCronExpression}</TableCell>
                <TableCell>{group.DutiesCount}</TableCell>
                <TableCell>{group.CurrentDuties.length + group.NextDuties.length}</TableCell>
              </TableRow>
            ))}
            </TableBody>
        </Table>
    </Container>
  );
}