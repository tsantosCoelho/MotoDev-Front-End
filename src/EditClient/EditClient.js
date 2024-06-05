import styles from './EditClient.module.css'
import api from '../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function EditClient(){
    const [client,setClient] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        api.get(`/cliente/${id}`).then((resp)=>{
            setClient(resp.data)
        })
    },[])

    function handleChange(e){
        setClient({...client,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {
            await api.put(`/cliente/${id}`,client).then((resp)=>{
                alert(resp.data)
                window.location.reload()
            }).catch((error)=>{
                alert(error)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit} >
            <div className={styles.title}>
                <h1>Cliente {client.nome}</h1>
                <input type='submit' value='Atualizar' />
            </div>
            <div className={styles.register}>
                <label htmlFor='nome'>Nome: </label>
                <input type='text' value={client.nome} placeholder='Digite seu nome' name='nome' id='nome' onChange={handleChange}/>
                
                <label htmlFor='cpf'>CPF: </label>
                <input type='number' value={client.cpf} placeholder='Digite seu cpf' name='cpf' id='cpf' onChange={handleChange}/>
                
                <label htmlFor='email'>Email: </label>
                <input type='email' value={client.email} placeholder='Digite seu email' name='email' id='email' onChange={handleChange}/>
                
                <label htmlFor='endereco'>Endereço: </label>
                <input type='text' value={client.endereco} placeholder='Digite seu endereço' name='endereco' id='endereco' onChange={handleChange}/>
                
                <label htmlFor='telefone'>Telefone: </label>
                <input type='text' value={client.telefone} placeholder='Digite seu telefone' name='telefone' id='telefone' onChange={handleChange}/>

            </div>
              
        </form>
    )
}

export default EditClient