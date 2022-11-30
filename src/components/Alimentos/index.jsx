import './Alimentos.css'

const Alimentos =(props) =>{

    const CalculandoOsMacros = (quantidadeConsumida, quantidadeDeMacros) =>{
        return(
            (quantidadeDeMacros * quantidadeConsumida) / 100
        )
    }
    return(
        <div className="alimento">

            <h4>{props.nome}</h4>
            <h5>Em {props.quantidade} gramas este alimento tem: </h5>
            <p>{CalculandoOsMacros(props.quantidade,props.proteina)} gramas de proteína </p>
            <p>{CalculandoOsMacros(props.quantidade,props.carboidrato)} gramas de carboidrato</p>
            <p>{CalculandoOsMacros(props.quantidade,props.gordura)} gramas de gordura </p>
          

        </div>
    )
}
export default Alimentos