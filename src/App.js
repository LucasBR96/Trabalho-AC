import React, { useState } from 'react';
import logo from './logo.svg';
import { Menu } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab'
import { TextField, Container, makeStyles, Modal, Typography, Button } from '@material-ui/core'
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom'
import TopMenu from './components/Menu'
import SelectPlace from './pages/SelectPlace'
import Vaga from './pages/Vaga'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function App() {
  const [isModalShow, setModalShow] = useState(true)
  const [estabelecimento, setEstabelecimento] = useState('Carioca Shopping')

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '70%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center'
    }
  }))

  const [modalStyle] = useState(getModalStyle);

  const classes = useStyles()
  const history = useHistory()
 
  const modal_show = () => {
      history.replace('/selecionar-estabelecimento')
      setModalShow(false)
  }

  const modal_close = () => {
    history.replace('/vaga')
    setModalShow(false)
  }

  return (
    <> 
      <Modal
        open={isModalShow}
        onClose={() => setModalShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography>
  Você está em {estabelecimento}?
          </Typography>
          <br/>
          <Button variant="contained" color="primary" onClick={modal_close}>
                  Sim, estou
            </Button>
            <br/>
            <Button variant="contained" color="secondary" onClick={modal_show}>
                  Não
            </Button>
        </div>
        </Modal>
      <div>
      <TopMenu/>
          <Switch>
          <Route exact path="/">
              <SelectPlace/>
            </Route>
            <Route path="/selecionar-estabelecimento">
              <SelectPlace onChange={(v) => {
                  setEstabelecimento(v.title)
                  setModalShow(true)
                }}/>
            </Route>
            <Route path="/vaga">
              <Vaga/>
            </Route>
          </Switch>
    </div>
    </>
  );
}

export default App;
