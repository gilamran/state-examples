import React from 'react';
import UsersList from './UsersList';
import UsersProvider from './UsersProvider';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';

function ContextExampleRoot() {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title='Context State' />
        <CardContent>
          <UsersProvider>
            <UsersList />
          </UsersProvider>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ContextExampleRoot;
