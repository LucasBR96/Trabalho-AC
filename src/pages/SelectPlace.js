 
 import React from 'react';
 import { Autocomplete } from '@material-ui/lab'
 import { TextField, Container, makeStyles } from '@material-ui/core'
 
 function SelectPlace(prop){
    const useStyles = makeStyles((theme) => ({
        container: {
          width: '80%',
          padding: '20px'
        }
      }))
    
    const classes = useStyles()

    const estabelecimentos = [
        {
          title: 'Shopping Carioca'
        },
        {
          title: 'Plaza Niterói'
        },
        {
          title: 'Guadalupe Shopping'
        },
        {
          title: 'Nova América'
        }
      ]

     return (
     <Container className={classes.container}>
        <Autocomplete 
          id="combo-box-demo"
          options={estabelecimentos}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          onChange={(a, v) => prop.onChange && prop.onChange(v)}
          renderInput={(params) => <TextField {...params} label="Procurar vaga..." variant="outlined" />}/>
    </Container>)
 }

 export default SelectPlace