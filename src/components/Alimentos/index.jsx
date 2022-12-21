import './Alimentos.css'

const Alimentos =(props) =>{

    const CalculandoOsMacros = (quantidadeConsumida, quantidadeDeMacros, nomeDoMacro) =>{
        const macros = (quantidadeDeMacros * quantidadeConsumida) / 100;
        let calorias = 0
        if(nomeDoMacro === "gordura"){
            calorias = macros * 9
        }else{
            calorias = macros * 4
        }
        return(
            <p> Este alimento contém {macros} de {nomeDoMacro} e {calorias} calorias</p>
        )
    }
    
    return(
        <div className="alimento" >

            <h4>{props.nome}</h4>
            <h5>Em {props.quantidade} gramas este alimento tem: </h5>
            {CalculandoOsMacros(props.quantidade,props.proteina,"proteina")}
            {CalculandoOsMacros(props.quantidade,props.carboidrato, "carboidrato")}
            {CalculandoOsMacros(props.quantidade,props.gordura,"gordura")}
          

        </div>
    )
}
export default Alimentos