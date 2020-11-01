import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const modalHtml = document.getElementById("popup");
  const [isModalShow, setModalShow] = useState(true)
 
  const modal_show = (lugar) => {
      var par = window.document.getElementById("local");
      par.innerHTML = `Você está em: ${lugar}?`
      setModalShow(true)
  }

  const modal_close = () => {
    setModalShow(false)
  }

  return (
    <div>
          <header>
        <div><p>VAGÔ</p></div>
        <div>
            <input type="image" src="./imagens/bars.png" id="barras"/>
        </div>
        
    </header>

    <section>
        <div>Você está em <strong>G3</strong></div>

        <button id="popup_local" onClick={() => modal_show('Carioca Shopping')}>Clique</button>

        <div id="popup" class="modal" style={{ display: isModalShow ? 'block': 'none' }}>
            <div class="modal-content">

                <p id="local">
                <br/>
                </p>

                <button id="opc_1" onClick={() => modal_close()}>Sim</button><br/>
                <button id="opc_2" onClick={() => modal_close()}>Não</button>
            </div>

        </div>

    </section>

    <footer><p>&copy; Copyright</p></footer>
    </div>
  );
}

export default App;
