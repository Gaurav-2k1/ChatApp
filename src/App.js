import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Chats from './components/chats/Chats';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return <>
    <Grid container spacing={2} style={{ width: '100%' }}>

      <Grid item xs={12} md={1}>
        <Navbar />
      </Grid>
      <Grid item xs={12} md={11}>
        <Chats />
      </Grid>
    </Grid>

  </>;
};

export default App;

