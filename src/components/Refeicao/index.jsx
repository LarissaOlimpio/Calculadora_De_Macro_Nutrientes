import Alimentos from '../Alimentos'
import './Refeicao.css'


const Refeicao =(props) =>{
    return(
    
        (props.alimentos.length > 0 ) ? <section className = "refeicao" style={{backgroundColor: props.corSecundaria}}>

            <h2 style={{borderColor:props.corPrimaria}}>{props.nomeRefeicao}</h2>
            {props.alimentos.map(alimentos => <Alimentos 
            key={alimentos.nome}
            nome={alimentos.nome}
            proteina={alimentos.proteina} 
            carboidrato={alimentos.carboidrato} gordura={alimentos.gordura} 
            quantidade={alimentos.quantidade}
            />)}
        </section>
        : ' '
    )
}
export default Refeicao