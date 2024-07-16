import React from 'react';
import { UsersList } from './UsersList';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';

export function ReactStateExampleRoot() {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title='React State' />
        <CardContent>
          <UsersList />
        </CardContent>
      </Card>
    </Grid>
  );
}
