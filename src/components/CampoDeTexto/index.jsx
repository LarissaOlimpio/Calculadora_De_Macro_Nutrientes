import './CampoDeTexto.css'

const CampoDeTexto = (props) =>{

    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }
    return(
    
            <div className="campoDeTexto">
                <label>{props.nome_label}</label>
                <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder}type={props.type} required={props.obrigatorio} />
            </div>
    )
}
export default CampoDeTexto