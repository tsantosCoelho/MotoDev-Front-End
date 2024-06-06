import styles from './RegisterService.module.css'
import { useState, useEffect } from 'react'
import api from '../utils/api'

function RegisterService(){
    const [client,setClient] = useState([])
    const [service,setService] = useState({})

    useEffect(()=>{
        api.get("/cliente/listar").then((response)=>{
            const clientArray = Object.entries(response.data).map(([key, value]) => value)
            setClient(clientArray)
            
        })
    },[])

    function handleChange(e){
        setService({...service,[e.target.name]:e.target.value})
        
    }
    
    async function handleSubmit(e){
        e.preventDefault()
        try {
            const data = await api.post("/orcamento/cadastrar",service).then((response)=>{
                alert(`servico: ${response.data.servico} cadastrado com sucesso!`)
            }).catch((response)=>{
                alert(`erro:${response.data}`)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit} >
            <div className={styles.title}>
                <h1>Novo Serviço</h1>
                <input type='submit' value='Salvar' />
            </div>
            <div className={styles.register}>
                <label htmlFor='servico'>Serviço: </label>
                <input type='text' placeholder='Digite o servico' name='servico' id='servico' onChange={handleChange}/>
                
                <label htmlFor='marca'>Marca do veículo: </label>
                <input type='text' placeholder='Digite a marca do veículo' name='marca' id='marca' onChange={handleChange}/>
                
                <label htmlFor='moto'>Modelo da moto: </label>
                <input type='text' placeholder='Digite o modelo da moto' name='moto' id='moto' onChange={handleChange}/>
                
                <label htmlFor='ano'>Ano: </label>
                <input type='text' placeholder='Digite o ano de fabricacao da moto' name='ano' id='ano' onChange={handleChange}/>
                
                <label htmlFor='data'>Data de retirada: </label>
                <input type='date' placeholder='Data prevista para finalizar o serviço' name='dataRetiradaPrevisao' id='data' onChange={handleChange}/>
                
                <label htmlFor='valor'>Preço do serviço: </label>
                <input type='number' placeholder='Digite o preço do serviço' name='valor' id='valor' onChange={handleChange}/>

                <label htmlFor='desconto'>Desconto do serviço: </label>
                <input type='number' placeholder='Digite o desconto do serviço' name='desconto' id='desconto' onChange={handleChange}/>

                <label htmlFor='valorFinal'>Valor final do serviço: </label>
                <input type='number' placeholder='Preço final' name='valorFinal' id='valorFinal' onChange={handleChange}/>
                
                <label htmlFor='tipoPagamento'>Tipo de pagamento: </label>
                <input type='text' placeholder='Tipo de pagamento' name='tipoPagamento' id='tipoPagamento' onChange={handleChange}/>
                
                {client.length > 0 && <select onChange={handleChange} name='clienteId'>
                    <option value="0">Selecione um cliente</option>
                    {client.map((cliente)=>(
                        <option value={cliente.id} key={cliente.id}>{cliente.nome}</option>
                    ))}
                </select>}

            </div>
              
        </form>
    )
}

export default RegisterService