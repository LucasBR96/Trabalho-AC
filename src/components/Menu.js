import React, { useState } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, Drawer, makeStyles } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import DrawerItems from './DrawerListItems'

function TopMenu() {
    const [drawerState, setDrawerState] = useState(false)

    const useStyles = makeStyles(theme => ({
        menuButton: {
    
        },
        bar: {
          backgroundColor: 'cadetblue'
        },
        toolbar: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }))
    
    const classes = useStyles();

    return(
    <AppBar position="static" className={classes.bar}>
    <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
        VAGÔ
        </Typography>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerState(!drawerState)}>
        <Menu />
        <Drawer
          anchor={'right'}
          open={drawerState}
          onClose={() => setDrawerState(false)}
          onOpen={() => setDrawerState(true)}
        >
          <DrawerItems /> 
        </Drawer>
        </IconButton>
    </Toolbar>
    </AppBar>)
}

export default TopMenu