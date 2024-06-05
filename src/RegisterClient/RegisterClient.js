import styles from './RegisterClient.module.css'
import api from '../utils/api'
import { useState } from 'react'


function RegisterClient(){
    const [client,setClient] = useState({})

    function handleChange(e){
        setClient({...client,[e.target.name]:e.target.value})
        console.log(client)
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {            
            const data = await api.post("/cliente/cadastrar",client).then((response)=>{
                alert("cliente " + JSON.stringify(response.data.nome)+" cadastrado com sucesso")
                return response.data
            }).catch((response)=>{
                alert("Erro ao cadastrar: " + JSON.stringify(response.data))
                return response.data
            })


        } catch (error) {
            alert("Erro"+ error)
        }
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit} >
            <div className={styles.title}>
                <h1>Novo Cliente</h1>
                <input type='submit' value='Salvar' />
            </div>
            <div className={styles.register}>
                <label htmlFor='nome'>Nome: </label>
                <input type='text' placeholder='Digite seu nome' name='nome' id='nome' onChange={handleChange}/>
                <label htmlFor='cpf'>CPF: </label>
                <input type='number' placeholder='Digite seu cpf' name='cpf' id='cpf' onChange={handleChange}/>
                <label htmlFor='email'>Email: </label>
                <input type='email' placeholder='Digite seu email' name='email' id='email' onChange={handleChange}/>
                <label htmlFor='endereco'>Endereço: </label>
                <input type='text' placeholder='Digite seu endereço' name='endereco' id='endereco' onChange={handleChange}/>
                <label htmlFor='telefone'>Telefone: </label>
                <input type='text' placeholder='Digite seu telefone' name='telefone' id='telefone' onChange={handleChange}/>

            </div>
              
        </form>
    )
}

export default RegisterClient