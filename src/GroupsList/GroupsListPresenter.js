import { Container, Table, TableHead, TableBody, TableCell, Typography, TableRow, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    '&:hover': {
      background: theme.palette.grey[300],
      cursor: "pointer"
    }
  },
  cronExpressionCell: {
    width: 200
  },
  numberCell: {
    width: 130
  }
}));

export default function GroupsListPresenter({organization, groups, onGroupClick}) {
  const styles = useStyles();

  return (
    <Container component="main" maxWidth="md">
        <Typography variant="h3">Groups of {organization.name}</Typography>
        <Table>
          <TableHead>
            <TableCell>Group name</TableCell>
            <TableCell className={styles.cronExpressionCell}>Cycling cron expression</TableCell>
            <TableCell className={styles.numberCell}>Duties count</TableCell>
            <TableCell className={styles.numberCell}>Members count</TableCell>
          </TableHead>
          <TableBody>
            {groups.map(group => (
              <TableRow key={group.id} onClick={() => onGroupClick(group.id)} className={styles.row}>
                <TableCell>{group.name}</TableCell>
                <TableCell className={styles.cronExpressionCell}>{group.cyclingCronExpression}</TableCell>
                <TableCell className={styles.numberCell}>{group.dutiesCount}</TableCell>
                <TableCell className={styles.numberCell}>{group.currentDuties.length + group.nextDuties.length}</TableCell>
              </TableRow>
            ))}
            </TableBody>
        </Table>
    </Container>
  );
}