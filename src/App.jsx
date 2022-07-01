//App.jsx
import { useState } from 'react';
import './App.css'

function App(){
  const [selecionado, setSelecionado] = useState(false);

  function mudaIcones() {
      setSelecionado(!selecionado);
      console.log(selecionado);
  }

  return(
      <div className="Icones">
          
          <button className='apps'>
              <img src="Ifro.png" alt="ERRO" />
              <p className='nome'>AVA</p>
          </button>

          <button className='apps'>
              <img src="brainly.png" alt="ERRO" />
              <p className='nome'>Brainly</p>
          </button> 

          <button className='apps'>
              <img src="youtube.jpg" alt="ERRO" />
              <p className='nome'>YouTube</p>
          </button> 

          <button className='apps'>
              <img src="pinterest.png" alt="ERRO" />
              <p className='nome'>Pinterest</p>
          </button> 

          <button className='apps'>
              <img src="muitomanga.png" alt="ERRO" />
              <p className='nome'>MuitoMangá</p>
          </button> 

          <button className='apps'>
              <img src="Wattpad.png" alt="ERRO" />
              <p className='nome'>Wattpad</p>
          </button> 

          <button className='apps'>
              <img src="mais.png" alt="ERRO" />
              <p className='nome'>Adicionar ata...</p>
          </button>
      </div>
  );
}
export default App