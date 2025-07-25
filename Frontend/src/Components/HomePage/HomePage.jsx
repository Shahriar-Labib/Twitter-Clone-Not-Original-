import { Grid } from '@mui/material';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';

const HomePage = () => {
  return (
    <Grid container spacing={2} className="px-5 lg:px-36 justify-between">
      <Grid item xs={12} lg={3}>
        <div className="hidden lg:block text-center w-full">
          <Navigation />
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div className="text-center w-full">
          <HomeSection />
        </div>
      </Grid>
      <Grid item xs={12} lg={3}>
        <div className="hidden lg:block text-center w-full">
          <p>right part</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
