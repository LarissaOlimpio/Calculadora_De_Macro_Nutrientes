import { useState } from 'react'
import Botao from '../Botao'
import CampoDeTexto from '../CampoDeTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) =>{
    const[nome, setNome] =useState('')
    const[proteina, setProteina] =useState('')
    const[carboidrato, setCarboidrato] =useState('')
    const[gordura, setGordura] =useState('')
    const[quantidade, setQuantidade] =useState('')
    const[refeicao,setRefeicao] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aTodaRefeicaoCadastrada({
            nome,
            proteina,
            carboidrato,
            gordura,
            quantidade,
            refeicao
        })
        setNome('')
        setProteina('')
        setCarboidrato('')
        setGordura('')
        setQuantidade('')
        setRefeicao('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>Formulário para cálculo de Macro Nutrientes</h1>

                <h2>Digite abaixo o alimento consumido e suas informações</h2>
                <h3> * Utilize a tabela <strong> TACO </strong> como referência para os valores nutricionais </h3>
                <a target="_blank" rel="noreferrer" href="https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf">Acesse a tabela Taco</a>

                <CampoDeTexto
                    nome_label="Digite o nome do alimento"
                    type="text"
                    obrigatorio={true}
                    placeholder="Nome do alimento"
                    valor = {nome}
                    aoAlterado={valor=>setNome(valor)}
                    />

                <h4>*Utilize os valores padrão referente a 100gr do alimento encontrado na tabela taco para completar os campos abaixo:</h4>

                <CampoDeTexto
                nome_label="Digite a quantidade de Proteínas"
                type="number"
                obrigatorio={true}
                placeholder="Digite apenas números"
                valor = {proteina}
                aoAlterado={valor => setProteina(valor)}
                />
                 <CampoDeTexto
                nome_label="Digite a quantidade de Lipídeos/Gordura"
                type="number"
                obrigatorio={true}
                placeholder="Digite apenas números"
                valor = {gordura}
                aoAlterado={valor => setGordura(valor)}
                />
                 <CampoDeTexto
                nome_label="Digite a quantidade de Carboidrato"
                type="number"
                obrigatorio={true}
                placeholder="Digite apenas números"
                valor = {carboidrato}
                aoAlterado= {valor => setCarboidrato(valor)}
                />
                
                 <CampoDeTexto
                nome_label="Digite a quantidade(em gramas) do alimento que foi consumido"
                type="number"
                obrigatorio={true}
                placeholder="Digite apenas números"
                valor = {quantidade}
                aoAlterado={valor => setQuantidade(valor)}
                />
                <ListaSuspensa
                obrigatorio={true}
                nome_label="Em qual refeição este alimento foi consumido:"
                itens = {props.refeicaoDiaria}
                valor={refeicao}
                aoAlterado={valor=>setRefeicao(valor)}/>
                
                <Botao>
                    Calcular
                </Botao>
            </form>
        </section>
    )
}
export default Formulario