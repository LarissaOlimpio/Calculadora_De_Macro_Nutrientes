import { useState } from 'react';
import Refeicao from './components/Refeicao';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {

  const refeicaoDiaria = [
    {
      nome:'Café da manhã',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome:'Lanche da manhã',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Almoço',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Lanche da tarde',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'Janta',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:'Ceia',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    }
  ]
  const[alimentos,setAlimentos] = useState([])

  const novaRefeicaoAdicionada = (refeicao) =>{
    
    console.log(refeicao)
    setAlimentos([...alimentos,refeicao])
  }
  
  return (
    <div className="App">
    <Banner/>
    <Formulario refeicaoDiaria={refeicaoDiaria.map(refeicao=> refeicao.nome)} aTodaRefeicaoCadastrada={refeicaoCadastrada => novaRefeicaoAdicionada(refeicaoCadastrada)}/>
    
    {refeicaoDiaria.map(refeicao=> <Refeicao 
    key={refeicao.nome}
    nomeRefeicao={refeicao.nome}
    corSecundaria={refeicao.corSecundaria}
    corPrimaria={refeicao.corPrimaria}
    alimentos={alimentos.filter(alimento => alimento.refeicao === refeicao.nome)}
    />)}
    

    
  
    </div>
  );
}

export default App;
