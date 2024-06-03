import styles from '../Login/login.module.css'
import {Link} from 'react-router-dom'
import api from '../utils/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register(){

    const [user,setUser]= useState({})
    const navegacao = useNavigate()

    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})
        
    }

    async function registro(e){
        e.preventDefault()

        try {
            const data = await api.post("/usuario/cadastrar",user).then((response)=>{
                return response.data
            }).catch((err)=>{
                return err.response.data
            })
            const token = JSON.stringify(data.token)
            localStorage.setItem("token",token)
            navegacao('/user/clientes')
        } catch (error) {
            console.log(error)
            return 
        }

        

    }

    return(
        <div className={styles.form_container} >
            <h1>Cadastrar</h1>
            <form onSubmit={registro}>
               <label htmlFor='nome'>Nome: </label>
               <input type='text' placeholder='Digite seu nome' name='nome' id='nome' onChange={handleChange}/>
               <label htmlFor='cpf'>CPF: </label>
               <input type='number' placeholder='Digite seu cpf' name='cpf' id='cpf' onChange={handleChange}/>
               <label htmlFor='email'>Email: </label>
               <input type='email' placeholder='Digite seu email' name='email' id='email' onChange={handleChange}/>
               <label htmlFor='senha'>Senha: </label>
               <input type='password' placeholder='Digite sua senha' name='senha' id='senha' onChange={handleChange}/>
               <input type='submit' value='Cadastrar'/>           
            </form>
        </div>
    )
}

export default Register