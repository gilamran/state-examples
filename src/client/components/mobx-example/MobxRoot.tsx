import React from 'react';
import { StoresProvider } from './AppStoresProvider';
import UsersList from './UsersList';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';

function MobxRoot() {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title='Mobx State' />
        <CardContent>
          <StoresProvider>
            <UsersList />
          </StoresProvider>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MobxRoot;
