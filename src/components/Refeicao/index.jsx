import Alimentos from '../Alimentos'
import './Refeicao.css'


const Refeicao =(props) =>{
    return(
    
        (props.alimentos.length > 0 ) ? <section className = "refeicao" style={{backgroundColor: props.corSecundaria}}>

            <div className="titulo">
                <h2 style={{borderColor:props.corPrimaria}}>{props.nomeRefeicao}</h2>
            </div>
            <div className="descricao">
                {props.alimentos.map(alimentos => <Alimentos
                key={alimentos.nome}
                nome={alimentos.nome}
                proteina={alimentos.proteina}
                carboidrato={alimentos.carboidrato} gordura={alimentos.gordura}
                quantidade={alimentos.quantidade}
                />)}
            </div>
        </section>
        : ' '
    )
}
export default Refeicao