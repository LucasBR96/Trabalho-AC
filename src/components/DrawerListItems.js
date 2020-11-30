import React, { useState } from 'react';
import {ListItem, ListItemText, ListItemIcon, makeStyles } from '@material-ui/core'
import { AccountCircle, Payment, Settings, ExitToApp  } from '@material-ui/icons'

function DrawerListItems(){
    const useStyles = makeStyles((theme) => ({
        listItem: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        listIcon: {
            color: 'cadetblue'
        }
    }))

    const classes = useStyles()

    return (<> 
        <ListItem className={classes.listItem}>
            <ListItemIcon >
                <AccountCircle className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText primary="Conta"/>
        </ListItem>
        <ListItem className={classes.listItem}>
            <ListItemIcon>
                <Payment className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText primary="Pagamento"/>
        </ListItem>
        <ListItem className={classes.listItem}>
            <ListItemIcon>
                <Settings className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText primary="Configurações"/>
        </ListItem>
        <ListItem className={classes.listItem}>
            <ListItemIcon>
                <ExitToApp className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText primary="Sair"/>
        </ListItem>
    
    
    </>)
}

export default DrawerListItems
