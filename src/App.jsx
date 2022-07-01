//App.jsx
import './App.css'

function App(){
return(
  <div className='body'>
    <div className='corpo'>
      <div className='caixa'>
      <div className='caixa1'>
        Processos
      </div>
      <div className='descricao'>
        Processos relacinado ao combate do COVID-19
      </div>
      </div>
      <div className='caixa'>
        <div className='caixa1'>
          Contatos
        </div>
        <div className='descricao'>
          Contatos relacionados ao combate do COVID-19
        </div>
      </div>
    </div>
    <div className='corpo'>
        <div className='large_caixa'>
          <div className='caixa2'>
            Licitações e compras diretas(Dispesas)
          </div>
          <div className='descricao'>
            Compras destinadas ao enfrentamento e combate a COVID-19
          </div>
        </div>      
    </div>
    <div className='corpo'>
    <div className='caixa'>
      <div className='caixa3'>
      Receitas Federais
      </div>
      <div className='descricao'>
      Receitas Federais destinadas ao bombate a COVID-19
      </div>
      <div className='valor'>
        Arrecadada: 73.082,40
      </div>
      </div>
      <div className='caixa'>
        <div className='caixa3'>
          Receitas Estaduais
        </div>
        <div className='descricao'>
          Receitas etaduais destinadas ao bombate a COVID-19
        </div>
        <div className='valor'>
        Arrecadada: 0,00
        </div>
      </div>
    </div>
    <div className='corpo'>
      <div className='caixa'>
        <div className='caixa4'>
          Empenhos
        </div>
        <div className='descricao'>
          <p>Despesas empenhadas destinadas ao enfrentamento e</p> 
          combate a COVID-19
        </div>
        <div className='valor'>
          <p>Valor atualizado: 0,00</p>
          Restos: 32.338,04
        </div>
      </div>
      <div className='caixa'>
        <div className='caixa4'>
          Liquidações
        </div>
        <div className='descricao'>
          <p>Despesas liquidadas destinadas ao enfrentamento</p> 
          e combate a COVID-19
        </div>
        <div className='valor'>
          Valor atualizado: 20.137,02
        </div>
      </div>
      <div className='caixa'>
        <div className='caixa4'>
          Pagamentos
        </div>
        <div className='descricao'>
          <p>Despesas pagas destinadas ao enfrentamento </p> 
          e combate a COVID-19
        </div>
        <div className='valor'>
          Valor atualizado: 20.137,02
        </div>
      </div>
    </div>
  </div> 
)
}
export default App