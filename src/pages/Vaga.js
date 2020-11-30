 import React from 'react';
 import { Button, Container, makeStyles, Typography, Chip } from '@material-ui/core'

 function Vaga(){
    const useStyles = makeStyles((theme) => ({
        container: {
          width: '80%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }
    }))
    
    const classes = useStyles()

     return (
          <Container className={classes.container}>
              <Typography>
              O andar da sua vaga é:
              </Typography>
              <Chip label="G3" />
              <br/>
              <Typography>
              O número da sua vaga é:
              </Typography>
              <Chip label="43" />
              <br/>
              <Button variant="contained" color="primary">
                Estacionei!
              </Button>
          </Container>
    )
 }

 export default Vaga