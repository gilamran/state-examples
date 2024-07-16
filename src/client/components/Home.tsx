import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title='States Examples' />
        <CardContent>
          <Typography>This is the state that we'll try to represent in several state styles:</Typography>
          <img src='/assets/diagram.jpg' />
        </CardContent>
      </Card>
    </Grid>
  );
};
