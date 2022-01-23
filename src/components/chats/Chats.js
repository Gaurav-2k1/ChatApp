import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import { Grid } from '@material-ui/core';
import './chat.scss'
import { Box, TextField } from '@material-ui/core';
import IndivisualChat from './indivisualchat/IndivisualChat';
import Chatlist from '../chatList/Chatlist';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

const Chats = () => {


    const [selectedchat, setselected] = useState('1');
    console.log(selectedchat);
    return <div>
        <ChatHeader />
        <div className='chatdiv' >
            <Grid container spacing={2} style={{ width: '100%' }}>
                <Grid item xs={12} md={3}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%', borderRadius: '30px' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='searchb'
                    >
                        <TextField id="outlined-basic" label="Search..." variant="outlined" />
                    </Box>
                    <div className='chatcomponent'>
                        <Chatlist selectedchat={setselected} />
                    </div>
                </Grid>
                <Grid item xs={12} md={9}>
                    <IndivisualChat />
                </Grid>

            </Grid>
        </div>

    </div>;
};

export default Chats;

