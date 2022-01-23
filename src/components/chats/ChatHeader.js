import React from 'react';
import { Grid } from '@material-ui/core';
import { HiOutlineAdjustments } from 'react-icons/hi'
import { BsBell } from 'react-icons/bs'
import './header.scss';
const ChatHeader = () => {
    return <div className='chatnav'>
        <Grid container spacing={2} style={{ width: '100%' }}>
            <Grid item xs={12} md={3} >
                <div className='firstChild'><h1>Chat</h1>
                    <div className='sort'>
                        <HiOutlineAdjustments size='2.5rem' style={{ transform: [{ rotate: '90deg' }] }} />
                        <h1>Sort</h1>
                    </div></div>

            </Grid>
            <Grid item xs={12} md={9}>
                <div className='secondChild'>
                    <BsBell size='2rem' />
                    <div className='profile'>
                        <img src='https://yt3.ggpht.com/ytc/AKedOLQk-wJOw3-BXhP1Z0K1j4TsP14ZVkTVt3zsl8dlXA=s900-c-k-c0x00ffffff-no-rj' alt='profileimg' />
                        <h1>Gaurav</h1>
                    </div>
                </div>
            </Grid>

        </Grid>

    </div>;
};

export default ChatHeader;
